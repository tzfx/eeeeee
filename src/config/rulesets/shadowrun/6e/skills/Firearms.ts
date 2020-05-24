import { Skill } from "./Skill.interface";

export class Firearms implements Skill {
  rank = 1;
  specialized = "";
  name = "Firearms";
  specializations?: string[] = [
    "Automatics",
    "Longarms",
    "Pistols",
    "Rifles",
    "Shotguns",
  ];
  untrained = true;
  primaryAttribute = "agility";
  usableByCharacter() {
    return true;
  }
}
