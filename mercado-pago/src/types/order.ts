import { z } from 'zod';

export const parserCourse = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  is_free: z.boolean(),
  presentation_video: z.string(),
});

export const parserUser = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export type Course = z.infer<typeof parserCourse>;
export type User = z.infer<typeof parserUser>;

export const parserOrder = z.object({
  course: parserCourse,
  user: parserUser,
});

export type Order = z.infer<typeof parserOrder>;
