import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function AccordionTest() {
  return (
    <Card className="p-2">
      <Label className="font-bold text-2xl">These are some things</Label>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Are Accordions Expandable?</AccordionTrigger>
          <AccordionContent>Yes indeed</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Really?</AccordionTrigger>
          <AccordionContent>
            Yes absolutely. They are expandable there is no question in that.
            Are you still not sure? Well search up what accordions are.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Last One</AccordionTrigger>
          <AccordionContent>
            This is there just to make it 3 items and serves no other purpose.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button>Bottom Button</Button>
    </Card>
  );
}
