module dotNeTS {
    export function createList<T>(startArray? : T[]) {
        return new List<T>(startArray);
    }
} 