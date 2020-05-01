import { Skill } from "./Skill.interface";

export class CloseCombat implements Skill {
    name = 'Close Combat';
    specializations?: string[] = ['Blades', 'Clubs', 'Unarmed'];
    untrained: boolean = true;
    primaryAttribute: string = 'agility';
    usableByCharacter() {
        return true;
    }
}