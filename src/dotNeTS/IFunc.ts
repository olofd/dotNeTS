module dotNeTS {
    export interface IFunc<T, TResult> {
        (value: T, index: number, list: T[]): TResult;
    }
    export interface IComparer<T,TResult> {
        (newValue: T,oldvalue : T, index: number, list: T[]): TResult;
    }
}