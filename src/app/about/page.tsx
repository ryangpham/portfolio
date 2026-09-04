import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageLayout title="about">
      <div className="about-layout">
        <Image src={DATA.avatarUrl} alt={DATA.name} width={320} height={400} className="about-portrait" priority />
        <div>
          <h2>{DATA.name.toLowerCase()}</h2>
          <p className="mt-1 text-muted">{DATA.location.toLowerCase()}</p>
          <ul className="mt-6 space-y-2">
            <li>incoming SWE at KPMG</li>
            <li>B.S. in Computer Science at Georgia State University</li>
            <li>prev SDE intern at new eic</li>
            <li>incoming grailed shopper</li>
            <li>karaoke addict</li>
          </ul>
          <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block underline underline-offset-4">view resume ↗</a>
        </div>
      </div>
    </PageLayout>
  );
}
