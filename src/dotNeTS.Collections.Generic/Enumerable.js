var dotNeTS;
(function (dotNeTS) {
    (function (Collections) {
        /// <reference path="../../typings/lodash/lodash.d.ts" />
        (function (Generic) {
            var Enumerable = (function () {
                function Enumerable(innerArray) {
                    this.innerArray = innerArray || new Array();
                }
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
                    return _.map(this.innerArray, callback);
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
