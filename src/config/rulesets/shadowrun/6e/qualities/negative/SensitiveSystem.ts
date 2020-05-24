import { Quality } from "../Quality";

export class SensitiveSystem implements Quality {
  name = "Sensitive System";
  cost = -8;
  effect =
    "Essence costs doubled for all cyber/bio/nano ware. Cannot have this if you have magic or resonance.";
}
