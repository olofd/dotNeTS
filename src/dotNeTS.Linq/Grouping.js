var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotNeTS;
(function (dotNeTS) {
    var Grouping = (function (_super) {
        __extends(Grouping, _super);
        function Grouping(Key, innerArray) {
            _super.call(this, innerArray);
            this.Key = Key;
        }
        return Grouping;
    })(dotNeTS.List);
    dotNeTS.Grouping = Grouping;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=Grouping.js.map
