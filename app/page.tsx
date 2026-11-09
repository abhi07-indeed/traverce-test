import Header from "./test-ui/_components/header";
import ComboBoxTest from "./test-ui/_components/combobox_test";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LocateFixed } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <Separator className={"mt-4 mb-4"} />

      <div className="flex flex-col flex-1 gap-4 align-middle justify-center items-center p-4">
        <ComboBoxTest icon={<LocateFixed />} />
        <Button className={"w-full h-15"}>Go</Button>

        <Link href="/alt-ui">New UI Test</Link>
        <Link href="/test-auth">Auth Test</Link>
        <Link href="/test-ui">Testing Components</Link>
      </div>
    </>
  );
}
