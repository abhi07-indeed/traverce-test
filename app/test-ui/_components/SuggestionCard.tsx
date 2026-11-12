import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { User } from "next-auth";

import {
  Item,
  ItemMedia,
  ItemHeader,
  ItemActions,
  ItemSeparator,
  ItemContent,
  ItemFooter,
} from "@/components/ui/item";


export type Suggestion = {
  id: number;
  created_at: Date;
  user: User
  description: string;
  upvotes: number;
  downvotes: number;
  tags: string[];
  status: "approved" | "declined" | "archived" | "pending";
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
              <AvatarImage src={suggestion.user.image!} />
            </Avatar>
          </ItemMedia>
          <div className="justify-start">
            <p className="font-bold">{suggestion.user.name!}</p>
            <p className="font-light">{cleanDate}</p>
          </div>
        </ItemHeader>

        <ItemContent className="text-justify">
          {suggestion.description}
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
