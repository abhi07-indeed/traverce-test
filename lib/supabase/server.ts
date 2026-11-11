import { createClient } from "@supabase/supabase-js"

// Server-side client — uses the secret key, bypasses RLS.
// ONLY use this in Server Components, Server Actions, and Route Handlers.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET!,
  { db: { schema: "features" } }
)
