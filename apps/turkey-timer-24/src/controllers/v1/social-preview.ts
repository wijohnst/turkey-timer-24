import { Context } from 'koa';
import fs from 'fs';
import path from 'path';

export const socialPreview = async (ctx: Context) => {
  const imagePath = path.join(__dirname, 'static/preview-img.png');
  const image = fs.readFileSync(imagePath);

  ctx.set('Content-Type', 'image/png');
  ctx.body = image;
};
