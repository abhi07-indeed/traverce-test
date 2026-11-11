import SuggestionCard from "../test-ui/_components/SuggestionCard";

import { Suspense } from "react";
import { supabase } from "@/lib/supabase/server";
import { Spinner } from "@/components/ui/spinner";

export default async function Suggestions() {
  const { data, error } = await supabase.from("suggestion").select("*");

  if (error) {
    return <h1 className="text-red-500 font-bold">Error: {error.message}</h1>;
  }

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        {data.map((suggestion) => {
        return <SuggestionCard key={suggestion.id} suggestion={suggestion} />;
      })}
      </Suspense>
    </div>
  );
}
