module dotNeTS {
    export class ArgumentOutOfRangeException extends Exception {
        constructor(message: string) {
            super("ArgumentOutOfRangeException", message);
        }

    }

}