import type { ReactNode } from "react";
import { BottomNav } from "@/components/app/BottomNav";

export default function AppShellLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-surface-base">
      <div className="flex-1 overflow-y-auto pb-2">{children}</div>
      <BottomNav />
    </div>
  );
}
