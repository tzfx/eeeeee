import { Skill } from "./Skill.interface";

export class Perception implements Skill {
    name = 'Perception';
    specializations?: string[] = ['Visual', 'Aural', 'Tactile'];
    untrained: boolean = true;
    primaryAttribute: string = 'intuition';
    secondaryAttribute = 'logic';
    usableByCharacter() {
        return true;
    }
}