import { neon } from '@neondatabase/serverless';

// Jika DATABASE_URL belum diisi, API memakai data contoh (mode demo).
export const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
