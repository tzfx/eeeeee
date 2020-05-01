import { Skill } from "./Skill.interface";

export class Outdoors implements Skill {
    name = 'Outdoors'
    specializations?: string[] = ['Navigation', 'Survival', 'Tracking'];
    untrained: boolean = true;
    primaryAttribute: string = 'intuition';
    usableByCharacter() {
        return true;
    }
}