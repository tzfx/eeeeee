import { Quality } from "../Quality";

export class LossOfConfidence implements Quality {
  name = "Loss of Confidence";
  effect =
    "At the start of an encounter, roll Willpower (2). If fail, you cannot gain or spend edge.";
  cost = -6;
}
