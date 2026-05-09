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
        <ul className="space-y-2 text-sm text-muted list-disc list-inside">
          <li>incoming SWE at KPMG</li>
          <li>B.S. in Computer Science at Georgia State University</li>
          <li>prev SDE intern at new eic</li>
          <li>incoming grailed shopper</li>
          <li>karaoke addict</li>
        </ul>
      </div>
    </PageLayout>
  );
}
