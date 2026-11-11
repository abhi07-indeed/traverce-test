"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

import { useRouter } from "next/navigation";

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";

type Item = { icon: ReactNode; title: string; description: string };

export default function ItemTile({
  item,
  redirectTo,
}: {
  item: Item;
  redirectTo: string;
}) {
  const router = useRouter();

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
          <Button size={"icon"} onClick={() => router.push(`${redirectTo}`)}>
            {" "}
            <ArrowRightIcon />
          </Button>{" "}
        </ItemActions>
      </Item>
    </Card>
  );
}
