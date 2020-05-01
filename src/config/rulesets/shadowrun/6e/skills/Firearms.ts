import { Skill } from "./Skill.interface";

export class Conjuring implements Skill {
    name = 'Conjuring';
    specializations?: string[] = ['Automatics', 'Longarms', 'Pistols', 'Rifles', 'Shotguns'];
    untrained: boolean = true;
    primaryAttribute: string = 'agility';
    usableByCharacter() {
        return true;
    }
}