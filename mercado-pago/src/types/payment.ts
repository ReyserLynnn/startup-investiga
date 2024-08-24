import { z } from 'zod';

export const parserPayment = z.object({
  id: z.string(),
  date: z.date(),
  status: z.string(),
});
