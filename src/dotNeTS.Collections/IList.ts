module dotNeTS {
    export interface IList<TSource> extends IEnumerable<TSource>{
        Add(item: TSource): void;
        AddRange(collection: IEnumerable<TSource>): void;
        Remove(item: TSource): void;
        RemoveAt(index: number);
        Clear():void;
        Contains(item : TSource) : boolean;
        IndexOf(item: TSource) : number;
        Insert(index: number, item: TSource) : void;
    }
}