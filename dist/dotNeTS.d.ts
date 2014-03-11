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
    class Enumerable<TSource> implements IEnumerable<TSource> {
        public currentCollection: TSource[];
        public getEvaluatedCollection(): TSource[];
        public innerArray : TSource[];
        constructor(innerArray?: TSource[]);
        public GroupBy<TResult>(callback: IFunc<TSource, TResult>): IEnumerable<IGrouping<TResult, TSource>>;
        public ElementAt(index: number): TSource;
        public ElementAtOrDefault(index: number): TSource;
        public ForEach(callback: IFunc<TSource, void>): void;
        public Contains(item: TSource): boolean;
        public OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        public OrderByDecending<TKey>(callback: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        public First(predicate?: IFunc<TSource, boolean>): TSource;
        public FirstOrDefault(predicate?: IFunc<TSource, boolean>): TSource;
        public Single(predicate?: IFunc<TSource, boolean>): TSource;
        public SingleOrDefault(predicate?: IFunc<TSource, boolean>): TSource;
        public Any(predicate?: IFunc<TSource, boolean>): boolean;
        public Count(predicate?: IFunc<TSource, boolean>): number;
        public Select<TResult>(callback: IFunc<TSource, TResult>): IEnumerable<TResult>;
        public Where(predicate?: IFunc<TSource, boolean>): IEnumerable<TSource>;
        public ToArray(): TSource[];
        public ToList(): List<TSource>;
        public Dispose(): void;
    }
}
declare module dotNeTS {
    class List<TSource> extends Enumerable<TSource> implements IList<TSource>, IEnumerable<TSource>, IDisposable {
        constructor(innerArray?: TSource[]);
        public Add(item: TSource): void;
        public AddRange(collection: IEnumerable<TSource>): void;
        public Remove(item: TSource): void;
        public ReplaceWith(replaceItem: TSource, whereSelector: IComparer<TSource, boolean>): void;
        public RemoveAt(index: number): void;
        public Clear(): void;
        public IndexOf(item: TSource): number;
        public Insert(index: number, ...item: TSource[]): void;
        public Dispose(): void;
    }
}
declare module dotNeTS {
    interface IEnumerable<TSource> extends IDisposable {
        ForEach(callback: IFunc<TSource, void>): void;
        Contains(item: TSource): boolean;
        OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        OrderByDecending<TKey>(callback: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        First(predicate?: IFunc<TSource, boolean>): TSource;
        FirstOrDefault(predicate?: IFunc<TSource, boolean>): TSource;
        Single(predicate?: IFunc<TSource, boolean>): TSource;
        SingleOrDefault(predicate?: IFunc<TSource, boolean>): TSource;
        Any(predicate?: IFunc<TSource, boolean>): boolean;
        Count(predicate?: IFunc<TSource, boolean>): number;
        Select<TResult>(callback: IFunc<TSource, TResult>): IEnumerable<TResult>;
        Where(predicate?: IFunc<TSource, boolean>): IEnumerable<TSource>;
        ToArray(): TSource[];
        ToList(): List<TSource>;
    }
}
declare module dotNeTS {
    interface IList<TSource> extends IEnumerable<TSource> {
        Add(item: TSource): void;
        AddRange(collection: IEnumerable<TSource>): void;
        Remove(item: TSource): void;
        RemoveAt(index: number): any;
        Clear(): void;
        Contains(item: TSource): boolean;
        IndexOf(item: TSource): number;
        Insert(index: number, item: TSource): void;
    }
}
declare module dotNeTS {
    class Grouping<TKey, TElement> extends List<TElement> implements IGrouping<TKey, TElement>, IEnumerable<TElement> {
        public Key: TKey;
        constructor(Key: TKey, innerArray: TElement[]);
    }
}
declare module dotNeTS {
    interface IGrouping<TKey, TElement> extends IEnumerable<TElement> {
        Key: TKey;
    }
}
declare module dotNeTS {
    interface IOrderedEnumerable<TSource> extends IEnumerable<TSource> {
        OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        OrderByDecending<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
        ThenBy<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
        ThenByDecending<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
    }
}
declare module dotNeTS {
    interface ISortExpression<TSource> {
        sortOrder: SortOrder;
        expression: IFunc<TSource, any>;
    }
}
declare module dotNeTS {
    class OrderedEnumerable<TSource> extends Enumerable<TSource> implements IOrderedEnumerable<TSource> {
        constructor(parent: Enumerable<TSource>);
        private sortExpressions;
        public getEvaluatedCollection(): TSource[];
        private AddLazyOrderInternal<TKey>(callback, sortOrder);
        public OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        public OrderByDecending<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
        public ThenBy<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
        public ThenByDecending<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
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
    class ArgumentOutOfRangeException extends Exception {
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
    class InvalidOperationException extends Exception {
        constructor(message: string);
    }
}
