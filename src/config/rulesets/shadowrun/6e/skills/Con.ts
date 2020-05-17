import { Skill } from "./Skill.interface";

export class Con implements Skill {
    rank = 1;
    specialized = "";
    name = 'Con';
    specializations?: string[] = ['Acting', 'Disguise', 'Impersonation', 'Performance'];
    untrained: boolean = true;
    primaryAttribute: string = 'charisma';
    usableByCharacter() {
        return true;
    }
}