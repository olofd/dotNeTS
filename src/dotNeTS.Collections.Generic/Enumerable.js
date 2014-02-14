/// <reference path="../../typings/lodash/lodash.d.ts" />
'use strict';
var dotNeTS;
(function (dotNeTS) {
    (function (Collections) {
        (function (Generic) {
            var Enumerable = (function () {
                function Enumerable(innerArray) {
                    this.innerArray = innerArray || new Array();
                }
                Enumerable.prototype.getEvaluatedCollection = function () {
                    return this.currentCollection;
                };
                Object.defineProperty(Enumerable.prototype, "innerArray", {
                    get: function () {
                        return this.getEvaluatedCollection();
                    },
                    set: function (innerArray) {
                        this.currentCollection = innerArray;
                    },
                    enumerable: true,
                    configurable: true
                });

                Enumerable.prototype.ElementAt = function (index) {
                    return this.innerArray[index];
                };
                Enumerable.prototype.ElementAtOrDefault = function (index) {
                    if (this.innerArray && this.Count() > index) {
                        return this.innerArray[index];
                    }
                    return null;
                };

                //Return false to break
                Enumerable.prototype.ForEach = function (callback) {
                    _.forEach(this.innerArray, callback);
                };
                Enumerable.prototype.Contains = function (item) {
                    return _.contains(this.innerArray, item);
                };
                Enumerable.prototype.OrderBy = function (keySelector) {
                    var ordered = new dotNeTS.Linq.OrderedEnumerable(this);
                    return ordered.OrderBy(keySelector);
                };

                Enumerable.prototype.OrderByDecending = function (callback) {
                    var ordered = new dotNeTS.Linq.OrderedEnumerable(this);
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
                    return new dotNeTS.Collections.Generic.List(this.innerArray);
                };
                return Enumerable;
            })();
            Generic.Enumerable = Enumerable;
        })(Collections.Generic || (Collections.Generic = {}));
        var Generic = Collections.Generic;
    })(dotNeTS.Collections || (dotNeTS.Collections = {}));
    var Collections = dotNeTS.Collections;
})(dotNeTS || (dotNeTS = {}));
//# sourceMappingURL=Enumerable.js.map
