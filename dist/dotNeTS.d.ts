/// <reference path="../typings/lodash/lodash.d.ts" />
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
    function createList<T>(startArray?: T[]): Collections.Generic.List<T>;
}
declare module dotNeTS.Collections.Generic {
    class Enumerable<TSource> {
        public currentCollection: TSource[];
        public getCollection(): TSource[];
        public innerArray : TSource[];
        constructor(innerArray?: TSource[]);
        public ElementAt(index: number): TSource;
        public ElementAtOrDefault(index: number): TSource;
        public ForEach(callback: dotNeTS.IFunc<TSource, void>): void;
        public Contains(item: TSource): boolean;
        public OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): dotNeTS.Linq.OrderedEnumerable<TSource>;
        public OrderByDecending<TKey>(callback: dotNeTS.IFunc<TSource, TKey>): dotNeTS.Linq.OrderedEnumerable<TSource>;
        public First(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public FirstOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public Single(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public SingleOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public Any(predicate?: dotNeTS.IFunc<TSource, boolean>): boolean;
        public Count(predicate?: dotNeTS.IFunc<TSource, boolean>): number;
        public Select<TResult>(callback: dotNeTS.IFunc<TSource, TResult>): Enumerable<TResult>;
        public Where(predicate?: dotNeTS.IFunc<TSource, boolean>): Enumerable<TSource>;
        public ToArray(): TSource[];
        public ToList(): Generic.List<TSource>;
    }
}
declare module dotNeTS.Collections.Generic {
    class List<T> extends Generic.Enumerable<T> {
        constructor(innerArray?: T[]);
        public Add(item: T): void;
        public Remove(item: T): void;
    }
}
declare module dotNeTS.Collections {
    interface IList<T> {
        Add(item: T): void;
    }
}
declare module dotNeTS.Linq {
    interface ISortExpression<TSource> {
        sortOrder: Linq.SortOrder;
        expression: dotNeTS.IFunc<TSource, any>;
    }
}
declare module dotNeTS.Linq {
    class OrderedEnumerable<TSource> extends dotNeTS.Collections.Generic.Enumerable<TSource> {
        constructor(parent: dotNeTS.Collections.Generic.Enumerable<TSource>);
        public sortExpressions: Linq.ISortExpression<TSource>[];
        public getCollection(): TSource[];
        public AddLazyOrderInternal<TKey>(callback: dotNeTS.IFunc<TSource, TKey>, sortOrder: Linq.SortOrder): void;
        public OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): OrderedEnumerable<TSource>;
        public OrderByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        public ThenBy<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        public ThenByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        private EvaluateOrderBy();
    }
}
declare module dotNeTS.Linq {
    enum SortOrder {
        ASC = 0,
        DESC = 1,
    }
}
declare module dotNeTS {
    class ArgumentOutOfRangeException extends dotNeTS.Exception {
        constructor(message: string);
    }
}
declare module dotNeTS {
    interface IFunc<T, TResult> {
        (value: T, index: number, list: T[]): TResult;
    }
}
declare module dotNeTS {
    class InvalidOperationException extends dotNeTS.Exception {
        constructor(message: string);
    }
}
