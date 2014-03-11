 module dotNeTS {
     export interface IGrouping<TKey, TElement> extends IEnumerable<TElement>{
         Key: TKey;
     }
 }