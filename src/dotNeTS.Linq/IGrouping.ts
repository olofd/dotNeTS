module dotNeTS{
    export class Grouping<TKey, TElement> extends List<TElement>{
        constructor(public Key: TKey, innerArray: TElement[]) {
            super(innerArray);
        }
    }    
}