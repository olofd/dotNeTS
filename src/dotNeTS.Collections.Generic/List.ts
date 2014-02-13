module dotNeTS {

    export class List<T> extends Enumerable<T> {

        constructor(innerArray?: Array<T>) {
            super(innerArray);
        }

        Add(item: T) {
            this.innerArray.push(item);
        }
        Remove(item: T) {
 
            this.innerArray = _.without(this.innerArray, item);
        }

         
    }
     
}
 
       