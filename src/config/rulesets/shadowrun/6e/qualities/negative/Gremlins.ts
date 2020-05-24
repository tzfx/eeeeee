import { Quality } from "../Quality";

export class Gremlins implements Quality {
  name = "Gremlins";
  cost = -6;
  effect =
    "Roll 2D6 before using any device. On 1, glitch. On 1-1, critical glitch. Device resets take a minor action.";
}
