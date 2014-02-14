module dotNeTS {
    export class InvalidOperationException extends Exception {
        constructor(message: string) {
            super("InvalidOperationException", message);
        }
    }

}