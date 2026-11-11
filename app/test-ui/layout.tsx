import { Separator } from "@/components/ui/separator";
import AppHeader from "./_components/AppHeader";

export default function UILayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <AppHeader />
      <Separator />
      {children}
    </div>
  );
}
