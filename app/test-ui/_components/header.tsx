import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeftIcon, Menu, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between pl-2 pr-2">
      <div className="flex gap-2">
        <Link href="/">
          <Button size={"icon-lg"} variant="secondary">
            <ArrowLeftIcon />
          </Button>
        </Link>

        <MenuButton />
      </div>

      <Label className="text-3xl cursor-move">Traverce</Label>

      <Avatar size="lg">
        <AvatarImage src="https://www.github.com/techibuzz.png"></AvatarImage>
      </Avatar>
    </div>
  );
}

function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger render={<Button size={"icon-lg"} />}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent showCloseButton={false} side="left">
        <SheetHeader>
          <SheetTitle>Country Lode Take Me Home!</SheetTitle>
          <SheetDescription>Something something it seems</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
