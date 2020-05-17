import { Skill } from "./Skill.interface";

export class ExoticWeapons implements Skill {
    rank = 1;
    specialized = "";
    name = 'Exotic Weapons';
    specializations?: string[] = [];
    untrained: boolean = false;
    primaryAttribute: string = 'agility';
    usableByCharacter() {
        return true;
    }
}