import { Icons } from "@/components/common/icons";
import Image from "next/image";
import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Fadhilah Nurhidayah",
    description:
      "My name is Fadhilah Nurhidayah, a second-year Informatics Engineering student at UIN SUSKA RIAU with an interest in Software Development and Artificial Intelligence. I am detail-oriented, organized, and always eager to learn and grow in dynamic environments.",
    rating: 0,
    icon: Icons.nextjs,
  },
];

export const skills = skillsUnsorted.slice().sort((a, b) => b.rating - a.rating);
export const featuredSkills = skills.slice(0, 6);

export const metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <Image
          src="/dila.jpg"
          alt="Fadhilah Nurhidayah"
          width={150}
          height={150}
          className="rounded-full shadow-lg border-4 border-gray-300"
        />
        <h1 className="text-2xl font-bold text-gray-800">Fadhilah Nurhidayah</h1>
        <p className="text-gray-600 max-w-lg">
          A second-year Informatics Engineering student at UIN SUSKA RIAU,
          passionate about Software Development and Artificial Intelligence.
          Organized, detail-oriented, and eager to learn and grow.
        </p>
      </div>
      
    </PageContainer>
  );
}
