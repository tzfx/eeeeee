import { Skill } from "./Skill.interface";

export class ExoticWeapons implements Skill {
    name = 'Exotic Weapons';
    specializations?: string[] = [];
    untrained: boolean = false;
    primaryAttribute: string = 'agility';
    usableByCharacter() {
        return true;
    }
}