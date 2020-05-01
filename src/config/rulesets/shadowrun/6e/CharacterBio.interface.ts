import { Metatype } from "./metatype/Metatype.interface";

export interface CharacterBio {
    name: string;
    metatype: Metatype;
    ethnicity: string;
    age: number;
    sex: 'M' | 'F';
    height: number;
    weight: number;
}