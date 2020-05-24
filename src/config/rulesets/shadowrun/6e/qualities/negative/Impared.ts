import { RankedQuality } from "../Quality";
import { AttrName } from "../../Attributes";

export class Impared extends RankedQuality {
  max = 10;
  cost = -8;

  constructor(rank = 1, attribute: AttrName) {
    super(`Impared (${attribute})`, rank);
    this.effect = `${attribute} max is reduced by ${rank}, down to a minimum of 2.`;
  }
}
