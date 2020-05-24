import { RankedQuality, Quality } from "../Quality";

export class GlassJaw implements Quality {
  cost = -4;
  name = "Glass Jaw";
  effect = "Each rank decreases stun boxes, down to a minimum of 2.";
}
