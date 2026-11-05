import SliderTest from "./_components/slider_test";
import AccordionTest from "./_components/accordion_test";
import AlertTest from "./_components/alert_test";
import ComboBoxTest from "./_components/combobox_test";
import { Card, CardContent } from "@/components/ui/card";

export default function UITestPage() {
  return (
    <>
      <SliderTest />
      <ComboBoxTest />
      <AlertTest />
      <AccordionTest />

      <Card className="mb-10">
        <CardContent>
          <iframe
            height="450"
            className="border-0 w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.470703125,33.11915022676886,-96.591796875,32.56533316084102&layer=mapnik&marker=32.74553345603638,-96.80512635678575"
          ></iframe>
        </CardContent>
      </Card>
    </>
  );
}
