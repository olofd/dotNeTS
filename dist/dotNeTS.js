var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dotNeTS;
(function (dotNeTS) {
    var Enumerable = (function () {
        function Enumerable(innerArray) {
            this.innerArray = innerArray || new Array();
        }
        Enumerable.prototype.getCollection = function () {
            return this.currentCollection;
        };
        Object.defineProperty(Enumerable.prototype, "innerArray", {
            get: function () {
                return this.getCollection();
            },
            set: function (innerArray) {
                this.currentCollection = innerArray;
            },
            enumerable: true,
            configurable: true
        });

        Enumerable.prototype.ForEach = function (callback) {
            _.forEach(this.innerArray, callback);
        };
        Enumerable.prototype.Contains = function (item) {
            return _.contains(this.innerArray, item);
        };
        Enumerable.prototype.OrderBy = function (callback) {
            var ordered = new OrderedEnumerable(this);
            return ordered.OrderBy(callback);
        };

        Enumerable.prototype.OrderByDecending = function (callback) {
            var ordered = new OrderedEnumerable(this);
            return ordered.OrderByDecending(callback);
        };
        Enumerable.prototype.First = function (predicate) {
            if (!this.Any()) {
                throw new dotNeTS.InvalidOperationException("Sequence contains no elements");
            }
            var result = this.FirstOrDefault(predicate);
            if (!result) {
                throw new dotNeTS.InvalidOperationException("Sequence contains no matching element");
            }
            return result;
        };
        Enumerable.prototype.FirstOrDefault = function (predicate) {
            if (!this.Any()) {
                return null;
            }
            if (predicate) {
                var result = _.find(this.innerArray, predicate);
                if (!result) {
                    return null;
                }
                return result;
            }
            return this.innerArray[0] || null;
        };

        Enumerable.prototype.Single = function (predicate) {
            if (!this.Any()) {
                throw new dotNeTS.InvalidOperationException("Sequence contains no elements");
            }

            if (predicate) {
                var elements = _.where(this.innerArray, predicate);
                var count = elements.length;
                if (count === 0) {
                    throw new dotNeTS.InvalidOperationException("Sequence contains no matching elements");
                }
                if (count > 1) {
                    throw new dotNeTS.InvalidOperationException("Sequence contains more than one matching element");
                }
                return elements[0];
            }
            if (this.innerArray.length > 1) {
                throw new dotNeTS.InvalidOperationException("Sequence contains more than one matching element");
            }
            return this.innerArray[0] || null;
        };

        Enumerable.prototype.SingleOrDefault = function (predicate) {
            if (!this.Any()) {
                return null;
            }
            if (predicate) {
                var elements = _.where(this.innerArray, predicate);
                var count = elements.length;
                if (count === 0) {
                    return null;
                }
                if (count > 1) {
                    return null;
                }
                return elements[0];
            }
            if (this.innerArray.length > 1) {
                return null;
            }
            return this.innerArray[0] || null;
        };

        Enumerable.prototype.Any = function (predicate) {
            if (predicate) {
                return _.any(this.innerArray, predicate);
            }
            return this.Count() > 0;
        };

        Enumerable.prototype.Count = function (predicate) {
            if (predicate) {
                return _.where(this.innerArray, predicate).length;
            }
            return this.innerArray.length;
        };

        Enumerable.prototype.Select = function (callback) {
            return new Enumerable(_.map(this.innerArray, callback));
        };

        Enumerable.prototype.Where = function (predicate) {
            return new Enumerable(_.where(this.innerArray, predicate));
        };

        Enumerable.prototype.ToArray = function () {
            return this.innerArray;
        };

        Enumerable.prototype.ToList = function () {
            return new dotNeTS.List(this.innerArray);
        };
        return Enumerable;
    })();
    dotNeTS.Enumerable = Enumerable;
    var OrderedEnumerableSortValueAndEntity = (function () {
        function OrderedEnumerableSortValueAndEntity() {
            this.sortValues = [];
        }
        return OrderedEnumerableSortValueAndEntity;
    })();
    dotNeTS.OrderedEnumerableSortValueAndEntity = OrderedEnumerableSortValueAndEntity;
    (function (SortOrder) {
        SortOrder[SortOrder["ASC"] = 0] = "ASC";
        SortOrder[SortOrder["DESC"] = 1] = "DESC";
    })(dotNeTS.SortOrder || (dotNeTS.SortOrder = {}));
    var SortOrder = dotNeTS.SortOrder;
    var OrderedEnumerable = (function (_super) {
        __extends(OrderedEnumerable, _super);
        function OrderedEnumerable(parent) {
            _super.call(this, parent.currentCollection);
        }
        OrderedEnumerable.prototype.getCollection = function () {
            if (this.sortExpressions) {
                return this.EvaluateOrderBy();
            }
            return this.currentCollection;
        };
        OrderedEnumerable.prototype.AddLazyOrderInternal = function (callback, sortOrder) {
            if (!this.sortExpressions) {
                this.sortExpressions = new Array();
            }
            this.sortExpressions.push({
                sortExp: callback,
                sortOrder: sortOrder
            });
        };
        OrderedEnumerable.prototype.OrderBy = function (callback) {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(callback, 0 /* ASC */);
            return this;
        };
        OrderedEnumerable.prototype.OrderByDecending = function (callback) {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(callback, 1 /* DESC */);
            return this;
        };
        OrderedEnumerable.prototype.ThenBy = function (callback) {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = this.sortExpressions;
            newOrdered.AddLazyOrderInternal(callback, 0 /* ASC */);
            return newOrdered;
        };
        OrderedEnumerable.prototype.ThenByDecending = function (callback) {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = this.sortExpressions;
            newOrdered.AddLazyOrderInternal(callback, 1 /* DESC */);
            return newOrdered;
        };
        OrderedEnumerable.prototype.EvaluateOrderBy = function () {
            var _this = this;
            this.currentCollection.sort(function (e1, e2) {
                var sortReturn = 0;
                _.forEach(_this.sortExpressions, function (exp) {
                    var order = exp.sortOrder;
                    var e1Exp = exp.sortExp.call(this, e1);
                    var e2Exp = exp.sortExp.call(this, e2);
                    if (e1Exp > e2Exp) {
                        sortReturn = order === 0 /* ASC */ ? 1 : -1;
                        return false;
                    }
                    if (e1Exp < e2Exp) {
                        sortReturn = order === 0 /* ASC */ ? -1 : 1;
                        return false;
                    }
                });

                return sortReturn;
            });
            return this.currentCollection;
        };
        return OrderedEnumerable;
    })(Enumerable);
    dotNeTS.OrderedEnumerable = OrderedEnumerable;
})(dotNeTS || (dotNeTS = {}));
var dotNeTS;
(function (dotNeTS) {
    function createList(startArray) {
        return new dotNeTS.List(startArray);
    }
    dotNeTS.createList = createList;
})(dotNeTS || (dotNeTS = {}));
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
        List.prototype.Remove = function (item) {
            this.innerArray = _.without(this.innerArray, item);
        };
        return List;
    })(dotNeTS.Enumerable);
    dotNeTS.List = List;
})(dotNeTS || (dotNeTS = {}));
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
//# sourceMappingURL=dotNeTS.js.map
