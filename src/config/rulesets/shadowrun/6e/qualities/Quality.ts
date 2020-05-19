export interface Quality {
    name: string;
    cost: number;
    effect: string;
}

export class RankedQuality implements Quality {
    name: string;
    cost: number = 0;
    effect: string = '';
    rank: number;
    max: number;
    stat?: {[stat: string]: number}
    constructor(name: string, rank: number = 1, max: number = 0) {
        this.name = name;
        this.rank = rank;
        this.cost = this.cost * rank;
        this.max = max;
    }
}