'use strict';

interface User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
}
function GetUser(): User {
    return GetUsers()[0];
}

function GetUsers(): User[] {
    var userOne: User = {
        id : 1,
        userName : "olofd",
        firstName : "Olof",
        lastName : "Dahlbom",
        age : 28
    };

    var userTwo: User = {
        id: 2,
        userName: "mange",
        firstName: "Magnus",
        lastName: "Farje",
        age: 28
    };

    var userThree: User = {
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
        var list = new dotNeTS.List<User>();
        list.Add(users[0]);
        list.Add(users[1]);
        list.Add(users[2]);
        return list;
    };
    it('Should excist in namespace', function () {
        var list = new dotNeTS.List();
        expect(list).toBeDefined();
    });
    it('Should be able to get test data', function () {
        expect(GetUsers().length).toBe(3);
        expect(GetUser()).toBeDefined();
    });
    it('Add defined', function () {
        var list = new dotNeTS.List<User>();
        expect(list.Add).toBeDefined();
    });
    it('Add one', function () {
        var testUser = GetUser();
        var list = new dotNeTS.List<User>();
        expect(list.Add).toBeDefined();
        list.Add(testUser);
        expect(list.innerArray.length).toBe(1);

    });
    it('Add two', function () {
        var testUser = GetUser();
        var list = new dotNeTS.List<User>();
        list.Add(testUser);
        list.Add(testUser);
        expect(list.innerArray.length).toBe(2);
         
    });
    it('Add constructor', function () {
        var users = GetUsers();
        var list = new dotNeTS.List<User>(users);
        expect(list.innerArray.length).toBe(3);
    });
    it('Add one Remove one', function () {
        var testUser = GetUser();
        var list = new dotNeTS.List<User>();
        expect(list.Add).toBeDefined();
        list.Add(testUser);
        expect(list.innerArray.length).toBe(1);
        list.Remove(testUser);
        expect(list.innerArray.length).toBe(0);
    });
    it('Count three elements and one with predicate', function () {
        var list = getFilledList();
        expect(list.Count()).toBe(3);
        expect(list.Count(b => b.id === 1)).toBe(1);
    });
    it('Where age is 28', function () {
        var list = getFilledList();
        var newList = list.Where(b=> b.age === 28);
        expect(list.Count()).toBe(3);
        expect(newList).toBeDefined();
        expect(newList.Count()).toBe(2);

    });
    it('Where id is greater then 1', function () {
        var list = getFilledList();
        var newList = list.Where(b=> b.id > 1);
        expect(list.Count()).toBe(3);
        expect(newList).toBeDefined();
        expect(newList.Count()).toBe(2);
    });
    it('FirstOrDefault without predicate', function () {
        var list = getFilledList();
        var user = list.FirstOrDefault();
        expect(user).toBeDefined();  
        expect(user.id).toBe(1);
        list = new dotNeTS.List<User>();
        expect(list.FirstOrDefault()).toBe(null);
    });
    it('FirstOrDefault with predicate', function () {
        var list = getFilledList();
        var user = list.FirstOrDefault(b => b.userName === "ludde");
        expect(user).toBeDefined();
        expect(user.userName).toBe("ludde");
        user = list.FirstOrDefault(b=> b.userName === "kalle");
        expect(user).toBe(null);

    });
    it('First without predicate', function () {
        var list = getFilledList();
        var user = list.First();
        expect(user).toBeDefined();
        expect(user.id).toBe(1);
    });
    it('First all exceptions', function () {
        var list = new dotNeTS.List<User>();
        expect(function () {
            list.First(); 
        }).toThrow("Sequence contains no elements");

        var list = new dotNeTS.List<User>();
        list.Add(GetUser());
        expect(function () {
            list.First(b => b.userName === "olof");
        }).toThrow("Sequence contains no matching element");
    });

    it('First with predicate', function () {
        var list = getFilledList();
        var user = list.First(b => b.userName === "ludde");
        expect(user).toBeDefined();
        expect(user.userName).toBe("ludde");
        expect(function () {
            list.First(b => b.userName === "kalle");
        }).toThrow();
    });
    it('Single without predicate', function () {
        var users = new dotNeTS.List<User>([GetUser()]);
        var user = users.Single();
        expect(user).toBeDefined();
        var list = getFilledList();
        expect(function () { list.Single(); }).toThrow(); 
    });
    it('Single with predicate', function () {
        var list = getFilledList();
        var user = list.Single(b => b.userName === "ludde");
        expect(user).toBeDefined();
        expect(user.userName).toBe("ludde");
        expect(function () {
            list.Single(b => b.age === 28);
        }).toThrow();
    });

    it('Select one element', function() {
        var list = getFilledList();
        var newUsers = list.Select(b=> <User>{id : ++b.id, userName : b.userName});
        var fistUser = newUsers.FirstOrDefault(); 
        expect(fistUser.id).toBe(2);
        expect(fistUser.age).toBeUndefined();
    });
    it('Contains', function() {
        var list = getFilledList();
        expect(list.Contains).toBeDefined();
        expect(list.Contains(list.FirstOrDefault())).toBeTruthy();
        expect(list.Contains(<User>{})).toBeFalsy();
    });
    it('ForEack', function () {
        var list = getFilledList();
        expect(list.ForEach).toBeDefined();
        list.ForEach((user, index, collection) => {
            expect(user).toBeDefined();
            expect(index).toBeDefined();
            expect(collection).toBeDefined();
        });
    });
    it('OrderBy', function () {
        var list = getFilledList();
        expect(list.OrderBy).toBeDefined();
        var firstNameOrder = list.OrderByDecending(b => b.age);
        var nameThenAge = firstNameOrder.ThenBy(b => b.firstName);
        _.map(nameThenAge.sortExpressions, function (e) {
            console.log(e); 
        });
        var list = nameThenAge.ToList();
        console.log(list.First());
        //var first = nameThenAge.Count();
    });

});
  