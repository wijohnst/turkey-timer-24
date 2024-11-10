import { Context } from 'koa';

export const about = async (ctx: Context) => {
  await ctx.render('about.pug');
};
