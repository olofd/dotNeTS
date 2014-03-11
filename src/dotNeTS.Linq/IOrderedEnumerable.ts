module dotNeTS {
    export interface IOrderedEnumerable<TSource> extends IEnumerable<TSource> {
        OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): IOrderedEnumerable<TSource>;
        OrderByDecending<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
        ThenBy<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
        ThenByDecending<TSort>(callback: IFunc<TSource, TSort>): IOrderedEnumerable<TSource>;
    }
} 