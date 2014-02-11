
module app {

    export class User {
        id: number
        username: string;
    }

    export class Test {
        constructor() {

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

            var myList = new List<User>(arrayOfUsers);
            var e = myList.Single();
            console.log(e);

            myList.Select(b=> b.username);

        }


    }
}

var test = new app.Test();