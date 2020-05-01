import { Quality } from "../qualities/Quality";
import { Metatype } from "./Metatype.interface";
import { LowLightVision } from "../qualities/positive/LowLightVision";
import { Attributes } from "../Attributes";

export class Elf implements Metatype {
    name = 'Elf';
    averageHeight: number = 1.9;
    averageWeight: number = 80;
    ears: string = 'pointy';
    knownFor: string = 'Slender, lithe build; being attrac- tive and knowing it';
    racials: Quality[] = [new LowLightVision()]
    maxAttributes = {
        body: 6,
        agility: 7,
        reaction: 6,
        strength: 6,
        willpower: 6,
        logic: 6,
        intuition: 6,
        charisma: 8
    } as Attributes;
    maxEdge = 6;
}