import { Quality } from "../Quality";

export class Insomnia implements Quality {
  name = "Insomnia";
  effect =
    "Body + Willpower (3) test on sleep. If fail, you cannot gain more than 2 edge per day, or spend more than 2 edge on any test.";
  cost = -4;
}
