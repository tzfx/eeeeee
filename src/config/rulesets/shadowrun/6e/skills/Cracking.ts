import { Skill } from "./Skill.interface";

export class Cracking implements Skill {
    rank = 1;
    specialized = "";
    name = 'Cracking';
    specializations?: string[] = ['Cybercombat', 'Electronic Warfare', 'Hacking'];
    untrained: boolean = false;
    primaryAttribute: string = 'logic';
    usableByCharacter() {
        return true;
    }
}