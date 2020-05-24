import { Metatype } from "./metatype/Metatype.interface";

export interface CharacterBio {
  uuid: string;
  name: string;
  metatype: Metatype;
  ethnicity: string;
  age: number;
  sex: "M" | "F";
  height: number;
  weight: number;
}
