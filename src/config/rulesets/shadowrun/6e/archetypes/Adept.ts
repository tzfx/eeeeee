import { AttributesBuilder } from "../Attributes";
import { Character } from "../Character";
import { CharacterBioBuilder } from "../CharacterBioBuilder";
import { Human } from "../metatype/Human";
import { ARVertigo } from "../qualities/negative/ARVertigo";
import { Honorbound } from "../qualities/negative/Honorbound";
import { Sinner } from "../qualities/negative/Sinner";
import { Guts } from "../qualities/positive/Guts";
import { QuickHealer } from "../qualities/positive/QuickHealer";
import { Toughness } from "../qualities/positive/Toughness";
import { Athletics } from "../skills/Athletics";
import { Biotech } from "../skills/Biotech";
import { CloseCombat } from "../skills/CloseCombat";
import { Outdoors } from "../skills/Outdoors";
import { Perception } from "../skills/Perception";

// Skills
const Athletics3 = new Athletics();
Athletics3.rank = 3;
Athletics3.specialized = "Throwing +2";

const Biotech2 = new Biotech();
Biotech2.rank = 2;
Biotech2.specialized = "First Aid +2";

const CQC6 = new CloseCombat();
CQC6.rank = 6;
CQC6.specialized = "Unarmed +2";

const Outdoors2 = new Outdoors();
Outdoors2.rank = 2;

const Perception4 = new Perception();
Perception4.rank = 4;
Perception4.specialized = "Visual +2";

const human = new Human();

// Character
const Adept: Character = new Character(
  new CharacterBioBuilder()
    .setAge(25)
    .setEthnicity("American")
    .setMetatype(human)
    .setName("Herkule")
    .setHeight(human.averageHeight)
    .setWeight(human.averageHeight)
    .setSex("M")
    .build(),
  new AttributesBuilder(new Human(), {} as any)
    .set("body", 5)
    .set("agility", 6)
    .set("reaction", 5)
    .set("strength", 5)
    .set("willpower", 4)
    .set("logic", 2)
    .set("intuition", 3)
    .set("charisma", 2)
    .set("edge", 7)
    .set("magic", 6)
    .build()
);

Adept.skills = [Athletics3, Biotech2, CQC6, Outdoors2, Perception4];

Adept.qualities = [
  new Guts(),
  new QuickHealer(),
  new Toughness(),
  new ARVertigo(),
  new Honorbound("Code Duello"),
  new Sinner(),
];

Adept.nuyen = 4420;

export const AdeptExample = Adept;
