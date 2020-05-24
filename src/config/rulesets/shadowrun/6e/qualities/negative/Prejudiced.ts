import { Quality } from "../Quality";

export class Prejudiced implements Quality {
  name: string;
  cost = -8;
  effect: string;

  constructor(group: string) {
    this.name = `Prejudiced ${group}`;
    this.effect = `You are unable to gain or spend edge while ${group} is present-- Unless you are attacking them.`;
  }
}
