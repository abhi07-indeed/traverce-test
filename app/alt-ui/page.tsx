import ComboBoxTest from "../test-ui/_components/combobox_test";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import {
  BuildingIcon,
  LocateFixed,
  ScrollIcon,
  UserRoundIcon,
} from "lucide-react";

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

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 gap-4 justify-center items-center p-4">
        <Image src="/home_filler.png" width={300} height={300} alt="map"></Image>
        <p className="ml-1 text-4xl font-semibold text-center">
          Where do you want to go?
        </p>
        <ComboBoxTest icon={<LocateFixed />} />
        <Button className={"w-full h-15"}>Go</Button>
      </div>
    </>
  );
}
