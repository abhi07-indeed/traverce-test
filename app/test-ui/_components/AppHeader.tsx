import AppDrawer from "./AppDrawer";
import Link from "next/link";
import UserIconButton from "./UserIconButton";

import { Label } from "@/components/ui/label";
import { SessionProvider } from "next-auth/react";

export default function AppHeader() {
  return (
    <div className="flex items-center justify-between pl-2 pr-2">
      <div className="flex gap-2">
        <AppDrawer />
      </div>
      <Label className="text-3xl cursor-move">
        <Link href={"/"}>Traverce</Link>
      </Label>
      <SessionProvider>
        <UserIconButton />
      </SessionProvider>
    </div>
  );
}
