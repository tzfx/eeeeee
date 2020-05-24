import { Skill } from "./Skill.interface";

export class Cracking implements Skill {
  rank = 1;
  specialized = "";
  name = "Cracking";
  specializations?: string[] = ["Cybercombat", "Electronic Warfare", "Hacking"];
  untrained = false;
  primaryAttribute = "logic";
  usableByCharacter() {
    return true;
  }
}
