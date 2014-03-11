module dotNeTS {
    export class List<TSource> extends Enumerable<TSource> implements IList<TSource>, IEnumerable<TSource>, IDisposable {
        constructor(innerArray?: Array<TSource>) {
            super(innerArray);
        }
        Add(item: TSource): void {
            this.innerArray.push(item);
        }
        AddRange(collection: IEnumerable<TSource>): void {
            collection.ForEach(b => this.Add(b));
        }
        Remove(item: TSource): void {
            this.innerArray = _.without(this.innerArray, item);
        }
        ReplaceWith(replaceItem: TSource, whereSelector: dotNeTS.IComparer<TSource, boolean>) {
            var valuesToUpdate = _.where(this.innerArray,
                (value: TSource, index: number, list: TSource[]) => {
                    return whereSelector(replaceItem, value, index, list);
                });
            _.forEach(valuesToUpdate, (value) => {
                var index = this.IndexOf(value)
                if (index !== -1) {
                    this.innerArray[index] = replaceItem;
                }
            });
        }
        RemoveAt(index: number) {

        }
        Clear(): void {

        }

        IndexOf(item: TSource): number {
            return this.innerArray.indexOf(item);
        }
        Insert(index: number, ...item: TSource[]): void {
            var args = [index, 0];
            Array.prototype.push.apply(args, Array.prototype.slice.call(arguments, 1));
            Array.prototype.splice.apply(this.innerArray, args);

        }

        Dispose() {
            super.Dispose();
        }

    }
}
