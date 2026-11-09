import AppHeader from "./test-ui/_components/AppHeader";
import ComboBox from "./test-ui/_components/Combobox";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LocateFixed } from "lucide-react";

export default function Home() {
  return (
    <>
      <AppHeader />
      <Separator className={"mt-4 mb-4"} />

      <div className="flex flex-col flex-1 gap-4 align-middle justify-center items-center p-4">
        <ComboBox icon={<LocateFixed />} />
        <Button className={"w-full h-15"}>Go</Button>

        <Link href="/alt-ui">New UI Test</Link>
        <Link href="/test-auth">Auth Test</Link>
        <Link href="/test-ui">Testing Components</Link>
      </div>
    </>
  );
}
