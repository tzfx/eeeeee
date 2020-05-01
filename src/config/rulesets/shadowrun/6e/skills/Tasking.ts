import { Skill } from "./Skill.interface";

export class Tasking implements Skill {
    name = 'Tasking';
    specializations?: string[] = ['Compiling', 'Decompiling', 'Registering'];
    untrained: boolean = false;
    primaryAttribute: string = 'magic';
    usableByCharacter() {
        return false;
    }
}