import { Metatype } from "./Metatype.interface";
import { ToxinResistance } from "../qualities/positive/ToxinResistance";
import { ThermographicVision } from "../qualities/positive/ThermographicVision";
import { Attributes } from "../Attributes";

export class Dwarf implements Metatype {
    name = 'Dwarf';
    averageHeight = 1.2;
    averageWeight = 54;
    ears = 'slightly pointy';
    knownFor = 'Short size; stocky build; perserverance';
    racials = [new ToxinResistance(), new ThermographicVision()];
    maxAttributes = {
        body: 7,
        agility: 6,
        reaction: 5,
        strength: 8,
        willpower: 7,
        logic: 6,
        intuition: 6,
        charisma: 6
    } as Attributes;
    maxEdge = 7;
}