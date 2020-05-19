import { Quality } from "../Quality";

export class SpiritAffinity implements Quality {
    name = "Spirit/Sprite Affinity";
    cost = 14;
    effect = "Natural healing time interval reduced by half."
    
    constructor(spirit: string) {
        this.name = `Spirit/Sprite Affinity (${spirit})`;
        this.effect = `+1 edge when making a conjuring or tasking test for spirits/sprites of type ${spirit}`;
    }
}