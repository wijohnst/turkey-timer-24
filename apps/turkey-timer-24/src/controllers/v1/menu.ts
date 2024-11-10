import { Context } from 'koa';

export const menu = async (ctx: Context) => {
  await ctx.render('menu.pug');
};
