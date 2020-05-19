import { Quality } from "../Quality";
import { Skill } from "../../skills/Skill.interface";

export class Aptitude implements Quality {
    name: string;
    cost = 12;
    effect: string;
    skill: Skill;
    
    constructor(skill: Skill) {
        this.name =`Aptitude (${skill.name})`;
        this.skill = skill;
        this.effect = `(${skill.name}) Your maximum skill cap is raised to 10, and max starting rank can be 7.`
    }
}