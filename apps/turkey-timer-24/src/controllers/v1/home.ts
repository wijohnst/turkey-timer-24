import { Context } from 'koa';

export const home = async (ctx: Context) => {
  await ctx.render('home.pug');
};

export const init = async (ctx: Context) => {
  await ctx.render('hero.pug');
};
