import { CareerTimeline } from "@/components/CareerTimeline";
import { SiteShell } from "@/components/SiteShell";

export default function CareerPage() {
  return (
    <SiteShell>
      <CareerTimeline locale="en" />
    </SiteShell>
  );
}
