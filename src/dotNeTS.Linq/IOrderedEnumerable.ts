module dotNeTS.Linq {
    export interface IOrderedEnumerable<TSource> {
        OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): OrderedEnumerable<TSource>;
        OrderByDecending<TSort>(callback: IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        ThenBy<TSort>(callback: IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
        ThenByDecending<TSort>(callback: IFunc<TSource, TSort>): OrderedEnumerable<TSource>;
    }
} 