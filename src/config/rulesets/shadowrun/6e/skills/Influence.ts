import { Skill } from "./Skill.interface";

export class Influence implements Skill {
    name = 'Influence'
    specializations?: string[] = ['Ettiquette', 'Instruction', 'Intimidation', 'Leadership', 'Negotiation'];
    untrained: boolean = true;
    primaryAttribute: string = 'charisma';
    secondaryAttribute = 'logic'
    usableByCharacter() {
        return true;
    }
}