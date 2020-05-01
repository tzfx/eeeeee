import { Dwarf } from "./Dwarf";
import { Elf } from "./Elf";
import { Human } from "./Human";
import { Troll } from "./Troll";
import { Ork } from "./Ork";

export class Metatypes {
    static types = [
        new Dwarf(),
        new Elf(),
        new Human(),
        new Ork(),
        new Troll()
    ];
}