import { Quality } from "../Quality";

export class Uncouth implements Quality {
  name = "Uncouth";
  cost = -6;
  effect = "You cannot spend edge on charisma tests.";
}
