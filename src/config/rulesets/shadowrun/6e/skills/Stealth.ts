import { Skill } from "./Skill.interface";

export class Stealth implements Skill {
    rank = 1;
    specialized = "";
    name = 'Stealth';
    specializations?: string[] = ['Camouflage', 'Disguise', 'Palming', 'Sneaking'];
    untrained: boolean = true;
    primaryAttribute: string = 'agility';
    usableByCharacter() {
        return true;
    }
}