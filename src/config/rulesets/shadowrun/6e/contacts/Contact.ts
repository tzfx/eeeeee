import { v4 as UUID } from "uuid";

export class Contact {
  uuid: string = UUID();
  connection = 1;
  loyalty = 1;
  description = "";
  constructor(connection: string, loyalty: number, description: string) {
    if (!description) {
      throw new TypeError("No contact description provided.");
    }
  }
}
