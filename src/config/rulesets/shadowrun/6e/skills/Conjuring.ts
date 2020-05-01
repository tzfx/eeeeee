import { Skill } from "./Skill.interface";

export class Conjuring implements Skill {
    name = 'Conjuring';
    specializations?: string[] = ['Banishing', 'Summoning'];
    untrained: boolean = false;
    primaryAttribute: string = 'magic';
    usableByCharacter() {
        return true;
    }
}