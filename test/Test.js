var app;
(function (app) {
    var User = (function () {
        function User() {
        }
        return User;
    })();
    app.User = User;

    var Test = (function () {
        function Test() {
            var List = dotNeTS.Collections.Generic.List;

            //Import namespace
            var user1 = new User();
            var user2 = new User();
            user1.id = 12;
            user1.username = "Olof";
            user2.id = 11;
            user2.username = "Kallee";

            var arrayOfUsers = [user1];

            var user3 = new User();
            user3.id = 19;
            user3.username = "Goran";

            var myList = new List(arrayOfUsers);
            var e = myList.Single();
            console.log(e);

            myList.Select(function (b) {
                return b.username;
            });
        }
        return Test;
    })();
    app.Test = Test;
})(app || (app = {}));

var test = new app.Test();
//# sourceMappingURL=Test.js.map
