import koa from 'koa';
import views from '@ladjs/koa-views';
import serve from '@ladjs/koa-better-static';
import { router } from './routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new koa();

const viewsPath = __dirname + '/views';
const staticPath = __dirname + '/static';

const render = views(viewsPath, {
  autoRender: true,
  extension: 'pug',
});

app.use(serve(staticPath));
app.use(render);
app.use(router.routes());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
