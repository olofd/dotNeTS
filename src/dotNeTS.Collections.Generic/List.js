var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotNeTS;
(function (dotNeTS) {
    var List = (function (_super) {
        __extends(List, _super);
        function List(innerArray) {
            _super.call(this, innerArray);
        }
        List.prototype.Add = function (item) {
            this.innerArray.push(item);
        };
        List.prototype.AddRange = function (collection) {
            var _this = this;
            collection.ForEach(function (b) {
                return _this.Add(b);
            });
        };
        List.prototype.Remove = function (item) {
            this.innerArray = _.without(this.innerArray, item);
        };
        List.prototype.ReplaceWith = function (replaceItem, whereSelector) {
            var _this = this;
            var valuesToUpdate = _.where(this.innerArray, function (value, index, list) {
                return whereSelector(replaceItem, value, index, list);
            });
            _.forEach(valuesToUpdate, function (value) {
                var index = _this.IndexOf(value);
                if (index !== -1) {
                    _this.innerArray[index] = replaceItem;
                }
            });
        };
        List.prototype.RemoveAt = function (index) {
        };
        List.prototype.Clear = function () {
        };

        List.prototype.IndexOf = function (item) {
            return this.innerArray.indexOf(item);
        };
        List.prototype.Insert = function (index) {
            var item = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                item[_i] = arguments[_i + 1];
            }
            var args = [index, 0];
            Array.prototype.push.apply(args, Array.prototype.slice.call(arguments, 1));
            Array.prototype.splice.apply(this.innerArray, args);
        };

        List.prototype.Dispose = function () {
            _super.prototype.Dispose.call(this);
        };
        return List;
    })(dotNeTS.Enumerable);
    dotNeTS.List = List;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=List.js.map
