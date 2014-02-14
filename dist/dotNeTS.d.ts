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
    class Enumerable<TSource> implements Collections.IEnumerable<TSource>, dotNeTS.IDisposable {
        public currentCollection: TSource[];
        public getEvaluatedCollection(): TSource[];
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
        public Select<TResult>(callback: dotNeTS.IFunc<TSource, TResult>): Collections.IEnumerable<TResult>;
        public Where(predicate?: dotNeTS.IFunc<TSource, boolean>): Collections.IEnumerable<TSource>;
        public ToArray(): TSource[];
        public ToList(): Generic.List<TSource>;
        public Dispose(): void;
    }
}
declare module dotNeTS.Collections.Generic {
    class List<TSource> extends Generic.Enumerable<TSource> implements Collections.IList<TSource>, dotNeTS.IDisposable {
        constructor(innerArray?: TSource[]);
        public Add(item: TSource): void;
        public AddRange(collection: Collections.IEnumerable<TSource>): void;
        public Remove(item: TSource): void;
        public RemoveAt(index: number): void;
        public Clear(): void;
        public IndexOf(item: TSource): number;
        public Insert(index: number, item: TSource): void;
        public Dispose(): void;
    }
}
declare module dotNeTS.Collections {
    interface IEnumerable<TSource> {
        ForEach(callback: dotNeTS.IFunc<TSource, void>): void;
        Contains(item: TSource): boolean;
        OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): dotNeTS.Linq.OrderedEnumerable<TSource>;
        OrderByDecending<TKey>(callback: dotNeTS.IFunc<TSource, TKey>): dotNeTS.Linq.OrderedEnumerable<TSource>;
        First(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        FirstOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        Single(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        SingleOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        Any(predicate?: dotNeTS.IFunc<TSource, boolean>): boolean;
        Count(predicate?: dotNeTS.IFunc<TSource, boolean>): number;
        Select<TResult>(callback: dotNeTS.IFunc<TSource, TResult>): IEnumerable<TResult>;
        Where(predicate?: dotNeTS.IFunc<TSource, boolean>): IEnumerable<TSource>;
        ToArray(): TSource[];
        ToList(): Collections.Generic.List<TSource>;
    }
}
declare module dotNeTS.Collections {
    interface IList<TSource> {
        Add(item: TSource): void;
        AddRange(collection: Collections.IEnumerable<TSource>): void;
        Remove(item: TSource): void;
        RemoveAt(index: number): any;
        Clear(): void;
        Contains(item: TSource): boolean;
        IndexOf(item: TSource): number;
        Insert(index: number, item: TSource): void;
    }
}
declare module dotNeTS.Linq {
    interface IOrderedEnumerable<TSource> {
        OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): Linq.OrderedEnumerable<TSource>;
        OrderByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): Linq.OrderedEnumerable<TSource>;
        ThenBy<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): Linq.OrderedEnumerable<TSource>;
        ThenByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): Linq.OrderedEnumerable<TSource>;
    }
}
declare module dotNeTS.Linq {
    interface ISortExpression<TSource> {
        sortOrder: Linq.SortOrder;
        expression: dotNeTS.IFunc<TSource, any>;
    }
}
declare module dotNeTS.Linq {
    class OrderedEnumerable<TSource> extends dotNeTS.Collections.Generic.Enumerable<TSource> implements Linq.IOrderedEnumerable<TSource> {
        constructor(parent: dotNeTS.Collections.Generic.Enumerable<TSource>);
        private sortExpressions;
        public getEvaluatedCollection(): TSource[];
        private AddLazyOrderInternal<TKey>(callback, sortOrder);
        public OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): OrderedEnumerable<TSource>;
        public OrderByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        public ThenBy<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        public ThenByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        private EvaluateOrderBy();
        public Dispose(): void;
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
    interface IDisposable {
        Dispose(): void;
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
