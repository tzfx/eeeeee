import { Quality } from "../Quality";

export class Sinner implements Quality {
  name = "Sinner";
  cost = -8;
  effect =
    "Lifestyle costs increased by 10% for this SIN. Opponents gain 1 edge when attempting Trace Icon against you.";
}
