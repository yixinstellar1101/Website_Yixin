import type { ReactNode } from "react";

import { AppFrame } from "@/components/AppFrame";

export default function Template({ children }: { children: ReactNode }) {
  return <AppFrame>{children}</AppFrame>;
}
