import { Skill } from "./Skill.interface";

export class Outdoors implements Skill {
    rank = 1;
    specialized = "";
    name = 'Outdoors'
    specializations?: string[] = ['Navigation', 'Survival', 'Tracking'];
    untrained = true;
    primaryAttribute = 'intuition';
    usableByCharacter() {
        return true;
    }
}