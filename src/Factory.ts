module dotNeTS {
    export function createList<T>(startArray? : T[]) {
        return new dotNeTS.Collections.Generic.List<T>(startArray);
    }
} 