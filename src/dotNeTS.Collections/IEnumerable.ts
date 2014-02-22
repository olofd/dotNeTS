module dotNeTS {
    export interface IEnumerable<TSource> {
        ForEach(callback: dotNeTS.IFunc<TSource, void>): void
        Contains(item: TSource): boolean;
        OrderBy<TKey>(keySelector: dotNeTS.IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        OrderByDecending<TKey>(callback: IFunc<TSource, TKey>): dotNeTS.OrderedEnumerable<TSource>;
        First(predicate?: IFunc<TSource, boolean>): TSource;
        FirstOrDefault(predicate?: IFunc<TSource, boolean>): TSource;
        Single(predicate?: IFunc<TSource, boolean>): TSource;
        SingleOrDefault(predicate?: IFunc<TSource, boolean>): TSource;
        Any(predicate?: IFunc<TSource, boolean>): boolean;
        Count(predicate?: IFunc<TSource, boolean>): number;
        Select<TResult>(callback: IFunc<TSource, TResult>): IEnumerable<TResult>;
        Where(predicate?: IFunc<TSource, boolean>): IEnumerable<TSource>;
        ToArray(): TSource[];
        ToList(): dotNeTS.List<TSource>;
    }
}