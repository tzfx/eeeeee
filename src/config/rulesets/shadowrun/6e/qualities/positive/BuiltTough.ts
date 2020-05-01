import { RankedQuality } from "../Quality";

export class BuiltTough extends RankedQuality {
    cost: number = 4;
    rank: number = 1;
    effect: string = 'Additional physical condition boxes equal to rank.';
    constructor(rank: number) {
        super(rank);
    }
}