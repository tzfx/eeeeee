import { Skill } from "./Skill.interface";

export class Perception implements Skill {
    rank = 1;
    specialized = "";
    name = 'Perception';
    specializations?: string[] = ['Visual', 'Aural', 'Tactile'];
    untrained: boolean = true;
    primaryAttribute: string = 'intuition';
    secondaryAttribute = 'logic';
    usableByCharacter() {
        return true;
    }
}