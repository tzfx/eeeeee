import { RankedQuality } from "../Quality";

export class WillToLive extends RankedQuality {
  name = "Will to Live";
  cost = 8;
  effect = "";

  constructor(name = "Will to Live") {
    super(name);
    this.effect = `Grants ${2 * this.rank} additional damage overflow boxes.`;
  }
}
