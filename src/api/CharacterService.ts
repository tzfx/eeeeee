import { APIBASE } from "./APIConstants";

import { CharacterBio } from "../config/rulesets/shadowrun/6e/CharacterBio.interface";
import { Character } from "../config/rulesets/shadowrun/6e/Character";

export class CharacterService {
    
    static getCharacters() {
        return fetch(`${APIBASE}/characters`);
    }
    
    static createCharacter(bio: CharacterBio) {
        return fetch(`${APIBASE}/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bio)
        });
    }
    
    static getCharacter(id: string) {
        return fetch(`${APIBASE}/characters/${id}`);
    }
    
    static updateCharacter(character: Character) {
        return fetch(`${APIBASE}/characters/${character.uuid}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        });
    }
}