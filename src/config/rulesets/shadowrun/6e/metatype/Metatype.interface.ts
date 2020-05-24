import { Quality } from "../qualities/Quality";
import { Attributes } from "../Attributes";

export interface Metatype {
  name: string;
  averageHeight: number;
  averageWeight: number;
  ears: string;
  knownFor: string;
  racials: Quality[];
  maxAttributes: Attributes;
  maxEdge: number;
}
