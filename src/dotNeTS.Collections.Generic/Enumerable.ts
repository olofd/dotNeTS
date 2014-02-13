/// <reference path="../../typings/lodash/lodash.d.ts" />
module dotNeTS {
    export class Enumerable<T> implements IEnumerable<T> {
        public currentCollection: Array<T>;
        public getCollection() {
            return this.currentCollection;
        }
        get innerArray(): Array<T> {
            return this.getCollection();
        }
        set innerArray(innerArray: Array<T>) {
            this.currentCollection = innerArray;
        }

        constructor(innerArray?: Array<T>) {
            this.innerArray = innerArray || new Array<T>();

        }
        //Return false to break
        ForEach(callback: _.ListIterator<T, void>) {
            _.forEach(this.innerArray, callback);
        }
        Contains(item: T) {
            return _.contains(this.innerArray, item);
        }
        OrderBy<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T> {
            var ordered = new OrderedEnumerable(this);
            return ordered.OrderBy(callback); 
        }

        OrderByDecending<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T> {
            var ordered = new OrderedEnumerable(this);
            return ordered.OrderByDecending(callback);
        }
        First(predicate?: _.ListIterator<T, boolean>): T {
            if (!this.Any()) {
                throw new dotNeTS.InvalidOperationException("Sequence contains no elements");
            }
            var result = this.FirstOrDefault(predicate);
            if (!result) {
                throw new dotNeTS.InvalidOperationException("Sequence contains no matching element");
            }
            return result;
        }
        FirstOrDefault(predicate?: _.ListIterator<T, boolean>): T {
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
        }

        Single(predicate?: _.ListIterator<T, boolean>): T {
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
        }

        SingleOrDefault(predicate?: _.ListIterator<T, boolean>): T {
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
        }

        Any(predicate?: _.ListIterator<T, boolean>): boolean {
            if (predicate) {
                return _.any(this.innerArray, predicate);
            }
            return this.Count() > 0;
        }

        Count(predicate?: _.ListIterator<T, boolean>): number {
            if (predicate) {
                return _.where(this.innerArray, predicate).length;
            }
            return this.innerArray.length;
        }

        Select<TResult>(callback: _.ListIterator<T, TResult>) {
            return new Enumerable<TResult>(_.map(this.innerArray, callback));
        }

        Where(predicate?: _.ListIterator<T, boolean>): Enumerable<T> {
            return new Enumerable(_.where(this.innerArray, predicate));
        }

        ToArray() {
            return this.innerArray;
        }

        ToList() {
            return new List<T>(this.innerArray);
        }

    }
    export class OrderedEnumerableSortValueAndEntity<T>{
        entity: T;
        sortValues = [];

    }
    export enum SortOrder {
        ASC,
        DESC
    }
    export class OrderedEnumerable<T> extends Enumerable<T>{
        constructor(parent: Enumerable<T>) {
            super(parent.currentCollection);

        }
        sortExpressions: Array<any>;
        public getCollection(): T[] {
            if (this.sortExpressions) {
                return this.EvaluateOrderBy();
            }
            return this.currentCollection;
        }
        private AddLazyOrderInternal<TSort>(callback: _.ListIterator<T, TSort>, sortOrder: SortOrder) {
            if (!this.sortExpressions) {
                this.sortExpressions = new Array<any>();
            }
            this.sortExpressions.push({
                sortExp: callback,
                sortOrder: sortOrder
            });
        }
        OrderBy<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T> {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(callback, SortOrder.ASC);
            return this;
        }
        OrderByDecending<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T> {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(callback, SortOrder.DESC);
            return this;
        }
        ThenBy<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T> {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = this.sortExpressions;
            newOrdered.AddLazyOrderInternal(callback, SortOrder.ASC);
            return newOrdered;
        }
        ThenByDecending<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T> {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = this.sortExpressions;
            newOrdered.AddLazyOrderInternal(callback, SortOrder.DESC);
            return newOrdered;
        }
        private EvaluateOrderBy(): T[] {
            this.currentCollection.sort((e1, e2) => {
                var sortReturn = 0;
                _.forEach(this.sortExpressions, function (exp) {
                    var order = exp.sortOrder;
                    var e1Exp = exp.sortExp.call(this, e1);
                    var e2Exp = exp.sortExp.call(this, e2);
                    if (e1Exp > e2Exp) {
                        sortReturn = order === SortOrder.ASC ? 1 : -1;
                        return false;
                    }
                    if (e1Exp < e2Exp) {
                        sortReturn = order === SortOrder.ASC ? -1 : 1;
                        return false;
                    }
                });

                return sortReturn;
            })
            return this.currentCollection;
        }
    }

}