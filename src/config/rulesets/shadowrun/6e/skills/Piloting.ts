import { Skill } from "./Skill.interface";

export class Piloting implements Skill {
    name = 'Piloting';
    specializations?: string[] = ['Ground Craft', 'Aircraft', 'Watercraft'];
    untrained: boolean = true;
    primaryAttribute: string = 'reaction';
    usableByCharacter() {
        return true;
    }
}