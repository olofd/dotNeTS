dotNeTS
=======

.NET library-syntax for typescript/javascript

This library aims to implement the good parts of .Net-syntax in typescript/javascript.
If you're new to javascript you'll have a hard time dealing with the functional style
of programming often implemented in ex. lodash for dealing with data-operations.
dotNeTS gives you lambda expressions and full implementation (soon) of System.Collection.Generics.

dotNeTS also aims to NOT reinvent the wheel and use javascript 'best-choices' for data-mainpulation
and functionality. e.g the List-implementation relies on lodash.

dependencies:
*   lodash



        module app {
            interface User {
                id: number
                username: string;
            }
            export class UserManager {
                constructor() {
                    //Import namespace
                    var List = dotNeTS.Collections.Generic.List;
    
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
                    var myList = new List<User>(arrayOfUsers);
                    var userNameArray = myList.Where(b=> b.id === 1).Select(b=> b.username).ToArray();
                    console.log(userNameArray);
                    //=> ['olofd']
                }
            }
        }
        var userMgr = new app.UserManager();