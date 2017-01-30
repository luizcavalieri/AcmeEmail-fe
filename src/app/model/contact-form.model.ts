export class ContactFormModel {

    companyName: string;
    name: string;
    email: string;
    phone: string;
    yourMessage: string;
    maxMessageLength: number = 500;

    counterString() {
        return `${this.yourMessage ? this.maxMessageLength - this.yourMessage.length : 0}\\${this.maxMessageLength}`;
    }


    constructor() {
    }

}

