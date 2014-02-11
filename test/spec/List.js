/// <reference path="../../../scripts/typings/jasmine/jasmine.d.ts" />
'use strict';
var User = (function () {
    function User() {
    }
    return User;
})();
function GetUser() {
    return GetUsers()[0];
}

function GetUsers() {
    var userOne = new User();
    userOne.id = 1;
    userOne.firstName = "Olof";
    userOne.lastName = "Dahlbom";
    userOne.userName = "olofd";
    userOne.age = 28;

    var userTwo = new User();
    userTwo.id = 2;
    userTwo.firstName = "Magnus";
    userTwo.lastName = "Farje";
    userTwo.userName = "mfe";
    userTwo.age = 28;

    var userThree = new User();
    userThree.id = 3;
    userThree.firstName = "Ludvig";
    userThree.lastName = "Enstrom";
    userThree.userName = "ludde";
    userThree.age = 26;

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
});
//# sourceMappingURL=List.js.map
