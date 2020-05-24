import { Metatype } from "./metatype/Metatype.interface";
import { PriorityOptions, MagicPriorities } from "./PriorityOptions";
import { Skill } from "./skills/Skill.interface";
import { Quality } from "./qualities/Quality";
import { Character } from "./Character";
import { Builder } from "../../../../util/Builder.interface";
import { CharacterBio } from "./CharacterBio.interface";
import { Attributes } from "./Attributes";

export class CharacterBuilder implements Builder<Character> {
  bio?: CharacterBio;
  attributes?: Attributes;
  metatype?: Metatype;
  magetype: Magetype = "Mundane";
  skills: Set<Skill> = new Set();
  qualities: Set<Quality> = new Set();
  gear: Equipment[] = [];

  adjustmentPoints = 0;
  attributesPoints = 0;
  skillPoints = 0;
  magicPoints = 0;

  bonusKarma = 0;
  karma = 0;
  resources = 0;

  setMetatype(metatype: Metatype): CharacterBuilder {
    this.metatype = metatype;
    return this;
  }

  setPriorities(
    metatype: PriorityRank,
    attributes: PriorityRank,
    skills: PriorityRank,
    magic: PriorityRank,
    resources: PriorityRank
  ): CharacterBuilder {
    this.adjustmentPoints = PriorityOptions.Metatype[metatype] as number;
    this.attributesPoints = PriorityOptions.Attributes[attributes] as number;
    this.skillPoints = PriorityOptions.Skills[skills] as number;
    this.magicPoints =
      this.magetype === "Mundane"
        ? 0
        : (PriorityOptions.Magic[magic] as MagicPriorities)[this.magetype];
    this.resources = PriorityOptions.Resources[resources] as number;
    return this;
  }

  setMagetype(magetype: Magetype): CharacterBuilder {
    this.magetype = magetype;
    return this;
  }

  addSkill(skill: Skill): CharacterBuilder {
    if (!this.skills.has(skill)) {
      this.skillPoints = this.skillPoints - 1;
      this.skills.add(skill);
    }
    return this;
  }

  removeSkill(skill: Skill): CharacterBuilder {
    if (this.skills.has(skill)) {
      this.skillPoints = this.skillPoints + 1;
      this.skills.delete(skill);
    }
    return this;
  }

  addQuality(quality: Quality): CharacterBuilder {
    if (!this.qualities.has(quality) && this.qualities.size < 6) {
      if (this.bonusKarma - quality.cost > 20) {
        console.error("Nope.");
        return this;
      }
      this.bonusKarma = this.bonusKarma - quality.cost;
      this.karma = this.karma + quality.cost;
      this.qualities.add(quality);
    }
    return this;
  }

  removeQuality(quality: Quality): CharacterBuilder {
    if (this.qualities.has(quality)) {
      this.bonusKarma = this.bonusKarma + quality.cost;
      this.karma = this.karma - quality.cost;
      this.qualities.delete(quality);
    }
    return this;
  }

  addGear(gear: Equipment): CharacterBuilder {
    if (gear.availability > 0) {
      this.resources = this.resources - gear.cost;
      this.gear.push(gear);
    }
    return this;
  }

  removeGear(gear: Equipment): CharacterBuilder {
    this.resources = this.resources - gear.cost;
    this.gear = this.gear.filter((g) => gear.name !== g.name);
    return this;
  }

  setCharacterBio(bio: CharacterBio): CharacterBuilder {
    this.bio = bio;
    return this;
  }

  build(): Character {
    if (this.bio && this.attributes)
      return new Character(this.bio, this.attributes);
    throw new TypeError("Bio or Attributes are blank.");
  }
}

type Magetype =
  | "Full"
  | "Aspected"
  | "MysticAdept"
  | "Adept"
  | "Technomancer"
  | "Mundane";
type PriorityRank = "A" | "B" | "C" | "D" | "E";

interface Equipment {
  name: string;
  cost: number;
  availability: number;
}
