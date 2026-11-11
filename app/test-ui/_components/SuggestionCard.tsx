import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import {
  Item,
  ItemMedia,
  ItemHeader,
  ItemActions,
  ItemSeparator,
  ItemContent,
  ItemTitle,
  ItemFooter,
} from "@/components/ui/item";

export type Suggestion = {
  id: number;
  username: string;
  user_profile: string;
  description: string;
  upvotes: number;
  downvotes: number;
  tags: string[];
  created_at: Date;
  status: "approved" | "declined" | "archived";
};

export default function SuggestionCard({
  suggestion,
}: {
  suggestion: Suggestion;
}) {
  const cleanDate = new Date(suggestion.created_at).toDateString();

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
            <p className="font-light">{cleanDate}</p>
          </div>
        </ItemHeader>

        <ItemContent>
          <ItemTitle className="font-light text-justify">
            {suggestion.description}
          </ItemTitle>
        </ItemContent>

        <ItemActions className="flex-col">
          <Button className={"p-2 w-18 justify-between gap-0.5 overflow-clip"}>
            <ArrowBigUp />
            <Label>{suggestion.upvotes}</Label>
          </Button>
          <Button
            className={"p-2 w-18 justify-between gap-0.5 overflow-clip"}
            variant={"destructive"}
          >
            <ArrowBigDown />
            <Label className="scale-100">{suggestion.downvotes}</Label>
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
