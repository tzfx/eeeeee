import { Quality } from "../Quality";

export class ToxinResistance implements Quality {
    name = "Toxin Resistance";
    cost = 12;
    effect = '+1 edge during toxin resist tests. Must be spent immediately';
}