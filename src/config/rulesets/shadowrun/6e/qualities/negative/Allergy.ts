import { Quality } from "../Quality";

const severityMap: Map<Severity, { effect: string; cost: number }> = new Map()
  .set("Mild", {
    effect: "-2 dice on any physical attribute test while allergen is present.",
    cost: 9,
  })
  .set("Moderate", {
    effect: "-4 dice on any physical attribute test while allergen is present.",
    cost: 6,
  })
  .set("Severe", {
    effect:
      "-4 dice on any physical attribute test while allergen is present. 1 box of physical damage every minute of exposure.",
    cost: 3,
  })
  .set("Extreme", {
    effect:
      "-6 dice on all actions. 1 box of physical damage every 30 seconds while allegen is present.",
    cost: 0,
  });

const allergenMap: Map<AllergenType, number> = new Map<AllergenType, number>()
  .set("Common", 0)
  .set("Seasonal", 3)
  .set("Uncommon", 6)
  .set("Rare", 9);

type Severity = "Mild" | "Moderate" | "Severe" | "Extreme";
type AllergenType = "Common" | "Seasonal" | "Uncommon" | "Rare";

export class Allergy implements Quality {
  karma = 20;
  name: string;
  effect: string;
  cost: number;
  constructor(
    name = "Allergy",
    severity: Severity,
    type: AllergenType,
    allergen: string
  ) {
    this.name = `${severity} ${type} ${name} (${allergen})`;
    const sev = severityMap.get(severity);
    if (sev == null) {
      throw new Error("Invalid severity.");
    }
    this.effect = sev.effect;
    this.cost = this.karma - (sev.cost + (allergenMap.get(type) ?? 0));
  }
}
