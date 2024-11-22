import { Context } from 'koa';
import { recipeArr, Recipe } from '../../recipes';

type RecipesContext = Context & {};

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
