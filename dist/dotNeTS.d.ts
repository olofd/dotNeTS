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
    function createList<T>(startArray?: T[]): List<T>;
}
declare module dotNeTS {
    class Enumerable<TSource> implements dotNeTS.IEnumerable<TSource>, dotNeTS.IDisposable {
        public currentCollection: TSource[];
        public getEvaluatedCollection(): TSource[];
        public innerArray : TSource[];
        constructor(innerArray?: TSource[]);
        public ElementAt(index: number): TSource;
        public ElementAtOrDefault(index: number): TSource;
        public ForEach(callback: dotNeTS.IFunc<TSource, void>): void;
        public Contains(item: TSource): boolean;
        public OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        public OrderByDecending<TKey>(callback: dotNeTS.IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        public First(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public FirstOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public Single(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public SingleOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        public Any(predicate?: dotNeTS.IFunc<TSource, boolean>): boolean;
        public Count(predicate?: dotNeTS.IFunc<TSource, boolean>): number;
        public Select<TResult>(callback: dotNeTS.IFunc<TSource, TResult>): dotNeTS.IEnumerable<TResult>;
        public Where(predicate?: dotNeTS.IFunc<TSource, boolean>): dotNeTS.IEnumerable<TSource>;
        public ToArray(): TSource[];
        public ToList(): dotNeTS.List<TSource>;
        public Dispose(): void;
    }
}
declare module dotNeTS {
    class List<TSource> extends dotNeTS.Enumerable<TSource> implements dotNeTS.IList<TSource>, dotNeTS.IDisposable {
        constructor(innerArray?: TSource[]);
        public Add(item: TSource): void;
        public AddRange(collection: dotNeTS.IEnumerable<TSource>): void;
        public Remove(item: TSource): void;
        public ReplaceWith(replaceItem: TSource, whereSelector: dotNeTS.IComparer<TSource, boolean>): void;
        public RemoveAt(index: number): void;
        public Clear(): void;
        public IndexOf(item: TSource): number;
        public Insert(index: number, item: TSource): void;
        public Dispose(): void;
    }
}
declare module dotNeTS {
    interface IEnumerable<TSource> {
        ForEach(callback: dotNeTS.IFunc<TSource, void>): void;
        Contains(item: TSource): boolean;
        OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        OrderByDecending<TKey>(callback: dotNeTS.IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        First(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        FirstOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        Single(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        SingleOrDefault(predicate?: dotNeTS.IFunc<TSource, boolean>): TSource;
        Any(predicate?: dotNeTS.IFunc<TSource, boolean>): boolean;
        Count(predicate?: dotNeTS.IFunc<TSource, boolean>): number;
        Select<TResult>(callback: dotNeTS.IFunc<TSource, TResult>): IEnumerable<TResult>;
        Where(predicate?: dotNeTS.IFunc<TSource, boolean>): IEnumerable<TSource>;
        ToArray(): TSource[];
        ToList(): dotNeTS.List<TSource>;
    }
}
declare module dotNeTS {
    interface IList<TSource> {
        Add(item: TSource): void;
        AddRange(collection: dotNeTS.IEnumerable<TSource>): void;
        Remove(item: TSource): void;
        RemoveAt(index: number): any;
        Clear(): void;
        Contains(item: TSource): boolean;
        IndexOf(item: TSource): number;
        Insert(index: number, item: TSource): void;
    }
}
declare module dotNeTS {
    interface IOrderedEnumerable<TSource> {
        OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        OrderByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): dotNeTS.OrderedEnumerable<TSource>;
        ThenBy<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): dotNeTS.OrderedEnumerable<TSource>;
        ThenByDecending<TSort>(callback: dotNeTS.IFunc<TSource, TSort>): dotNeTS.OrderedEnumerable<TSource>;
    }
}
declare module dotNeTS {
    interface ISortExpression<TSource> {
        sortOrder: dotNeTS.SortOrder;
        expression: dotNeTS.IFunc<TSource, any>;
    }
}
declare module dotNeTS {
    class OrderedEnumerable<TSource> extends dotNeTS.Enumerable<TSource> implements dotNeTS.IOrderedEnumerable<TSource> {
        constructor(parent: dotNeTS.Enumerable<TSource>);
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
declare module dotNeTS {
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
    interface IComparer<T, TResult> {
        (newValue: T, oldvalue: T, index: number, list: T[]): TResult;
    }
}
declare module dotNeTS {
    class InvalidOperationException extends dotNeTS.Exception {
        constructor(message: string);
    }
}
