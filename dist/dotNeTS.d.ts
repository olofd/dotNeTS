/// <reference path="../typings/lodash/lodash.d.ts" />
declare module dotNeTS {
    class Enumerable<T> implements dotNeTS.IEnumerable<T> {
        public currentCollection: T[];
        public getCollection(): T[];
        public innerArray : T[];
        constructor(innerArray?: T[]);
        public ForEach(callback: _.ListIterator<T, void>): void;
        public Contains(item: T): boolean;
        public OrderBy<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T>;
        public OrderByDecending<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T>;
        public First(predicate?: _.ListIterator<T, boolean>): T;
        public FirstOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        public Single(predicate?: _.ListIterator<T, boolean>): T;
        public SingleOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        public Any(predicate?: _.ListIterator<T, boolean>): boolean;
        public Count(predicate?: _.ListIterator<T, boolean>): number;
        public Select<TResult>(callback: _.ListIterator<T, TResult>): Enumerable<TResult>;
        public Where(predicate?: _.ListIterator<T, boolean>): Enumerable<T>;
        public ToArray(): T[];
        public ToList(): dotNeTS.List<T>;
    }
    class OrderedEnumerableSortValueAndEntity<T> {
        public entity: T;
        public sortValues: any[];
    }
    enum SortOrder {
        ASC = 0,
        DESC = 1,
    }
    class OrderedEnumerable<T> extends Enumerable<T> {
        constructor(parent: Enumerable<T>);
        public sortExpressions: any[];
        public getCollection(): T[];
        private AddLazyOrderInternal<TSort>(callback, sortOrder);
        public OrderBy<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T>;
        public OrderByDecending<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T>;
        public ThenBy<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T>;
        public ThenByDecending<TSort>(callback: _.ListIterator<T, TSort>): OrderedEnumerable<T>;
        private EvaluateOrderBy();
    }
}
declare module dotNeTS {
    function createList<T>(startArray?: T[]): List<T>;
}
declare module dotNeTS {
    class List<T> extends dotNeTS.Enumerable<T> {
        constructor(innerArray?: T[]);
        public Add(item: T): void;
        public Remove(item: T): void;
    }
}
declare module dotNeTS {
    interface IEnumerable<T> {
        First(predicate?: _.ListIterator<T, boolean>): T;
        FirstOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        Single(predicate?: _.ListIterator<T, boolean>): T;
        SingleOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        Select<TResult>(callback: _.ListIterator<T, TResult>): IEnumerable<TResult>;
        OrderBy<T>(whereValue: any): void;
        Where(predicate?: _.ListIterator<T, boolean>): IEnumerable<T>;
        ToArray(): T[];
        ToList(): dotNeTS.List<T>;
        Any(predicate?: _.ListIterator<T, boolean>): boolean;
        Count(): number;
    }
}
declare module dotNeTS {
    interface IList<T> {
        Add(item: T): void;
    }
}
declare module dotNeTS {
    class Exception {
        public name: string;
        public level: string;
        public message: string;
        public htmlMessage: string;
        constructor(name: string, message: string);
        public toString(): string;
    }
}
declare module dotNeTS {
    class InvalidOperationException extends dotNeTS.Exception {
        constructor(message: string);
    }
}
