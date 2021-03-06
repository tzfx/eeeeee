import { Skill } from "./Skill.interface";

export class Engineering implements Skill {
  rank = 1;
  specialized = "";
  name = "Engineering";
  specializations?: string[] = [
    "Aeronautics Mechanic",
    "Armorer",
    "Automotive Mechanic",
    "Demolitions",
    "Gunnery",
    "Industrial Mechanic",
    "Lockpicking",
    "Nautical Mechanic",
  ];
  untrained = true;
  primaryAttribute = "logic";
  usableByCharacter() {
    return true;
  }
}
