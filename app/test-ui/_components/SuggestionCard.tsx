import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Item,
  ItemMedia,
  ItemHeader,
  ItemActions,
  ItemSeparator,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ItemFooter,
} from "@/components/ui/item";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

import { DateTime } from "next-auth/providers/kakao";

export type Suggestion = {
  id: number;
  username: string;
  user_profile: string;
  description: string;
  upvotes: number;
  downvotes: number;
  tags: string[];
  posted: DateTime;
  status: "approved" | "declined" | "archived";
};

export default function SuggestionCard({
  suggestion,
}: {
  suggestion: Suggestion;
}) {
  return (
    <Card className="p-0">
      <Item variant={"outline"}>
        <ItemHeader className="justify-start">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={suggestion.user_profile} />
            </Avatar>
          </ItemMedia>
          <div className="justify-start">
            <p className="font-bold">{suggestion.username}</p>
            <p className="font-light">Posted on: {suggestion.posted}</p>
          </div>
        </ItemHeader>

        <ItemContent>
          <ItemTitle className="font-light text-justify">
            {suggestion.description}
          </ItemTitle>
        </ItemContent>

        <ItemActions className="flex-col">
          <Button className={"rounded-full p-3"}>
            <ArrowBigUp />
          </Button>
          <Button className={"rounded-full p-3"} variant={"destructive"}>
            <ArrowBigDown />
          </Button>
        </ItemActions>

        <ItemSeparator />
        <ItemFooter className="justify-start">
          {suggestion.tags.map((tag) => {
            return <Badge key={tag}> {tag} </Badge>;
          })}
        </ItemFooter>
      </Item>
    </Card>
  );
}
