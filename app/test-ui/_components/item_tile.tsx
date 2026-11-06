"use client";

import { Card } from "@/components/ui/card";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

type Item = { icon: ReactNode; title: string; description: string };

export default function ItemTile({
  item,
  redirectTo,
}: {
  item: Item;
  redirectTo: string;
}) {
  return (
    <Card className="p-0">
      <Item className="m-0">
        <ItemMedia variant={"icon"}>{item.icon}</ItemMedia>
        <ItemContent>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDescription>{item.description}</ItemDescription>
        </ItemContent>

        <ItemActions>
          {" "}
          <Button size={"icon"} onClick={() => redirect(redirectTo)}>
            {" "}
            <ArrowRightIcon />
          </Button>{" "}
        </ItemActions>
      </Item>
    </Card>
  );
}
