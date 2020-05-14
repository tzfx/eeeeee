import { Builder } from "../../../../util/Builder.interface";
import { Metatype } from "./metatype/Metatype.interface";

import { PrioritySelection } from '../../../../new-character/NewPriorities';
import { propertiesOf } from "../../../../util/ObjectUtils";

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

export class AttributesBuilder implements Builder<Attributes> {
    
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
    

    
    checkMaxes() {
        const properties = propertiesOf<AttrName>();
        console.log("P", properties);
        // const maxes = [];
        // properties.some((attribute: AttrName) => {
        //     if (this[attribute] === this.metatype.maxAttributes[attribute]) {
        //         maxes.push(attribute);
        //     }
        //     return maxes.length > 1;
        // });
    }
    
    isReady(): boolean {
        this.checkMaxes();
        return  this.body != null &&
                this.agility != null &&
                this.reaction != null &&
                this.strength != null &&
                this.willpower != null &&
                this.logic != null &&
                this.intuition != null &&
                this.charisma != null &&
                this.edge != null &&
                this.magic != null
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