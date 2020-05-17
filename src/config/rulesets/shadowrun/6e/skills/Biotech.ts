import { Skill } from "./Skill.interface";

export class Biotech implements Skill {
    rank = 1;
    specialized = "";
    name = 'Biotech';
    specializations?: string[] = ['Biotechnology', 'Cybertechnology', 'First Aid', 'Medicine'];
    untrained: boolean = false;
    primaryAttribute: string = 'logic';
    secondaryAttribute?: string = 'intuition';
    usableByCharacter() {
        return true;
    }
}