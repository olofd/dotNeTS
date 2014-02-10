
module dotNeTS {

    export class InvalidOperationException extends dotNeTS.Exception {

        constructor(message: string) {
            super("InvalidOperationException", message);
        }

    }

}