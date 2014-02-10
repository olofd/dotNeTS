/// <reference path="../../typings/lodash/lodash.d.ts" />
module dotNeTS.Collections.Generic {

    export class Enumerable<T> implements dotNeTS.Collections.IEnumerable<T> {
        public innerArray: Array<T>;

        constructor(innerArray?: Array<T>) {
            this.innerArray = innerArray || new Array<T>();

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
            return _.map(this.innerArray, callback);
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

}