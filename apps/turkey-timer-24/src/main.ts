import koa from 'koa';
import router from './providers/router-provider';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new koa();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
