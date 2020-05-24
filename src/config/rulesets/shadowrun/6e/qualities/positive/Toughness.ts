import { Quality } from "../Quality";

export class Toughness implements Quality {
  name = "Toughness";
  cost = 12;
  effect = "+1 edge when resisting damage. Must be used immediately.";
}
