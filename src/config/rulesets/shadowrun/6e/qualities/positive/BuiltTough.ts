import { RankedQuality } from "../Quality";

export class BuiltTough extends RankedQuality {
    cost: number = 4;
    rank: number = 1;
    max = 4;
    effect: string = 'Additional physical condition boxes equal to rank.';
    
    constructor(name = "Built Tough", rank = 1) {
        super(name, rank);
    }
}