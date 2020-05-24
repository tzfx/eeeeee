export interface Quality {
  name: string;
  cost: number;
  effect: string;
}

export class RankedQuality implements Quality {
  name: string;
  cost = 0;
  effect = "";
  rank: number;
  max: number;
  stat?: { [stat: string]: number };
  constructor(name: string, rank = 1, max = 0) {
    this.name = name;
    this.rank = rank;
    this.cost = this.cost * rank;
    this.max = max;
  }
}
