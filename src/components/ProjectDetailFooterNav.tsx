import { Button } from "@/components/ui/Button";
import { BackToTopButton } from "@/components/BackToTopButton";

type ProjectDetailFooterNavProps = {
  className?: string;
};

export function ProjectDetailFooterNav({ className = "" }: ProjectDetailFooterNavProps) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-[28px] border border-white/72 bg-white/60 px-5 py-5 shadow-[0_18px_52px_rgba(24,48,116,0.06)] backdrop-blur-2xl">
        <Button href="/projects" variant="secondary">
          Back to Projects
        </Button>
        <BackToTopButton />
      </div>
    </div>
  );
}
