import { Quality } from "../Quality";

export class Honorbound implements Quality {
  name = "Honorbound";
  cost = -10;
  effect =
    "You cannot spend edge for 24h after breaking a tenant. The time doubles every infraction during cooldown.";
  constructor(code: string) {
    this.name = `Honorbound (${code})`;
  }
}
