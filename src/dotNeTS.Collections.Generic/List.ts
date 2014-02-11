module dotNeTS.Collections.Generic {

    export class List<T> extends dotNeTS.Collections.Generic.Enumerable<T> {

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

   