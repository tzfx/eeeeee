import { Skill } from "./Skill.interface";

export class Perception implements Skill {
  rank = 1;
  specialized = "";
  name = "Perception";
  specializations?: string[] = ["Visual", "Aural", "Tactile"];
  untrained = true;
  primaryAttribute = "intuition";
  secondaryAttribute = "logic";
  usableByCharacter() {
    return true;
  }
}
