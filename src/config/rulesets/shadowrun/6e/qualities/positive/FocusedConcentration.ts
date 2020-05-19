import { RankedQuality } from "../Quality";

export class FocusedConcentration extends RankedQuality {
    name = "Focused Concentration";
    cost = 12;
    rank = 1;
    max = 3;
    effect = `You can sustain ${this.rank} additional spells/forms without penalty. (Max modded DV 7)`;
    
    constructor(name = "Focused Concentration") {
        super(name);
    }
}