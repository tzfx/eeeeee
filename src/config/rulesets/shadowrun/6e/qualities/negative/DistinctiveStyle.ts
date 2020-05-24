import { Quality } from "../Quality";

export class DistinctiveStyle implements Quality {
  name = "Distinctive Style";
  cost = -6;
  effect =
    "Cannot gain or spend edge while not in style. Opponents get +2 dice on memory tests to recall you.";
}
