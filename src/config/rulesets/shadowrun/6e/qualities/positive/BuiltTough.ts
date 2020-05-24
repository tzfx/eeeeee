import { RankedQuality } from "../Quality";

export class BuiltTough extends RankedQuality {
  cost = 4;
  rank = 1;
  max = 4;
  effect = "Additional physical condition boxes equal to rank.";

  constructor(name = "Built Tough", rank = 1) {
    super(name, rank);
  }
}
