import ToggleTheme from "./toggle_theme";
import ItemTile from "./item_tile";
import UserAvatar from "./user_icon";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  CompassIcon,
  MenuIcon,
  UserRoundIcon,
  BuildingIcon,
  ScrollIcon,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import { SessionProvider } from "next-auth/react";

export default function Header() {
  return (
    <div className="flex items-center justify-between pl-2 pr-2">
      <div className="flex gap-2">
        <SideDrawer />
      </div>

      <Label className="text-3xl cursor-move">Traverce</Label>

      <SessionProvider>
        <UserAvatar />
      </SessionProvider>
    </div>
  );
}

const itemTiles = [
  {
    icon: <UserRoundIcon />,
    title: "Faculty",
    description: "Find cabin and other details",
  },
  {
    icon: <BuildingIcon />,
    title: "Offices",
    description: "Find offices and their timings",
  },
  {
    icon: <ScrollIcon />,
    title: "Suggestions",
    description: "Explore suggestions or submit your own",
  },
];

const SideDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button size={"icon"} />}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        side="left"
        className="bg-amber-50 dark:bg-[#121d21]"
      >
        <SheetHeader className="items-center gap-4">
          <CompassIcon size={80} />
          <Separator></Separator>
        </SheetHeader>

        <div className="px-4 gap-2 flex flex-col">
          {itemTiles.map((item) => {
            return (
              <ItemTile
                key={itemTiles.indexOf(item)}
                item={item}
                redirectTo="/"
              />
            );
          })}
        </div>

        <SheetFooter>
          <ToggleTheme />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
