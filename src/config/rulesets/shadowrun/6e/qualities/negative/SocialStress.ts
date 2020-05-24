import { Quality } from "../Quality";

export class SocialStress implements Quality {
  name = "Social Stress";
  cost = -8;
  effect = "Select a specific stressor.";

  constructor(stressor: string) {
    this.name = `Social Stress (${stressor})`;
    this.effect = `When encountering ${stressor}, make a charisma (2) test as a minor action. You cannot spend/gain edge until you succeed. If you do not that the test, opponents gain 1 edge on any test.`;
  }
}
