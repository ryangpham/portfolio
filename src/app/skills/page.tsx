import { PageLayout } from "@/components/page-layout";
import { DATA } from "@/data/portfolio";

export default function SkillsPage() {
  return <PageLayout title="skills"><ul className="skill-list">{DATA.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></PageLayout>;
}
