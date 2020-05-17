import { Skill } from "./Skill.interface";

export class Firearms implements Skill {
    rank = 1;
    specialized = "";
    name = 'Firearms';
    specializations?: string[] = ['Automatics', 'Longarms', 'Pistols', 'Rifles', 'Shotguns'];
    untrained: boolean = true;
    primaryAttribute: string = 'agility';
    usableByCharacter() {
        return true;
    }
}