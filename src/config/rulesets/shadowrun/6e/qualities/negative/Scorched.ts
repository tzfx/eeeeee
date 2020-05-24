import { Quality } from "../Quality";

export class Scorched implements Quality {
  name = "Scorched";
  cost = -6;
  effect = "You cannot spend edge while accessing the Matrix.";
}
