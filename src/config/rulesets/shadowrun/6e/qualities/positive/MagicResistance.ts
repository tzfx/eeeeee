import { Quality } from "../Quality";

export class MagicResistance implements Quality {
    name = "Magic Resistance";
    cost = 8;
    effect = "+1 edge on any magic resist test. Must be spent immediately. Your essence is effectively -2 when Heal is cast on you."
}