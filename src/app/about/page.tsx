import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageLayout title="about">
      <div className="flex flex-col gap-6">
        <Image
          src={DATA.avatarUrl}
          alt={DATA.name}
          width={96}
          height={96}
          className="rounded-full opacity-90"
        />
        <div>
          <h2 className="text-sm font-medium">{DATA.name.toLowerCase()}</h2>
          <p className="mt-1 text-xs text-muted">
            {DATA.location.toLowerCase()}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted">{DATA.bio}</p>
        <p className="text-sm leading-relaxed text-muted">{DATA.summary}</p>
      </div>
    </PageLayout>
  );
}
