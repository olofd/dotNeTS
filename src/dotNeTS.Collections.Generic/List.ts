module dotNeTS.Collections.Generic {
    export class List<TSource> extends Enumerable<TSource> implements IList<TSource>, IDisposable {
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
        RemoveAt(index: number) {

        }
        Clear(): void {

        }

        IndexOf(item: TSource): number {
            return 1;
        }
        Insert(index: number, item: TSource) : void {

        }
        Dispose() {
            super.Dispose();
        }

    }
}
