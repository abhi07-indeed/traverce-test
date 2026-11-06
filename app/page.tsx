import Header from "./test-ui/_components/header";
import { Separator } from "@/components/ui/separator";
import ComboBoxTest from "./test-ui/_components/combobox_test";
import { Button } from "@/components/ui/button";
import { LocateFixed } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <Separator className={"mt-4 mb-4"} />

      <div className="flex flex-col flex-1 gap-4 align-middle justify-center items-center p-4">
        <ComboBoxTest
          headerText="Select Starting Point"
          icon={<LocateFixed />}
        />
        <ComboBoxTest headerText="Select Ending Point" icon={undefined} />
        <Button className={"w-full h-15"}>Go</Button>
      </div>
    </>
  );
}
