import { Quality } from "../Quality";

export class HighPainTolerance implements Quality {
  name = "High Pain Tolerance";
  cost = 7;
  effect = "Wound penalty -1 when wounded.";
}
