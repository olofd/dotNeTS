var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotNeTS;
(function (dotNeTS) {
    var InvalidOperationException = (function (_super) {
        __extends(InvalidOperationException, _super);
        function InvalidOperationException(message) {
            _super.call(this, "InvalidOperationException", message);
        }
        return InvalidOperationException;
    })(dotNeTS.Exception);
    dotNeTS.InvalidOperationException = InvalidOperationException;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=InvalidOperationException.js.map
