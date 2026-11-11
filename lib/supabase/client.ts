import { createClient } from "@supabase/supabase-js"

// Client-side client — uses the publishable key, respects RLS.
// Safe to use in "use client" components.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLISHABLE_KEY!
)
