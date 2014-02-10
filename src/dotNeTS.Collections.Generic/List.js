var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotNeTS;
(function (dotNeTS) {
    (function (Collections) {
        (function (Generic) {
            var List = (function (_super) {
                __extends(List, _super);
                function List(innerArray) {
                    _super.call(this, innerArray);
                }
                List.prototype.Add = function (item) {
                    this.innerArray.push(item);
                };
                List.prototype.Remove = function (item) {
                    this.innerArray = _.without(this.innerArray, item);
                };
                return List;
            })(dotNeTS.Collections.Generic.Enumerable);
            Generic.List = List;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(dotNeTS.Collections || (dotNeTS.Collections = {}));
    var Collections = dotNeTS.Collections;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=List.js.map
