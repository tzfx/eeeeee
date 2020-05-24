import { Quality } from "../Quality";

export class LowPainTolerance implements Quality {
  name = "Low Pain Tolerance";
  effect = "All wound modifiers x2.";
  cost = -10;
}
