import { Quality } from "../Quality";

export class Uneducated implements Quality {
  name = "Uneducated";
  cost = -6;
  effect = "You cannot spend edge on logic tests.";
}
