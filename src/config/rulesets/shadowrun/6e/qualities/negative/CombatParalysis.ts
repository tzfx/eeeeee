import { Quality } from "../Quality";

export class CombatParalysis implements Quality {
  name = "Combat Paralysis";
  cost = -8;
  effect =
    "Initiative/2 at beginning of combat. You act last in the initial round, and cannot move or sprint for the duration of that round.";
}
