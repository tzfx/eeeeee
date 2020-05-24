import { Quality } from "../Quality";
import { AttrName } from "../../Attributes";

export class Exceptional implements Quality {
  name: string;
  cost = 12;
  effect: string;

  constructor(attribute: AttrName) {
    this.name = `Exceptional (${attribute})`;
    this.effect = `${attribute} max rank increases by 1 (to a max of 10).`;
  }
}
