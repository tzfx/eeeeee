import { Skill } from "./Skill.interface";

export class Engineering implements Skill {
    name = 'Engineering';
    specializations?: string[] = ['Aeronautics Mechanic', 'Armorer', 'Automotive Mechanic', 'Demolitions', 'Gunnery', 'Industrial Mechanic', 'Lockpicking', 'Nautical Mechanic'];
    untrained: boolean = true;
    primaryAttribute: string = 'logic';
    usableByCharacter() {
        return true;
    }
}