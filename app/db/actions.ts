"use server";

import { supabase } from "@/lib/supabase/server";
import { Suggestion } from "../test-ui/_components/SuggestionCard";

export async function retrieveSuggestions() {
    const {data, error} = await supabase.from('suggestions').select('*');
    if (error) {
        console.log(error.message);
        return [];
    };

    return data;
}

export async function createSuggestion(suggestion: Suggestion) {
    await supabase.from('suggestions').insert(
        {
            user_id: suggestion.user.id,
            username: suggestion.user.name,
            user_profile: suggestion.user.image,
            description: suggestion.description,
            upvotes: suggestion.upvotes,
            downvotes: suggestion.downvotes,
            tags: suggestion.tags,
            status: suggestion.status
        }
    )
}