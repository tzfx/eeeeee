import { Attributes } from "./Attributes";
import { Quality } from "./qualities/Quality";
import { Skill } from "./skills/Skill.interface";
import { Vehicle } from "./vehicle/Vehicle.interface";
import { Contact } from "./contacts/Contact";
import { CharacterBio } from "./CharacterBio.interface";

import { v4 as UUID } from "uuid";

type Armor = {
  name: string;
  rating: number;
  notes: string;
  availability?: number;
};

type Weapon = {
  name: string;
  dv: number;
  close: number;
};

type RangedWeapon = {
  near: number;
  far: number;
  extreme: number;
  ammo: number;
  mode: string;
  modes: string[];
} & Weapon;

export class Character {
  uuid: string = UUID();

  bio: CharacterBio;

  reputation = 0;
  heat = 0;

  karma = 0;
  totalKarma = 0;

  attributes: Attributes;
  qualities: Quality[] = [];
  racials: Quality[] = [];
  skills: Skill[] = [];
  contacts: Contact[] = [];
  lifestyle?: unknown;
  knowledge: [] = [];
  language: [] = [];
  inventory?: unknown;
  combat?: {
    armor?: Armor;
    ranged?: RangedWeapon;
    melee?: Weapon;
  };
  vehicle?: Vehicle;
  nuyen = 0;
  initiativeDice = 1;

  constructor(bio: CharacterBio, attributes: Attributes) {
    this.bio = bio;
    this.attributes = attributes;
  }

  get initiative(): string {
    return `${this.attributes.reaction + this.attributes.intuition} + ${
      this.initiativeDice
    }D6`;
  }

  get composure(): number {
    return this.attributes.willpower + this.attributes.charisma;
  }

  get judgeIntentions(): number {
    return this.attributes.willpower + this.attributes.intuition;
  }

  get memory(): number {
    return this.attributes.logic + this.attributes.intuition;
  }

  get lift(): number {
    return this.attributes.body + this.attributes.willpower;
  }

  get attackRating(): number {
    return this.attributes.reaction + this.attributes.strength;
  }

  get defenseRating(): number {
    // TODO: Equipped armor rating, qualities.
    return this.attributes.body;
  }

  equals(other: Character) {
    return this.uuid === other.uuid;
  }
}
