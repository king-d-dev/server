import fs from 'fs/promises';
import { Router, RequestHandler } from 'express';
import { FrameImage } from '../schema';
import { ImageFramer } from '../utils/image-framer';

const router = Router();

const frameImage: RequestHandler = async (req, res) => {
  const { image, extension } = FrameImage.parse(req.body);

  const filename = `${Date.now()}.${extension}`;
  const filepath = `./public/images/${filename}`;

  await fs.writeFile(filepath, image, {
    encoding: 'base64',
  });

  await ImageFramer.frame(filepath);

  return res.send({ success: true, image: filename });
};

router.post('/frame-image', frameImage);

export default router;
