var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotNeTS;
(function (dotNeTS) {
    var ArgumentOutOfRangeException = (function (_super) {
        __extends(ArgumentOutOfRangeException, _super);
        function ArgumentOutOfRangeException(message) {
            _super.call(this, "ArgumentOutOfRangeException", message);
        }
        return ArgumentOutOfRangeException;
    })(dotNeTS.Exception);
    dotNeTS.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=ArgumentOutOfRangeException.js.map
