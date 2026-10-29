import { Separator } from "@/components/ui/separator";
import Header from "./(components)/header";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      <Separator className={"m-6"} />
      {children}
    </>
  );
}
