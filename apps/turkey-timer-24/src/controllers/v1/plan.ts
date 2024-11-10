import { Context } from 'koa';

export const plan = async (ctx: Context) => {
  await ctx.render('plan.pug');
};
