import { Skill } from "./Skill.interface";

export class Con implements Skill {
  rank = 1;
  specialized = "";
  name = "Con";
  specializations?: string[] = [
    "Acting",
    "Disguise",
    "Impersonation",
    "Performance",
  ];
  untrained = true;
  primaryAttribute = "charisma";
  usableByCharacter() {
    return true;
  }
}
