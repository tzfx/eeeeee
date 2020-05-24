import { Skill } from "./Skill.interface";

export class Electronics implements Skill {
  rank = 1;
  specialized = "";
  name = "Electronics";
  specializations?: string[] = ["Computer", "Hardware", "Software"];
  untrained = true;
  primaryAttribute = "logic";
  secondaryAttribute = "intuition";
  usableByCharacter() {
    return true;
  }
}
