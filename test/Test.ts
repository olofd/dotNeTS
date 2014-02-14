module app {
    interface User {
        id: number
        username: string;
    }
    export class UserManager {
        constructor() {
            //Import namespace
            //var List = dotNeTS.List;

            //Random Data
            var user1: User = {
                id: 1,
                username: "olofd",
            };
            var user2: User = {
                id: 2,
                username: "ludde",
            };

            //Regular javascript array;
            var arrayOfUsers = [user1, user2];

            //Create List<User>
            //var myList = new List<User>(arrayOfUsers);
            //var userNameArray = myList.Where(b=> b.id === 1).Select(b=> b.username).ToArray();
            //console.log(userNameArray);
            //=> ['olofd']
        }
    }
}
var userMgr = new app.UserManager();