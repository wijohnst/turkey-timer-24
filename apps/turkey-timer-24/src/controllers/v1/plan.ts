import { Context } from 'koa';

import { recipeArr } from '../../recipes';

export const plan = async (ctx: Context) => {
  await ctx.render('plan.pug', {
    recipes: recipeArr,
  });
};
