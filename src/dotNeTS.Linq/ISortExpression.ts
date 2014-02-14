module dotNeTS.Linq{
export interface ISortExpression<TSource> {
    sortOrder: SortOrder
    expression: IFunc<TSource, any>
}

} 