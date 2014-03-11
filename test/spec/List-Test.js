'use strict';
var List = dotNeTS.List;

function GetUser() {
    return GetUsers()[0];
}

function GetUsers() {
    var userOne = {
        id: 1,
        userName: "olofd",
        firstName: "Olof",
        lastName: "Dahlbom",
        age: 28
    };

    var userTwo = {
        id: 2,
        userName: "mange",
        firstName: "Magnus",
        lastName: "Farje",
        age: 28
    };

    var userThree = {
        id: 3,
        userName: "ludde",
        firstName: "Ludvig",
        lastName: "enstrom",
        age: 26
    };

    return [userOne, userTwo, userThree];
}

describe('Test of List-implementation', function () {
    var getFilledList = function () {
        var users = GetUsers();
        var list = new List();
        list.Add(users[0]);
        list.Add(users[1]);
        list.Add(users[2]);
        return list;
    };
    it('Test accessability', function () {
        expect(dotNeTS.createList).toBeDefined();
        var list = dotNeTS.createList();

        expect(list).toBeDefined();
        expect(dotNeTS).toBeDefined();
        var list = new List();
        expect(list).toBeDefined();
    });
    it('Should be able to get test data', function () {
        expect(GetUsers().length).toBe(3);
        expect(GetUser()).toBeDefined();
    });
    it('Add defined', function () {
        var list = new List();
        expect(list.Add).toBeDefined();
    });
    it('Add one', function () {
        var testUser = GetUser();
        var list = new List();
        expect(list.Add).toBeDefined();
        list.Add(testUser);
        expect(list.innerArray.length).toBe(1);
    });
    it('Add two', function () {
        var testUser = GetUser();
        var list = new List();
        list.Add(testUser);
        list.Add(testUser);
        expect(list.innerArray.length).toBe(2);
    });

    it('Add constructor', function () {
        var users = GetUsers();
        var list = new List(users);
        expect(list.innerArray.length).toBe(3);
    });
    it('Add one Remove one', function () {
        var testUser = GetUser();
        var list = new List();
        expect(list.Add).toBeDefined();
        list.Add(testUser);
        expect(list.innerArray.length).toBe(1);
        list.Remove(testUser);
        expect(list.innerArray.length).toBe(0);
    });
    it('Add range', function () {
        var testUser = GetUser();
        var list = new List();
        list.Add(testUser);
        list.Add(testUser);
        list.AddRange(getFilledList());
        expect(list.innerArray.length).toBe(5);
    });
    it('Dispose List', function () {
        var testUser = GetUser();
        var list = new List();
        list.Add(testUser);
        list.Add(testUser);
        list.AddRange(getFilledList());
        expect(list.innerArray.length).toBe(5);
        list.Dispose();
        expect(list.innerArray.length).toBe(0);
    });
    it('Count three elements and one with predicate', function () {
        var list = getFilledList();
        expect(list.Count()).toBe(3);
        expect(list.Count(function (b) {
            return b.id === 1;
        })).toBe(1);
    });
    it('Where age is 28', function () {
        var list = getFilledList();
        var newList = list.Where(function (b) {
            return b.age === 28;
        });
        expect(list.Count()).toBe(3);
        expect(newList).toBeDefined();
        expect(newList.Count()).toBe(2);
    });
    it('Where id is greater then 1', function () {
        var list = getFilledList();
        var newList = list.Where(function (b) {
            return b.id > 1;
        });
        expect(list.Count()).toBe(3);
        expect(newList).toBeDefined();
        expect(newList.Count()).toBe(2);
    });
    it('FirstOrDefault without predicate', function () {
        var list = getFilledList();
        var user = list.FirstOrDefault();
        expect(user).toBeDefined();
        expect(user.id).toBe(1);
        list = new List();
        expect(list.FirstOrDefault()).toBe(null);
    });
    it('FirstOrDefault with predicate', function () {
        var list = getFilledList();
        var user = list.FirstOrDefault(function (b) {
            return b.userName === "ludde";
        });
        expect(user).toBeDefined();
        expect(user.userName).toBe("ludde");
        user = list.FirstOrDefault(function (b) {
            return b.userName === "kalle";
        });
        expect(user).toBe(null);
    });
    it('First without predicate', function () {
        var list = getFilledList();
        var user = list.First();
        expect(user).toBeDefined();
        expect(user.id).toBe(1);
    });
    it('First all exceptions', function () {
        var list = new List();
        expect(function () {
            list.First();
        }).toThrow("Sequence contains no elements");

        var list = new List();
        list.Add(GetUser());
        expect(function () {
            list.First(function (b) {
                return b.userName === "olof";
            });
        }).toThrow("Sequence contains no matching element");
    });

    it('First with predicate', function () {
        var list = getFilledList();
        var user = list.First(function (b) {
            return b.userName === "ludde";
        });
        expect(user).toBeDefined();
        expect(user.userName).toBe("ludde");
        expect(function () {
            list.First(function (b) {
                return b.userName === "kalle";
            });
        }).toThrow();
    });
    it('Single without predicate', function () {
        var users = new List([GetUser()]);
        var user = users.Single();
        expect(user).toBeDefined();
        var list = getFilledList();
        expect(function () {
            list.Single();
        }).toThrow();
    });
    it('Single with predicate', function () {
        var list = getFilledList();
        var user = list.Single(function (b) {
            return b.userName === "ludde";
        });
        expect(user).toBeDefined();
        expect(user.userName).toBe("ludde");
        expect(function () {
            list.Single(function (b) {
                return b.age === 28;
            });
        }).toThrow();
    });

    it('Select one element', function () {
        var list = getFilledList();
        var newUsers = list.Select(function (b) {
            return { id: ++b.id, userName: b.userName };
        });
        var fistUser = newUsers.FirstOrDefault();
        expect(fistUser.id).toBe(2);
        expect(fistUser.age).toBeUndefined();
    });
    it('Contains', function () {
        var list = getFilledList();
        expect(list.Contains).toBeDefined();
        expect(list.Contains(list.FirstOrDefault())).toBeTruthy();
        expect(list.Contains({})).toBeFalsy();
    });
    it('ForEack', function () {
        var list = getFilledList();
        expect(list.ForEach).toBeDefined();
        list.ForEach(function (user, index, collection) {
            expect(user).toBeDefined();
            expect(index).toBeDefined();
            expect(collection).toBeDefined();
        });
    });
    it('OrderBy', function () {
        var list = getFilledList();
        expect(list.OrderBy).toBeDefined();

        //OrderBy
        var orderTestList = list.OrderBy(function (b) {
            return b.age;
        });
        expect(orderTestList.First().age).toBe(26);

        //OrderByDecending
        orderTestList = list.OrderByDecending(function (b) {
            return b.age;
        });
        expect(orderTestList.First().age).toBe(28);

        //ThenBy
        var newOrderedList = orderTestList.ThenBy(function (b) {
            return b.firstName;
        });
        expect(newOrderedList.First().firstName).toBe("Magnus");

        //ThenByDecending
        orderTestList = orderTestList.ThenByDecending(function (b) {
            return b.firstName;
        });
        expect(orderTestList.First().firstName).toBe("Olof");
    });

    it('ElementAt', function () {
        var list = getFilledList();
        expect(list.ElementAt).toBeDefined();
        expect(list.ElementAtOrDefault).toBeDefined();
        expect(list.ElementAt(0)).toBeDefined();
        expect(list.ElementAt(2)).toBeDefined();
        expect(function () {
            list.ElementAt(3);
        }).toThrow("Index was out of range. Must be non-negative and less than the size of the collection.");
    });

    it('Update', function () {
        var list = getFilledList();

        list.ReplaceWith({
            id: 1,
            userName: "maria",
            firstName: "Maria",
            lastName: "Fredriksson",
            age: 32
        }, function (newVal, oldVal) {
            return newVal.id === oldVal.id;
        });
        var idOne = list.FirstOrDefault(function (b) {
            return b.id === 1;
        }).userName;
        expect(idOne).toBe('maria');
    });

    it('Insert', function () {
        var list = getFilledList();
        var element = getFilledList().ElementAt(2);
        list.Insert(0, element);
        expect(list.ElementAt(0).id).toBe(3);
        expect(list.ElementAt(1).id).toBe(1);
        expect(list.Count()).toBe(4);
    });

    it('Group By', function () {
        var list = getFilledList();
        var outerList = new List([list]);
        var grouping = list.GroupBy(function (b) {
            return b.age;
        });
        var firstGroup = grouping.Where(function (b) {
            return b.Key === 28;
        }).FirstOrDefault();
        expect(firstGroup.Count()).toBe(2);
    });
});
//# sourceMappingURL=List-Test.js.map
