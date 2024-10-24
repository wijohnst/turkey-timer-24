import Router from '@koa/router';

import { v1 } from '../controllers';

export const router = new Router({ prefix: '/v1' });

router.get('/home', async (ctx) => {
  await v1.home(ctx);
});
