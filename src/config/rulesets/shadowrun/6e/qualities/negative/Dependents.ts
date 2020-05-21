import { RankedQuality } from "../Quality";


export class Dependents extends RankedQuality {
    private depTake = [
        5,
        10,
        25
    ]
    cost = -4;
    max = 3
    constructor(name = "Dependents", rank = 1) {
        super(name, rank);
        this.effect = `Payouts are decreased by ${this.depTake[rank - 1]}%.`
    }
}