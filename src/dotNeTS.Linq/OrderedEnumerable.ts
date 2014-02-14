module dotNeTS.Linq{
    export class OrderedEnumerable<TSource> extends dotNeTS.Collections.Generic.Enumerable<TSource>{
        constructor(parent: dotNeTS.Collections.Generic.Enumerable<TSource>) {
            super(parent.currentCollection);

        }
        sortExpressions: Array<ISortExpression<TSource>>;
        public getCollection(): TSource[] {
            if (this.sortExpressions) {
                return this.EvaluateOrderBy();
            }
            return this.currentCollection;
        }
         AddLazyOrderInternal<TKey>(callback: IFunc<TSource, TKey>, sortOrder: SortOrder) {
            if (!this.sortExpressions) {
                this.sortExpressions = new Array<any>();
            }
            this.sortExpressions.push({
                expression: callback,
                sortOrder: sortOrder
            });
        }
        OrderBy<TKey>(keySelector: IFunc<TSource, TKey>): OrderedEnumerable<TSource> {
            this.sortExpressions = undefined;
           this.AddLazyOrderInternal(keySelector, SortOrder.ASC);
            return this;
        }
        OrderByDecending<TSort>(callback: IFunc<TSource, TSort>): OrderedEnumerable<TSource> {
            this.sortExpressions = undefined;
            this.AddLazyOrderInternal(callback, SortOrder.DESC);
            return this;
        }
        ThenBy<TSort>(callback: IFunc<TSource, TSort>): OrderedEnumerable<TSource> {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = _.clone(this.sortExpressions);
            newOrdered.AddLazyOrderInternal(callback, SortOrder.ASC);
            return newOrdered;
        }
        ThenByDecending<TSort>(callback: IFunc<TSource, TSort>): OrderedEnumerable<TSource> {
            var newOrdered = new OrderedEnumerable(this);
            newOrdered.sortExpressions = _.clone(this.sortExpressions);
            newOrdered.AddLazyOrderInternal(callback, SortOrder.DESC);
            return newOrdered;
        }
        private EvaluateOrderBy(): TSource[] {
            this.currentCollection.sort((e1, e2) => {
                var sortReturn = 0;
                _.forEach(this.sortExpressions, function (exp) {
                    var order = exp.sortOrder;
                    var e1Exp = exp.expression.call(this, e1);
                    var e2Exp = exp.expression.call(this, e2);
                    if (e1Exp > e2Exp) {
                        sortReturn = order === SortOrder.ASC ? 1 : -1;
                        return false;
                    }
                    if (e1Exp < e2Exp) {
                        sortReturn = order === SortOrder.ASC ? -1 : 1;
                        return false;
                    }
                });
                return sortReturn;
            })
            return this.currentCollection;
        }
    }
}