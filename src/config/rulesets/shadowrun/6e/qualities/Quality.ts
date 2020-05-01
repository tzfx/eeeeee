export interface Quality {
    cost: number;
    effect: string;
}

export class RankedQuality implements Quality {
    cost: number = 0;
    effect: string = '';
    rank: number;
    stat?: {[stat: string]: number}
    constructor(rank: number = 1) {
        this.rank = rank;
        this.cost = this.cost * rank;
    }
}