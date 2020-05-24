import { Metatype } from "./Metatype.interface";
import { LowLightVision } from "../qualities/positive/LowLightVision";
import { BuiltTough } from "../qualities/positive";
import { Attributes } from "../Attributes";

export class Ork implements Metatype {
  name = "Ork";
  averageHeight = 1.9;
  averageWeight = 128;
  ears = "pointy";
  knownFor =
    "Big, powerful physique; tusks; constantly being seen as outsiders";
  racials = [new LowLightVision(), new BuiltTough()];
  maxAttributes = {
    body: 8,
    agility: 6,
    reaction: 6,
    strength: 8,
    willpower: 6,
    logic: 6,
    intuition: 6,
    charisma: 5,
  } as Attributes;
  maxEdge = 6;
}
