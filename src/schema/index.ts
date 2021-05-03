import * as z from 'zod';

export const FrameImage = z.object({
  image: z.string(),
  extension: z.string(),
});
