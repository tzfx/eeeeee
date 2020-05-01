import { Skill } from "./Skill.interface";

export class Con implements Skill {
    name = 'Con';
    specializations?: string[] = ['Acting', 'Disguise', 'Impersonation', 'Performance'];
    untrained: boolean = true;
    primaryAttribute: string = 'charisma';
    usableByCharacter() {
        return true;
    }
}