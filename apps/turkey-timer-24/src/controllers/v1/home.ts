import { Context } from 'koa';

import { TMinusTime, getTMinusTime } from '../../utils';

export type HomeLocals = {
  tMinusTime: TMinusTime;
  isUnder2Minutes: boolean;
};

const getLocals = (): HomeLocals => {
  const [tMinusTime, isUnder2Minutes] = getTMinusTime();
  return {
    tMinusTime,
    isUnder2Minutes,
  };
};

export const home = async (ctx: Context) => {
  await ctx.render('home.pug', getLocals());
};

export const init = async (ctx: Context) => {
  await ctx.render('hero.pug');
};

export const timer = async (ctx: Context) => {
  const [tMinusTime, isUnder2Minutes] = getTMinusTime();

  await ctx.render('timer.pug', { tMinusTime, isUnder2Minutes });
};
