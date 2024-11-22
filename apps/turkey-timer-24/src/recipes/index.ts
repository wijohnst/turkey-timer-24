import { dryBrinedTurkey } from './dry-brined.turkey';
import { greenBeanCornCasserole } from './casserole';
import { mashedPotatoes } from './mashed-potatoes';
import { briocheChestnutStuffing } from './stuffing';
import { cranberryGelatin } from './gelatin';
import { waldorfSalad } from './waldorf-salad';
import {
  streusel,
  pumpkinGanache,
  pieCrust,
  caramel,
  pumpkinPie,
} from './pumpkin-pie';
import { rolls } from './rolls';
import { grahamCrackerCrust, keyLimePie } from './key-lime-pie';
import { chickenFootStock, gravy } from './gravy';

export type Ingredient = {
  name: string;
  quantity: string;
};

export type Recipe = {
  name: string;
  leadTime: string;
  prepTime: string;
  cookTime: string;
  ticketNumber: number;
  ingredients: Ingredient[];
  instructions: string[];
};

export const recipeArr: Recipe[] = [
  dryBrinedTurkey,
  greenBeanCornCasserole,
  mashedPotatoes,
  briocheChestnutStuffing,
  cranberryGelatin,
  waldorfSalad,
  streusel,
  pumpkinGanache,
  pieCrust,
  caramel,
  pumpkinPie,
  rolls,
  grahamCrackerCrust,
  keyLimePie,
  chickenFootStock,
  gravy,
];
