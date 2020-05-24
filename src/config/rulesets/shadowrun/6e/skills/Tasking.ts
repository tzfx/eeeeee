import { Skill } from "./Skill.interface";

export class Tasking implements Skill {
  rank = 1;
  specialized = "";
  name = "Tasking";
  specializations?: string[] = ["Compiling", "Decompiling", "Registering"];
  untrained = false;
  primaryAttribute = "magic";
  usableByCharacter() {
    return false;
  }
}
