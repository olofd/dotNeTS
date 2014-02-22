dotNeTS
=======

.NET library-syntax for typescript/javascript

This library aims to implement the good parts of .Net-syntax in typescript/javascript.
If you're new to javascript you'll have a hard time dealing with the functional style
of programming often implemented in ex. lodash for dealing with data-operations.
dotNeTS gives you lambda expressions and full implementation (soon) of System.Collection.Generics.

dotNeTS also aims to NOT reinvent the wheel and uses javascript 'best-choices' for data-mainpulation
and functionality. e.g the List-implementation relies on lodash.

And **YES** right now, this library uses uppercase for methods, something that is frowned upon in javascript-world.
I know about the dangers with the new-operator and binding this to global-object. But my defence is that dotNeTS soon
will compile to two seperate libraries one with uppercase(.NET-ish) and one that passes jslint. And also that
if you use typescript, it helps you avoid the new and this-pitfalls (some atleast). At the end of the day, you still need
to know what you�re doing.

And **YES** I know all about [Linq.js](http://linqjs.codeplex.com/), but this library is much, much smaller
and sits ontop of lodash. I built it to avoid having to pull in lodash and Linq.js in one of my latest projects.


dependencies:
*   lodash

Install:

    bower install dotNeTS


Example 1:

        module app {
            interface User {
                id: number
                username: string;
            }
            export class UserManager {
                constructor() {
                    //Import namespace
                    var List = dotNeTS.List;
    
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

Example 2 (Actual code from project)                    

    var languagesAvailable = allLanguages.Where(s => !languagesAlreadyAdded.Where(es => es.LangCode === s.value).Any())
                            .Where(b => b.language && b.language !== "")
                            .OrderBy(b => b.language)
                            .ThenBy(b => b.country);
    return languagesAvailable.ToArray();:


Implementet classes:
* System.Exception
* System.InvalidOperationException
* System.Collections.Generic.Enumerable
    * First(predicate?: _.ListIterator&lt;T, boolean>): T


Implemented interfaces:
* System.Collections.IEnumerable
* System.Collections.IList