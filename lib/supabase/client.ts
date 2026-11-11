import { createClient } from "@supabase/supabase-js"

// Client-side client — uses the publishable key, respects RLS.
// Safe to use in "use client" components.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)
