import Router from '@koa/router';

import { homeController } from '../controllers';

const router = new Router();

router.get('/home', homeController);

export default router;
