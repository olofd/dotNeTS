module dotNeTS.Collections {
    export interface IEnumerable<T> {
        Select<TResult>(callback: _.ListIterator<T, TResult>): TResult[];
        Where(predicate?: _.ListIterator<T, boolean>): IEnumerable<T>;
        ToArray(): Array<T>;
        ToList(): dotNeTS.Collections.Generic.List<T>;
        Any(predicate?: _.ListIterator<T, boolean>): boolean;
        Count(): number;
    }
}
