module dotNeTS {
    export interface IFunc<T, TResult> {
        (value: T, index: number, list: T[]): TResult;
    }

}