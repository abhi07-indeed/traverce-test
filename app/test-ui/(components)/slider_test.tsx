"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderTest() {
  const [value, setValue] = useState(25);

  return (
    <Card className="pl-2 pr-2 pt-4 pb-4">
      <Label className="justify-center text-4xl">{value}</Label>
      <Slider
        min={0}
        max={100}
        step={1}
        value={value}
        onValueChange={(newValue) => setValue(newValue as number)}
      ></Slider>
    </Card>
  );
}
