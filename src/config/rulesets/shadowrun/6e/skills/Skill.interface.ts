import { Character } from "../Character";

export interface Skill {
  name: string;
  specializations?: string[];
  untrained: boolean;
  primaryAttribute: string;
  secondaryAttribute?: string;

  rank: number;
  specialized: string;

  usableByCharacter(character: Character): boolean;
}
