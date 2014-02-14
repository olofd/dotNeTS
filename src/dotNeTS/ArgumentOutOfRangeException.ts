module dotNeTS {
    export class ArgumentOutOfRangeException extends Exception {
        constructor(message: string) {
            super("Index was out of range. Must be non-negative and less than the size of the collection.", message);
        }

    }

}