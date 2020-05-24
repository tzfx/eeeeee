import { Quality } from "../Quality";

export class MentorSpirit implements Quality {
  name = "Mentor Spirit";
  cost = 10;
  effect = "Wound penalty -1 when wounded.";

  constructor(spirit: string) {
    this.name = `Mentor Spirit (${spirit})`;
    this.effect = `Gain benefits of ${spirit}. Lost if you fail to keep the tenants.`;
  }
}
