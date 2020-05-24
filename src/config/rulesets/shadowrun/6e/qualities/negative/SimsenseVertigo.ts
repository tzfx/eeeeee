import { Quality } from "../Quality";

export class SimsenseVertigo implements Quality {
  name = "Simsense Vertigo";
  cost = -6;
  effect =
    "You cannot get or spend edge while accessing the Matrix in VR. Gain Nauseated for 1 hour after logging out.";
}
