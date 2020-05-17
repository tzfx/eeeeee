import { Skill } from "./Skill.interface";

export class Sorcery implements Skill {
    rank = 1;
    specialized = "";
    name = 'Sorcery';
    specializations?: string[] = ['Counterspelling', 'Ritual Spellcasting', 'Spellcasting'];
    untrained: boolean = false;
    primaryAttribute: string = 'magic';
    usableByCharacter() {
        return true;
    }
}