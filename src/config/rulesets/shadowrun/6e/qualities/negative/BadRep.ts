import { Quality } from "../Quality";

export class BadRep implements Quality {
  name = "Bad Rep";
  cost = -10;
  effect =
    "Cannot spend edge on social tests. Teamwork social tests result in 1 edge against you and noone can spend edge.";
}
