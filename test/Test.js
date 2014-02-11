var app;
(function (app) {
    var UserManager = (function () {
        function UserManager() {
            //Import namespace
            var List = dotNeTS.Collections.Generic.List;

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
            var myList = new List(arrayOfUsers);
            var userNameArray = myList.Where(function (b) {
                return b.id === 1;
            }).Select(function (b) {
                return b.username;
            }).ToArray();
            console.log(userNameArray);
            //=> ['olofd']
        }
        return UserManager;
    })();
    app.UserManager = UserManager;
})(app || (app = {}));
var userMgr = new app.UserManager();
//# sourceMappingURL=Test.js.map
