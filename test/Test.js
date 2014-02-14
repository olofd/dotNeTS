var app;
(function (app) {
    var UserManager = (function () {
        function UserManager() {
            //Import namespace
            //var List = dotNeTS.List;
            //Random Data
            var user1 = {
                id: 1,
                username: "olofd"
            };
            var user2 = {
                id: 2,
                username: "ludde"
            };

            //Regular javascript array;
            var arrayOfUsers = [user1, user2];
            //Create List<User>
            //var myList = new List<User>(arrayOfUsers);
            //var userNameArray = myList.Where(b=> b.id === 1).Select(b=> b.username).ToArray();
            //console.log(userNameArray);
            //=> ['olofd']
        }
        return UserManager;
    })();
    app.UserManager = UserManager;
})(app || (app = {}));
var userMgr = new app.UserManager();
//# sourceMappingURL=Test.js.map
