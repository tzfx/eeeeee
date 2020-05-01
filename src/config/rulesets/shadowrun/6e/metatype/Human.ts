import { Metatype } from "./Metatype.interface";
import { Attributes } from "../Attributes";

export class Human implements Metatype {
    name = 'Human';
    averageHeight = 1.75;
    averageWeight = 78;
    ears = 'rounded';
    knownFor = 'Average size; average build; freaking out about people who don’t meet their averages';
    racials = [];
    maxAttributes = {
        body: 6,
        agility: 6,
        reaction: 6,
        strength: 6,
        willpower: 6,
        logic: 6,
        intuition: 6,
        charisma: 6
    } as Attributes;
    maxEdge = 7;
}