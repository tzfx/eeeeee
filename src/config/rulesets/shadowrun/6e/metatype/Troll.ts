import { Metatype } from "./Metatype.interface";
import {
  DermalDeposits,
  BuiltTough,
  ThermographicVision,
} from "../qualities/positive";
import { Attributes } from "../Attributes";

export class Troll implements Metatype {
  name = "Troll";
  averageHeight = 2.5;
  averageWeight = 300;
  ears = "slightly pointy";
  knownFor = "Being so big, you guys. Just huge. And horns.";
  racials = [
    new DermalDeposits(),
    new ThermographicVision(),
    new BuiltTough(undefined, 2),
  ];
  maxAttributes = {
    body: 9,
    agility: 5,
    reaction: 6,
    strength: 9,
    willpower: 6,
    logic: 6,
    intuition: 6,
    charisma: 5,
  } as Attributes;
  maxEdge = 6;
}
