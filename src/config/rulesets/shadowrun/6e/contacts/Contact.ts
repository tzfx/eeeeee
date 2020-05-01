import { v4 as UUID } from 'uuid';

export class Contact {
    uuid: string = UUID();
    connection: number = 1;
    loyalty: number = 1;
    description: string = "";
    constructor(
        connection: string,
        loyalty: number,
        description: string
    ) {
        if (!description) {
            throw new TypeError("No contact description provided.");
        }
    }
}