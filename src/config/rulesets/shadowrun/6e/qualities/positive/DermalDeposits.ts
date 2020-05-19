import { Quality } from "../Quality";

export class DermalDeposits implements Quality {
    name = "Dermal Deposits";
    cost: number = 7;
    effect: string = '+1 natural armor. Unarmed DV [(STR/2 + 1]P';
}