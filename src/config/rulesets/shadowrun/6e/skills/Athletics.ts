import { Skill } from "./Skill.interface";

export class Athletics implements Skill {
    rank = 1;
    specialized = "";
    name = 'Athletics';
    specializations?: string[] = ['Archery', 'Climbing', 'Flying', 'Gymnastics', 'Sprinting', 'Swimming', 'Throwing'];
    untrained: boolean = true;
    primaryAttribute: string = 'agility';
    secondaryAttribute?: string = 'strength';
    usableByCharacter() {
        return true;
    }
}