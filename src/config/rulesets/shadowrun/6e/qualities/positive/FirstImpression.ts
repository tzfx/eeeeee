import { Quality } from "../Quality";

export class FirstImpression implements Quality {
  name = "First Impression";
  cost = 12;
  effect =
    "+2 edge on any social test on first meeting. Heat/rep ignored for this test.";
}
