import { Quality } from "../Quality";

export class WeakImmuneSystem implements Quality {
  name = "Weak Immune System";
  cost = -8;
  effect =
    "You cannot spend edge to resist infection. Infection threshold lowered by 1. While infected, your dice pool is reduced by 1.";
}
