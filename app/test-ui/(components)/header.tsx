import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import ToggleTheme from "./toggle_theme";

export default function Header() {
  return (
    <div className="flex items-center justify-between pl-2 pr-2">
      <div className="flex gap-2">
        <BackButton></BackButton>
        <MenuButton />
      </div>

      <Label className="text-3xl cursor-move">Traverce</Label>

      <Avatar size="lg">
        <AvatarImage src="https://www.github.com/techibuzz.png"></AvatarImage>
      </Avatar>
    </div>
  );
}

function BackButton() {
  return (
    <Link href="/">
      <Button size={"icon-lg"} variant="secondary">
        <ArrowLeftIcon />
      </Button>
    </Link>
  );
}

function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger render={<Button size={"icon-lg"} />}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        side="left"
        className="bg-amber-50 dark:bg-gray-800"
      >
        <SheetHeader>
          <SheetTitle>Country Lode Take Me Home!</SheetTitle>
          <SheetDescription>Something something it seems</SheetDescription>
          <ToggleTheme></ToggleTheme>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
