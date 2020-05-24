import { Ambidextrous } from "./positive/Ambidextrous";
import { Aptitude } from "./positive/Aptitude";
import { AnalyticalMind } from "./positive/AnalyticalMind";
import { AstralChameleon } from "./positive/AstralChameleon";
import { Blandness } from "./positive/Blandness";
import { BuiltTough } from "./positive/BuiltTough";
import { Catlike } from "./positive/Catlike";
import { DermalDeposits } from "./positive/DermalDeposits";
import { DoubleJointed } from "./positive/DoubleJointed";
import { ElementalResistance } from "./positive/ElementalResistance";
import { FirstImpression } from "./positive/FirstImpression";
import { FocusedConcentration } from "./positive/FocusedConcentration";
import { Guts } from "./positive/Guts";
import { HighPainTolerance } from "./positive/HighPainTolerance";
import { HomeGround } from "./positive/HomeGround";
import { HumanLooking } from "./positive/HumanLooking";
import { Indomitable } from "./positive/Indomitable";
import { Juryrigger } from "./positive/Juryrigger";
import { Longreach } from "./positive/LongReach";
import { LowLightVision } from "./positive/LowLightVision";
import { MagicResistance } from "./positive/MagicResistance";
import { MentorSpirit } from "./positive/MentorSpirit";
import { PathogenResistance } from "./positive/PathogenResistance";
import { PhotographicMemory } from "./positive/PhotographicMemory";
import { QuickHealer } from "./positive/QuickHealer";
import { SpiritAffinity } from "./positive/SpiritAffinity";
import { ThermographicVision } from "./positive/ThermographicVision";
import { Toughness } from "./positive/Toughness";
import { ToxinResistance } from "./positive/ToxinResistance";
import { WillToLive } from "./positive/WillToLive";
import { Exceptional } from "./positive/Exceptional";
import { Gearhead } from "./positive/Gearhead";

export const PositiveQualities = [
  new Ambidextrous(),
  new AnalyticalMind(),
  new Aptitude({ name: "Pick Skill" } as any),
  new AstralChameleon(),
  new Blandness(),
  new BuiltTough(),
  new Catlike(),
  new DermalDeposits(),
  new DoubleJointed(),
  new ElementalResistance("Pick Resistance"),
  new Exceptional("Pick Attribute" as any),
  new FirstImpression(),
  new FocusedConcentration(),
  new Gearhead(),
  new Guts(),
  new HighPainTolerance(),
  new HomeGround("Pick Area"),
  new HumanLooking(),
  new Indomitable(),
  new Juryrigger(),
  new Longreach(),
  new LowLightVision(),
  new MagicResistance(),
  new MentorSpirit("Pick Spirit to Follow"),
  new PathogenResistance(),
  new PhotographicMemory(),
  new QuickHealer(),
  new SpiritAffinity("Pick Spirit/Sprite Type"),
  new ThermographicVision(),
  new Toughness(),
  new ToxinResistance(),
  new WillToLive(),
];
