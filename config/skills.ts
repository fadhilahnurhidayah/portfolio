import { Icons } from "@/components/common/icons";

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
      "My name is Fadhilah Nurhidayah, A second year Informatics Engineering student at UIN SUSKA RIAU with an interest in Software Development, and Artificial Intelligence and seeking exciting opportunities related to the same.<br><br>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I believe that the skills that I have attained from the dynamic environment and competitive university life define me, and I am looking forward to implementing and polishing them in any opportunity that I receive.",
    rating:0,
    icon: Icons.nextjs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
