import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'staging', 'production']),
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
    DATABASE_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_MASTERDATA_ENDPOINT: z.string().min(1),
    NEXT_PUBLIC_APP_ENDPOINT: z.string().min(1),
    NEXT_PUBLIC_ENV: z.enum(['development', 'test', 'staging', 'production']),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_MASTERDATA_ENDPOINT: process.env.NEXT_PUBLIC_MASTERDATA_ENDPOINT,
    NEXT_PUBLIC_APP_ENDPOINT: process.env.NEXT_PUBLIC_APP_ENDPOINT,
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NODE_ENV: process.env.NODE_ENV,
  },
});
