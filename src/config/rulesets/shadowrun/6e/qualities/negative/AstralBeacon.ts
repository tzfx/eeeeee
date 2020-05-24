import { Quality } from "../Quality";

export class AstralBeacon implements Quality {
  name = "Astral Beacon";
  cost = -10;
  effect =
    "You are effectively untrained for astral stealth tests. Unable to take masking metamagic. \
    Assensing tests against you gain 1 edge, thresholds reduced by 1. \
    Astral tracking tests against you gain 2 edge, thresholds reduced by half.";
}
