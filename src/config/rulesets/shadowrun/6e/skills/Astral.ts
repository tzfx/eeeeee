import { Skill } from "./Skill.interface";

export class Astral implements Skill {
  rank = 1;
  specialized = "";
  name = "Astral";
  specializations?: string[] = [
    "Astral Combat",
    "Astral Signatures",
    "Emotional States",
    "Spirit Types",
  ];
  untrained = false;
  primaryAttribute = "intuition";
  secondaryAttribute?: string = "willpower";
  usableByCharacter() {
    return false;
  }
}
