import { Quality } from "../Quality";
import { Skill } from "../../skills/Skill.interface";

export class Incompetant implements Quality {
  name: string;
  effect: string;
  max = 10;
  cost = -8;

  constructor(skill: Skill) {
    this.name = `Incompetant (${skill.name})`;
    this.effect = `You cannot gain ranks in ${skill.name}`;
  }
}
