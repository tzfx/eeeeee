import { Quality } from "../Quality";

export class BadLuck implements Quality {
  name = "Bad Luck";
  cost = -10;
  effect = "Dice rolls of 1 AND 2 now count towards (Non-Critical) glitches.";
}
