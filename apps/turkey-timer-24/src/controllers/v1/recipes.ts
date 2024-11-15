import { Context } from 'koa';

type RecipesContext = Context & {};

type Ingredient = {
  name: string;
  quantity: string;
};

type Recipe = {
  name: string;
  leadTime: string;
  prepTime: string;
  ticketNumber: number;
  ingredients: Ingredient[];
};

export const recipeArr: Recipe[] = [
  {
    name: 'Roast Turkey',
    leadTime: '3 hours',
    prepTime: '30 minutes',
    ticketNumber: 186051,
    ingredients: [
      { name: 'Turkey', quantity: '1' },
      { name: 'Salt', quantity: '1 t.' },
      { name: 'Pepper', quantity: '1 t.' },
      { name: 'Garlic Powder', quantity: '1 t.' },
      { name: 'Onion Powder', quantity: '1 t.' },
      { name: 'Paprika', quantity: '1 t.' },
      { name: 'Olive Oil', quantity: '1/4 C.' },
    ],
  },
  {
    name: 'Turkey Gravy',
    leadTime: '30 minutes',
    prepTime: '10 minutes',
    ticketNumber: 186052,
    ingredients: [
      { name: 'Turkey Drippings', quantity: '1 C.' },
      { name: 'Flour', quantity: '1/4 C.' },
      { name: 'Chicken Broth', quantity: '2 C.' },
      { name: 'Salt', quantity: '1 t.' },
      { name: 'Pepper', quantity: '1 t.' },
    ],
  },
  {
    name: 'Mashed Potatoes',
    leadTime: '1 hour',
    prepTime: '20 minutes',
    ticketNumber: 186053,
    ingredients: [
      { name: 'Potatoes', quantity: '2 lbs' },
      { name: 'Butter', quantity: '1/2 C.' },
      { name: 'Milk', quantity: '1/2 C.' },
      { name: 'Salt', quantity: '1 t.' },
      { name: 'Pepper', quantity: '1 t.' },
    ],
  },
  {
    name: 'Green Bean Casserole',
    leadTime: '45 minutes',
    prepTime: '10 minutes',
    ticketNumber: 186054,
    ingredients: [
      { name: 'Green Beans', quantity: '2 cans' },
      { name: 'Cream of Mushroom Soup', quantity: '1 can' },
      { name: 'Milk', quantity: '1/2 C.' },
      { name: 'French Fried Onions', quantity: '1 C.' },
    ],
  },
  {
    name: 'Mashed Potatoes',
    leadTime: '1 hour',
    prepTime: '20 minutes',
    ticketNumber: 186053,
    ingredients: [
      { name: 'Potatoes', quantity: '2 lbs' },
      { name: 'Butter', quantity: '1/2 C.' },
      { name: 'Milk', quantity: '1/2 C.' },
      { name: 'Salt', quantity: '1 t.' },
      { name: 'Pepper', quantity: '1 t.' },
    ],
  },
  {
    name: 'Foo',
    leadTime: '45 minutes',
    prepTime: '10 minutes',
    ticketNumber: 186054,
    ingredients: [
      { name: 'Green Beans', quantity: '2 cans' },
      { name: 'Cream of Mushroom Soup', quantity: '1 can' },
      { name: 'Milk', quantity: '1/2 C.' },
      { name: 'French Fried Onions', quantity: '1 C.' },
    ],
  },
  {
    name: 'Bar',
    leadTime: '1 hour',
    prepTime: '20 minutes',
    ticketNumber: 186055,
    ingredients: [
      { name: 'Pumpkin Puree', quantity: '1 can' },
      { name: 'Sweetened Condensed Milk', quantity: '1 can' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Pumpkin Pie Spice', quantity: '1 t.' },
      { name: 'Pie Crust', quantity: '1' },
    ],
  },
];

const totalRecipes = recipeArr.length;
const totalPages = Math.ceil(totalRecipes / 3);

export const getRecipes = (paginationNumber = 0): Recipe[] => {
  const offset = paginationNumber + 3;
  return recipeArr.slice(paginationNumber, offset);
};

export const parsePaginationNumber = (
  paginationNumber: number,
  recipesLength: number
): number => {
  if (paginationNumber > recipesLength) {
    return 0;
  }

  if (paginationNumber <= recipesLength && paginationNumber >= 0) {
    return paginationNumber;
  }

  if (paginationNumber < 0) {
    return 0;
  }
};

export const recipes = async (ctx: RecipesContext) => {
  const { pageNumber } = ctx.request.query;
  const paginationNumber = parsePaginationNumber(
    Number(pageNumber) || 0,
    totalRecipes
  );
  const dotIndex = Math.floor(paginationNumber / 3);

  await ctx.render('recipes.pug', {
    recipes: getRecipes(paginationNumber),
    pageNumber: paginationNumber,
    dotIndex,
    totalPages,
  });
};
