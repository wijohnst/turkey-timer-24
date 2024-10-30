import Router from '@koa/router';

import { v1 } from '../controllers';

export const router = new Router();

router.get('/', async (ctx) => {
  await v1.home(ctx);
});
