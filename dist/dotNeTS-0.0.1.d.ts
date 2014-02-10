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
    class InvalidOperationException extends dotNeTS.Exception {
        constructor(message: string);
    }
}
declare module dotNeTS.Collections {
    interface IEnumerable<T> {
        Select<TResult>(callback: _.ListIterator<T, TResult>): TResult[];
        Where(predicate?: _.ListIterator<T, boolean>): IEnumerable<T>;
        ToArray(): T[];
        ToList(): Collections.Generic.List<T>;
        Any(predicate?: _.ListIterator<T, boolean>): boolean;
        Count(): number;
    }
}
declare module dotNeTS.Collections {
    interface IList<T> {
        Add(item: T): void;
    }
}
declare module dotNeTS.Collections.Generic {
    class Enumerable<T> implements Collections.IEnumerable<T> {
        public innerArray: T[];
        constructor(innerArray?: T[]);
        public First(predicate?: _.ListIterator<T, boolean>): T;
        public FirstOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        public Single(predicate?: _.ListIterator<T, boolean>): T;
        public SingleOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        public Any(predicate?: _.ListIterator<T, boolean>): boolean;
        public Count(predicate?: _.ListIterator<T, boolean>): number;
        public Select<TResult>(callback: _.ListIterator<T, TResult>): TResult[];
        public Where(predicate?: _.ListIterator<T, boolean>): Enumerable<T>;
        public ToArray(): T[];
        public ToList(): Generic.List<T>;
    }
}
declare module dotNeTS.Collections.Generic {
    class List<T> extends Generic.Enumerable<T> {
        constructor(innerArray?: T[]);
        public Add(item: T): void;
        public Remove(item: T): void;
    }
}
