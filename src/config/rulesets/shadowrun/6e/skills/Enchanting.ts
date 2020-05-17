import { Skill } from "./Skill.interface";

export class Enchanting implements Skill {
    rank = 1;
    specialized = "";
    name = 'Enchanting';
    specializations?: string[] = ['Alchemy', 'Artificing', 'Disenchanting'];
    untrained: boolean = false;
    primaryAttribute: string = 'magic';
    usableByCharacter() {
        return true;
    }
}