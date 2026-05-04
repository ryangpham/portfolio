import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <PageLayout title="skills">
      <p className="text-sm leading-loose tracking-wide text-muted">
        {DATA.skills.join(", ")}
      </p>
    </PageLayout>
  );
}
