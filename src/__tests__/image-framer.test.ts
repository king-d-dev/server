import { ImageFramer } from '../utils/image-framer';
import path from 'path';

const destinationFile = path.join(
  __dirname,
  '..',
  '..',
  'public/images/test-image.jpg'
);
const sampleImage =
  'https://images.unsplash.com/photo-1619799360822-83d559ae43f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=the-creative-exchange-V4isuIhuSBk-unsplash.jpg';

describe('Image Framer', () => {
  it('should have a static method called frame', () => {
    expect(ImageFramer.frame).toBeDefined();
  });

  describe('frame method', () => {
    it('should frame an image', () => {
      expect(ImageFramer.frame(sampleImage, destinationFile)).resolves.toBe(
        undefined
      );
    });
  });
});
