import { Builder } from "../../../../util/Builder.interface";
import { CharacterBio } from "./CharacterBio.interface";
import { Metatype } from "./metatype/Metatype.interface";

export class CharacterBioBuilder implements Builder<CharacterBio> {
    
    name?: string;
    metatype?: Metatype;
    ethnicity?: string;
    age?: number;
    sex?: 'M' | 'F';
    height?: number;
    weight?: number;
    
    setName(name: string) {
        this.name = name;
        return this;
    }
    
    setMetatype(metatype: Metatype) {
        this.metatype = metatype;
        return this;
    }
    
    setEthnicity(ethnicity: string) {
        this.ethnicity = ethnicity;
        return this;
    }
    
    setAge(age: number) {
        this.age = age;
        return this;
    }
    
    setSex(sex: 'M' | 'F') {
        this.sex = sex;
        return this;
    }
    
    setHeight(height: number) {
        this.height = height;
        return this;
    }
    
    setWeight(weight: number) {
        this.weight = weight;
        return this;
    }
    
    isReady() {
        return (this.name &&
            this.metatype &&
            this.ethnicity &&
            this.age &&
            this.sex &&
            this.height &&
            this.weight
            );
    }
    
    build(): CharacterBio {
        if (this.isReady())
            return {
                name: this.name,
                metatype: this.metatype,
                ethnicity: this.ethnicity,
                age: this.age,
                sex: this.sex,
                height: this.height,
                weight: this.weight
            } as CharacterBio;
        throw new TypeError('Missing required properties');
    }
}