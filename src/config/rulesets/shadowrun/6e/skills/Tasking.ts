import { Skill } from "./Skill.interface";

export class Tasking implements Skill {
    rank = 1;
    specialized = "";
    name = 'Tasking';
    specializations?: string[] = ['Compiling', 'Decompiling', 'Registering'];
    untrained: boolean = false;
    primaryAttribute: string = 'magic';
    usableByCharacter() {
        return false;
    }
}