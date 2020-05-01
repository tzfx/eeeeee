import { Skill } from "./Skill.interface";

export class Electronics implements Skill {
    name = 'Electronics'
    specializations?: string[] = ['Computer', 'Hardware', 'Software'];
    untrained: boolean = true;
    primaryAttribute: string = 'logic';
    secondaryAttribute = 'intuition';
    usableByCharacter() {
        return true;
    }
}