import jimp from 'jimp';

const FRAME_WIDTH = 730;
const FRAME_HEIGHT = 565;

const frameSource = './src/utils/gold-frame.png';

export class ImageFramer {
  static async frame(sourceImage: string, destination = sourceImage) {
    const sourceImageResized = await (await jimp.read(sourceImage)).resize(
      FRAME_WIDTH,
      FRAME_HEIGHT
    );
    const frame = await jimp.read(frameSource);
    await sourceImageResized.composite(frame, 1, 1).writeAsync(sourceImage);

    console.log('DONE');
  }
}
