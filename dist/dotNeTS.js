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
    function createList(startArray) {
        return new dotNeTS.List(startArray);
    }
    dotNeTS.createList = createList;
})(dotNeTS || (dotNeTS = {}));
'use strict';
var dotNeTS;
(function (dotNeTS) {
    var Enumerable = (function () {
        function Enumerable(innerArray) {
            this.innerArray = innerArray;
        }
        Enumerable.prototype.getEvaluatedCollection = function () {
            return this.currentCollection;
        };
        Object.defineProperty(Enumerable.prototype, "innerArray", {
            get: function () {
                if (!this.currentCollection) {
                    this.innerArray = new Array();
                }
                return this.getEvaluatedCollection();
            },
            set: function (innerArray) {
                this.currentCollection = innerArray;
            },
            enumerable: true,
            configurable: true
        });

        Enumerable.prototype.GroupBy = function (callback) {
            var listOfGroupings = new dotNeTS.List();
            this.ForEach(function (item, index, col) {
                var resultFound = false;
                var result = callback(item, index, col);
                listOfGroupings.ForEach(function (innerItem, innerIndex, innerCol) {
                    if (innerItem.Key === result) {
                        innerItem.Add(item);
                        resultFound = true;
                        return false;
                    }
                });
                if (!resultFound) {
                    listOfGroupings.Add(new dotNeTS.Grouping(result, [item]));
                }
            });

            return listOfGroupings;
        };
        Enumerable.prototype.ElementAt = function (index) {
            if (index >= this.Count()) {
                throw new dotNeTS.ArgumentOutOfRangeException("Index was out of range. Must be non-negative and less than the size of the collection.");
            }
            return this.innerArray[index];
        };
        Enumerable.prototype.ElementAtOrDefault = function (index) {
            if (this.innerArray && this.Count() > index) {
                return this.innerArray[index];
            }
            return null;
        };

        Enumerable.prototype.ForEach = function (callback) {
            _.forEach(this.innerArray, callback);
        };
        Enumerable.prototype.Contains = function (item) {
            return _.contains(this.innerArray, item);
        };
        Enumerable.prototype.OrderBy = function (keySelector) {
            var ordered = new dotNeTS.OrderedEnumerable(this);
            return ordered.OrderBy(keySelector);
        };

        Enumerable.prototype.OrderByDecending = function (callback) {
            var ordered = new dotNeTS.OrderedEnumerable(this);
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

        Enumerable.prototype.Dispose = function () {
            this.currentCollection = undefined;
        };
        return Enumerable;
    })();
    dotNeTS.Enumerable = Enumerable;
})(dotNeTS || (dotNeTS = {}));
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
var dotNeTS;
(function (dotNeTS) {
    var OrderedEnumerable = (function (_super) {
        __extends(OrderedEnumerable, _super);
        function OrderedEnumerable(parent) {
            _super.call(this, parent.currentCollection);
        }
        OrderedEnumerable.prototype.getEvaluatedCollection = function () {
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
                expression: callback,
                sortOrder: sortOrder
            });
        };
        OrderedEnumerable.prototype.OrderBy = function (keySelector) {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(keySelector, 0 /* ASC */);
            return this;
        };
        OrderedEnumerable.prototype.OrderByDecending = function (callback) {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(callback, 1 /* DESC */);
            return this;
        };
        OrderedEnumerable.prototype.ThenBy = function (callback) {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = _.clone(this.sortExpressions);
            newOrdered.AddLazyOrderInternal(callback, 0 /* ASC */);
            return newOrdered;
        };
        OrderedEnumerable.prototype.ThenByDecending = function (callback) {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = _.clone(this.sortExpressions);
            newOrdered.AddLazyOrderInternal(callback, 1 /* DESC */);
            return newOrdered;
        };
        OrderedEnumerable.prototype.EvaluateOrderBy = function () {
            var _this = this;
            this.currentCollection.sort(function (e1, e2) {
                var sortReturn = 0;
                _.forEach(_this.sortExpressions, function (exp) {
                    var order = exp.sortOrder;
                    var e1Exp = exp.expression.call(this, e1);
                    var e2Exp = exp.expression.call(this, e2);
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
        OrderedEnumerable.prototype.Dispose = function () {
            delete this.sortExpressions;
            _super.prototype.Dispose.call(this);
        };
        return OrderedEnumerable;
    })(dotNeTS.Enumerable);
    dotNeTS.OrderedEnumerable = OrderedEnumerable;
})(dotNeTS || (dotNeTS = {}));
var dotNeTS;
(function (dotNeTS) {
    (function (SortOrder) {
        SortOrder[SortOrder["ASC"] = 0] = "ASC";
        SortOrder[SortOrder["DESC"] = 1] = "DESC";
    })(dotNeTS.SortOrder || (dotNeTS.SortOrder = {}));
    var SortOrder = dotNeTS.SortOrder;
})(dotNeTS || (dotNeTS = {}));
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
