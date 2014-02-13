module dotNeTS {
    export interface IEnumerable<T> {
        First(predicate?: _.ListIterator<T, boolean>): T;
        FirstOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        Single(predicate?: _.ListIterator<T, boolean>): T;
        SingleOrDefault(predicate?: _.ListIterator<T, boolean>): T;
        Select<TResult>(callback: _.ListIterator<T, TResult>): IEnumerable<TResult>;
        OrderBy<T>(whereValue) : void;
        Where(predicate?: _.ListIterator<T, boolean>): IEnumerable<T>;
        ToArray(): Array<T>;
        ToList(): dotNeTS.List<T>;
        Any(predicate?: _.ListIterator<T, boolean>): boolean;
        Count(): number;
    }
}
