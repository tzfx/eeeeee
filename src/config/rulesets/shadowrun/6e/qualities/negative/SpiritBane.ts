import { Quality } from "../Quality";

export class SpiritBane implements Quality {
  name = "Spirit Bane";
  cost = -12;
  effect = "Select a spirit/sprite.";

  constructor(spirit: string) {
    this.name = `Spirit/Sprite Bane (${spirit})`;
    this.effect = `Gain 1 edge when conjuring/tasking against ${spirit}. In combat, ${spirit} will attack you first and relentlessly.`;
  }
}
