import { Character } from "../Character";

export interface Skill {
    name: string;
    specializations?: string[],
    untrained: boolean;
    primaryAttribute: string;
    secondaryAttribute?: string;
    
    usableByCharacter(character: Character): boolean;
}