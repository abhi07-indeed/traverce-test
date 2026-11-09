import ItemTile from "./item_tile";
import ToggleTheme from "./toggle_theme";
import LogoutButton from "./logout_button";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MenuIcon,
  CompassIcon,
  BuildingIcon,
  ScrollIcon,
  UserRoundIcon,
} from "lucide-react";

import { auth } from "@/auth";

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

export default async function AppDrawer() {
  const session = await auth();

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
            return <ItemTile key={item.title} item={item} redirectTo="/" />;
          })}
        </div>

        <SheetFooter>
          <ToggleTheme />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
