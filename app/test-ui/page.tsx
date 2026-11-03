import SliderTest from "./_components/slider_test";
import AccordionTest from "./_components/accordion_test";
import { Separator } from "@/components/ui/separator";
import AlertTest from "./_components/alert_test";

export default function UITestPage() {
  return (
    <>
      <SliderTest />
      <AlertTest />
      <AccordionTest />
    </>
  );
}
