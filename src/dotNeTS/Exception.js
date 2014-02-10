var dotNeTS;
(function (dotNeTS) {
    var Exception = (function () {
        function Exception(name, message) {
            this.message = message;
            this.name = name;
        }
        Exception.prototype.toString = function () {
            return this.name + " was unhandled by user code. Additional information: " + this.message;
        };
        return Exception;
    })();
    dotNeTS.Exception = Exception;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=Exception.js.map
