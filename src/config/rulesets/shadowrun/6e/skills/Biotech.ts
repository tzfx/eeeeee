import { Skill } from "./Skill.interface";

export class Biotech implements Skill {
    name = 'Biotech';
    specializations?: string[] = ['Biotechnology', 'Cybertechnology', 'First Aid', 'Medicine'];
    untrained: boolean = false;
    primaryAttribute: string = 'logic';
    secondaryAttribute?: string = 'intuition';
    usableByCharacter() {
        return true;
    }
}