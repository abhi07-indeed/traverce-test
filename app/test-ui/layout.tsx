import { Separator } from "@/components/ui/separator";
import Header from "./(components)/header";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Header></Header>
      <Separator />
      {children}
    </div>
  );
}
