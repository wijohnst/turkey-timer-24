import Router from '@koa/router';

import { v1 } from '../controllers';

export const router = new Router();

router.get('/', async (ctx) => {
  await v1.init(ctx);
});

router.get('/home', async (ctx) => {
  await v1.home(ctx);
});

router.get('/recipes', async (ctx) => {
  await v1.recipes(ctx);
});

router.get('/about', async (ctx) => {
  await v1.about(ctx);
});

router.get('/plan', async (ctx) => {
  await v1.plan(ctx);
});

router.get('/menu', async (ctx) => {
  await v1.menu(ctx);
});

router.get('/timer', async (ctx) => {
  await v1.timer(ctx);
});

router.get('/social-preview.png', async (ctx) => {
  await v1.socialPreview(ctx);
});
