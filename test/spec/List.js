'use strict';
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
        userName: "olofd",
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
        var list = new dotNeTS.Collections.Generic.List();
        list.Add(users[0]);
        list.Add(users[1]);
        list.Add(users[2]);
        return list;
    };
    it('Should excist in namespace', function () {
        var list = new dotNeTS.Collections.Generic.List();
        expect(list).toBeDefined();
    });
    it('Should be able to get test data', function () {
        expect(GetUsers().length).toBe(3);
        expect(GetUser()).toBeDefined();
    });
    it('Add defined', function () {
        var list = new dotNeTS.Collections.Generic.List();
        expect(list.Add).toBeDefined();
    });
    it('Add one', function () {
        var testUser = GetUser();
        var list = new dotNeTS.Collections.Generic.List();
        expect(list.Add).toBeDefined();
        list.Add(testUser);
        expect(list.innerArray.length).toBe(1);
    });
    it('Add two', function () {
        var testUser = GetUser();
        var list = new dotNeTS.Collections.Generic.List();
        list.Add(testUser);
        list.Add(testUser);
        expect(list.innerArray.length).toBe(2);
    });
    it('Add constructor', function () {
        var users = GetUsers();
        var list = new dotNeTS.Collections.Generic.List(users);
        expect(list.innerArray.length).toBe(3);
    });
    it('Add one Remove one', function () {
        var testUser = GetUser();
        var list = new dotNeTS.Collections.Generic.List();
        expect(list.Add).toBeDefined();
        list.Add(testUser);
        expect(list.innerArray.length).toBe(1);
        list.Remove(testUser);
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
        list = new dotNeTS.Collections.Generic.List();
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
        list = new dotNeTS.Collections.Generic.List();
        expect(function () {
            list.First();
        }).toThrow();
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
        var users = new dotNeTS.Collections.Generic.List([GetUser()]);
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

    it('Select on element', function () {
        var list = getFilledList();
        var newUsers = list.Select(function (b) {
            return { id: ++b.id, userName: b.userName };
        });
        var fistUser = newUsers.FirstOrDefault();
        expect(fistUser.id).toBe(2);
        expect(fistUser.age).toBeUndefined();
    });
});
//# sourceMappingURL=List.js.map
