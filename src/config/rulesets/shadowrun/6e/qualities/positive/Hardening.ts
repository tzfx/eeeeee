import { Quality } from "../Quality";

export class Hardening implements Quality {
    name = "Hardening";
    cost = 10;
    effect = "+1 edge on maxtrix damage resistance to be used immediately. 2 boxes of matrix damage may be converted to stun."
}