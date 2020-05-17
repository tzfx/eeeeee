import { Skill } from "./Skill.interface";

export class Outdoors implements Skill {
    rank = 1;
    specialized = "";
    name = 'Outdoors'
    specializations?: string[] = ['Navigation', 'Survival', 'Tracking'];
    untrained: boolean = true;
    primaryAttribute: string = 'intuition';
    usableByCharacter() {
        return true;
    }
}