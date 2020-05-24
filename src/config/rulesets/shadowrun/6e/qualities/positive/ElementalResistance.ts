import { Quality } from "../Quality";

export class ElementalResistance implements Quality {
  name = "Elemental Resistance";
  cost = 12;
  effect = "+1 edge on any grappling/escape/flexibility/fit test.";

  constructor(element: string) {
    this.name = `Elemental Resistance (${element})`;
    this.effect = `+1 edge prior to any defense test when attacked with ${element} type damage.`;
  }
}
