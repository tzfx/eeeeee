import { Quality } from "../Quality";

export class InDebt implements Quality {
  name = "In Debt";
  effect =
    "Spending karma for cash converts at 1:5k. Spending karma puts you 5k in debt. You must pay 500¥ per karma spent, per month.";
  cost = 0;
}
