import { Builder } from "../../../../util/Builder.interface";
import { Metatype } from "./metatype/Metatype.interface";

import { PrioritySelection } from '../../../../new-character/NewPriorities';

export class Attributes {
    body: number;
    agility: number;
    reaction: number;
    strength: number;
    willpower: number;
    logic: number;
    intuition: number;
    charisma: number;
    edge: number;
    edgePoints: number;
    unarmed: number;
    essense: number;
    magic: number;
    movement: number;
    
    constructor(
        body: number,
        agility: number,
        reaction: number,
        strength: number,
        willpower: number,
        logic: number,
        intuition: number,
        charisma: number,
        edge: number,
        magic: number
    ) {
        this.body = body;
        this.agility = agility;
        this.reaction = reaction;
        this.strength = strength;
        this.willpower = willpower;
        this.logic = logic;
        this.intuition = intuition;
        this.charisma = charisma;
        this.edge = edge;
        this.magic = magic;
        this.edgePoints = edge;
        this.unarmed = 0;
        this.essense = magic;
        this.movement = 10;
    }
    

} 

export type AttrName =
    "body" |
    "agility" |
    "reaction" |
    "strength" |
    "willpower" |
    "logic" |
    "intuition" |
    "charisma" |
    "edge" |
    "magic";
    
export const ATTRIBUTE_OPTIONS: AttrName[] = [
    "body",
    "agility",
    "reaction",
    "strength",
    "willpower",
    "logic",
    "intuition",
    "charisma"
];

export const SPECIAL_ATTRIBUTE_OPTIONS: AttrName[] = [
    "edge",
    "magic"
];

export const ALL_ATTRIBUTES = ATTRIBUTE_OPTIONS.concat(SPECIAL_ATTRIBUTE_OPTIONS);

export class AttributesBuilder implements Builder<Attributes> {
    
    error: string = '';
    
    metatype: Metatype;
    priority: PrioritySelection;
    
    body?: number;
    agility?: number;
    reaction?: number;
    strength?: number;
    
    willpower?: number;
    logic?: number;
    intuition?: number;
    charisma?: number;

    // Combat
    edge?: number;

    magic?: number;
    
    
    constructor(metatype: Metatype, priority: PrioritySelection) {
        this.metatype = metatype;
        this.priority = priority;
    }
    
    set(attribute: AttrName, rating: number): AttributesBuilder {
        this[attribute] = rating;
        return this;
    }
    
    increment(attribute: AttrName): AttributesBuilder {
        const attr = this[attribute] || 1;
        this[attribute] = attr + 1;
        return this;
    }
    
    decrement(attribute: AttrName): AttributesBuilder {
        const attr = this[attribute] || 1;
        this[attribute] = attr - 1;
        return this;
    }

    areMaxesInError(): boolean {
        // FIXME: Detection is a point behind? State issues?
        const maxes: AttrName[] = [];
        return ALL_ATTRIBUTES
                .some((attribute: AttrName) => {
                    if (this[attribute] === this.metatype.maxAttributes[attribute]) {
                        maxes.push(attribute);
                        console.log(maxes);
                    }
                    this.error = maxes.length > 1 ? `Two attributes [${maxes.join(",")}] cannot be set to racial max during character creation.` : '';
                    return maxes.length > 1;
                });
    }
    
    isReady(): boolean {
        this.error = '';
        return ALL_ATTRIBUTES
                .every((attr) => {
                    return this[attr] != null
                }) &&
                !this.areMaxesInError()
    }
    
    build(): Attributes {

        if (
            this.body != null &&
            this.agility != null &&
            this.reaction != null &&
            this.strength != null &&
            this.willpower != null &&
            this.logic != null &&
            this.intuition != null &&
            this.charisma != null &&
            this.edge != null &&
            this.magic != null
        )
            return new Attributes(
                this.body,
                this.agility,
                this.reaction,
                this.strength,
                this.willpower,
                this.logic,
                this.intuition,
                this.charisma,
                this.edge,
                this.magic
            );
        throw new Error("Missing required properties.");
    }
    
}