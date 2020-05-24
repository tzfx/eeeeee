import { Quality } from "../Quality";

export class Gearhead implements Quality {
  name = "Gearhead";
  cost = 10;
  effect =
    "+1 edge on repair tests. Spend edge for extended repair tests during downtime.";
}
