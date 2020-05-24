import { AttributesBuilder } from "../Attributes";
import { Character } from "../Character";
import { CharacterBioBuilder } from "../CharacterBioBuilder";
import { Ork } from "../metatype/Ork";
import { Allergy } from "../qualities/negative/Allergy";
import { ARVertigo } from "../qualities/negative/ARVertigo";
import { AstralBeacon } from "../qualities/negative/AstralBeacon";
import { SpiritBane } from "../qualities/negative/SpiritBane";
import { BuiltTough, LowLightVision } from "../qualities/positive";
import { Aptitude } from "../qualities/positive/Aptitude";
import { FocusedConcentration } from "../qualities/positive/FocusedConcentration";
import { CloseCombat } from "../skills/CloseCombat";
import { Conjuring } from "../skills/Conjuring";
import { Perception } from "../skills/Perception";
import { Sorcery } from "../skills/Sorcery";
import { Stealth } from "../skills/Stealth";

// Skills
const Conjuring5 = new Conjuring();
Conjuring5.rank = 5;
Conjuring5.specialized = "Summoning +2";

const Sorcery7 = new Sorcery();
Sorcery7.rank = 7;
Sorcery7.specialized = "Spellcastin +2";
const Perception2 = new Perception();
Perception2.rank = 2;

// Character
const CombatMage: Character = new Character(
  new CharacterBioBuilder()
    .setAge(19)
    .setEthnicity("American")
    .setMetatype(new Ork())
    .setName("Shae")
    .build(),
  new AttributesBuilder(new Ork(), {} as any)
    .set("body", 6)
    .set("agility", 2)
    .set("reaction", 5)
    .set("strength", 7)
    .set("willpower", 5)
    .set("logic", 4)
    .set("intuition", 3)
    .set("charisma", 5)
    .set("edge", 3)
    .set("magic", 6)
    .build()
);

CombatMage.skills = [
  new CloseCombat(),
  Conjuring5,
  Perception2,
  Sorcery7,
  new Stealth(),
];

CombatMage.qualities = [
  new Allergy("Allergy", "Mild", "Common", "grass"),
  new ARVertigo(),
  new AstralBeacon(),
  new BuiltTough(),
  new FocusedConcentration(),
  new Aptitude(new Sorcery()),
  new LowLightVision(),
  new SpiritBane("water"),
];

CombatMage.nuyen = 470;

export const CombatMageExample = CombatMage;
