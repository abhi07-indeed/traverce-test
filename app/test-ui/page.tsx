import SliderTest from "./(components)/slider_test";
import AccordionTest from "./(components)/accordion_test";
import { Separator } from "@/components/ui/separator";
import AlertTest from "./(components)/alert_test";

export default function UITestPage() {
  return (
    <>
      <SliderTest></SliderTest>
      <Separator className={"m-4"}></Separator>
      <AlertTest></AlertTest>
      <Separator className={"m-4"}></Separator>
      <AccordionTest></AccordionTest>
    </>
  );
}
