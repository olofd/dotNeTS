module dotNeTS {
    export class Exception {
        name: string;
        level: string;
        message: string;
        htmlMessage: string;

        constructor(name: string, message: string) {
            this.message = message;
            this.name = name;
        }

        toString() {
            return this.name + " was unhandled by user code. Additional information: " + this.message;
        }

    }
}
