import { Skill } from "./Skill.interface";

export class Influence implements Skill {
    rank = 1;
    specialized = "";
    name = 'Influence'
    specializations?: string[] = ['Ettiquette', 'Instruction', 'Intimidation', 'Leadership', 'Negotiation'];
    untrained = true;
    primaryAttribute = 'charisma';
    secondaryAttribute = 'logic'
    usableByCharacter() {
        return true;
    }
}