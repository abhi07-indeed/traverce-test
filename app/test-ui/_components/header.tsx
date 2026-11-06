import AppDrawer from "./app_drawer";
import UserAvatar from "./user_icon";

import { Label } from "@/components/ui/label";
import { SessionProvider } from "next-auth/react";

export default function Header() {
  return (
    <div className="flex items-center justify-between pl-2 pr-2">
      <div className="flex gap-2">
        <AppDrawer />
      </div>

      <Label className="text-3xl cursor-move">Traverce</Label>
      <SessionProvider>
        <UserAvatar />
      </SessionProvider>
    </div>
  );
}
