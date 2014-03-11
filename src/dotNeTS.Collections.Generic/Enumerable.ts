/// <reference path="../../typings/lodash/lodash.d.ts" />
'use strict'
module dotNeTS {
    export class Enumerable<TSource> implements IEnumerable<TSource> {
        public currentCollection: Array<TSource>;
        public getEvaluatedCollection() {
            return this.currentCollection;
        }
        get innerArray(): Array<TSource> {
            if (!this.currentCollection) {
                this.innerArray = new Array<TSource>();
            }
            return this.getEvaluatedCollection();
        }
        set innerArray(innerArray: Array<TSource>) {
            this.currentCollection = innerArray;
        }

        constructor(innerArray?: Array<TSource>) {
            this.innerArray = innerArray;

        }
        GroupBy<TResult>(callback: IFunc<TSource, TResult>) : IEnumerable<IGrouping<TResult, TSource>> {
            var listOfGroupings = new List<Grouping<TResult, TSource>>();
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
                    listOfGroupings.Add(new Grouping(result, [item]));
                }
            });

            return listOfGroupings;
        }
        ElementAt(index: number): TSource {
            if (index >= this.Count()) {
                throw new ArgumentOutOfRangeException("Index was out of range. Must be non-negative and less than the size of the collection.");
            }
            return this.innerArray[index];
        }
        ElementAtOrDefault(index: number): TSource {
            if (this.innerArray && this.Count() > index) {
                return this.innerArray[index];
            }
            return null;
        }
        //Return false to break
        ForEach(callback: dotNeTS.IFunc<TSource, void>): void {
            _.forEach(this.innerArray, callback);
        }
        Contains(item: TSource): boolean {
            return _.contains(this.innerArray, item);
        }
        OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): IOrderedEnumerable<TSource> {
            var ordered = new dotNeTS.OrderedEnumerable(this);
            return ordered.OrderBy(keySelector);
        }

        OrderByDecending<TKey>(callback: IFunc<TSource, TKey>): IOrderedEnumerable<TSource> {
            var ordered = new dotNeTS.OrderedEnumerable(this);
            return ordered.OrderByDecending(callback);
        }
        First(predicate?: IFunc<TSource, boolean>): TSource {
            if (!this.Any()) {
                throw new dotNeTS.InvalidOperationException("Sequence contains no elements");
            }
            var result = this.FirstOrDefault(predicate);
            if (!result) {
                throw new InvalidOperationException("Sequence contains no matching element");
            }
            return result;
        }
        FirstOrDefault(predicate?: IFunc<TSource, boolean>): TSource {
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
        Single(predicate?: IFunc<TSource, boolean>): TSource {
            if (!this.Any()) {
                throw new InvalidOperationException("Sequence contains no elements");
            }
            if (predicate) {
                var elements = _.where(this.innerArray, predicate);
                var count = elements.length;
                if (count === 0) {
                    throw new InvalidOperationException("Sequence contains no matching elements");
                }
                if (count > 1) {
                    throw new InvalidOperationException("Sequence contains more than one matching element");
                }
                return elements[0];
            }
            if (this.innerArray.length > 1) {
                throw new InvalidOperationException("Sequence contains more than one matching element");
            }
            return this.innerArray[0] || null;
        }

        SingleOrDefault(predicate?: IFunc<TSource, boolean>): TSource {
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

        Any(predicate?: IFunc<TSource, boolean>): boolean {
            if (predicate) {
                return _.any(this.innerArray, predicate);
            }
            return this.Count() > 0;
        }

        Count(predicate?: IFunc<TSource, boolean>): number {
            if (predicate) {
                return _.where(this.innerArray, predicate).length;
            }
            return this.innerArray.length;
        }

        Select<TResult>(callback: IFunc<TSource, TResult>): IEnumerable<TResult> {
            return new Enumerable<TResult>(_.map(this.innerArray, callback));
        }

        Where(predicate?: IFunc<TSource, boolean>): IEnumerable<TSource> {
            return new Enumerable(_.where(this.innerArray, predicate));
        }

        ToArray(): TSource[] {
            return this.innerArray;
        }

        ToList(): IList<TSource> {
            return new List<TSource>(this.innerArray);
        }

        Dispose() {
           this.currentCollection = undefined;
        }

    }
}