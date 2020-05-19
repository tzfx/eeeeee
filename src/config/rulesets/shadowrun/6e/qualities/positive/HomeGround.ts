import { Quality } from "../Quality";

export class HomeGround implements Quality {
    name = "Home Ground";
    cost = 10;
    effect = "Wound penalty -1 when wounded."
    
    constructor(area: string) {
        this.name = `Home Ground (${area})`;
        this.effect = `+1 edge on outdoors/perception tests while in ${area}.`;
    }
}