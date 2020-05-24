import { Quality } from "../Quality";

export class UnsteadyHands implements Quality {
  name = "Unsteady Hands";
  cost = -4;
  effect = "You cannot spend edge on agility tests that use your hands.";
}
