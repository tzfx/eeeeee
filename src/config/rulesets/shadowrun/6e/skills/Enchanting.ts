import { Skill } from "./Skill.interface";

export class Enchanting implements Skill {
    name = 'Enchanting';
    specializations?: string[] = ['Alchemy', 'Artificing', 'Disenchanting'];
    untrained: boolean = false;
    primaryAttribute: string = 'magic';
    usableByCharacter() {
        return true;
    }
}