import { Context } from 'koa';

export const homeController = (ctx: Context) => {
  ctx.body = '<html>Turkey Timer 2024</html>';
  return;
};
