import { RankedQuality } from "../Quality";

export class Addiction extends RankedQuality {
    levels = [
        "1 week",
        "3 days",
        "1 day",
        "12 hours",
        "6 hours",
        "1 hour"
    ];
    name = "Addiction";
    cost = -2;
    effect = "";
    max = 6;
    constructor(name = "Addiction", rank = 1, drug: string) {
        super(`${name} (${drug})`, rank);
        this.effect = `-2 dice pool while in withdrawl. Penalty increases by 1 every ${this.levels[rank - 1]}.`;
    }
}