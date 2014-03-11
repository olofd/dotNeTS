 module dotNeTS{
     export class Grouping<TKey, TElement> extends List<TElement> implements IGrouping<TKey, TElement>, IEnumerable<TElement>{
        constructor(public Key: TKey, innerArray: TElement[]) {
            super(innerArray);
        }
    }    
}