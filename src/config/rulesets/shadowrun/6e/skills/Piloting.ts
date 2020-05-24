import { Skill } from "./Skill.interface";

export class Piloting implements Skill {
  rank = 1;
  specialized = "";
  name = "Piloting";
  specializations?: string[] = ["Ground Craft", "Aircraft", "Watercraft"];
  untrained = true;
  primaryAttribute = "reaction";
  usableByCharacter() {
    return true;
  }
}
