module dotNeTS {
    export function createList<T>(startArray? : T[]) {
        return new dotNeTS.List<T>(startArray);
    }
} 