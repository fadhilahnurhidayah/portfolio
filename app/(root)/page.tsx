import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import dilaImg from "@/public/dila.jpg";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
};

export default async function IndexPage() {
  return (
    <>
      <section className="flex items-center h-screen pt-6 pb-8 mb-0 md:pb-12 md:py-20 lg:py-32">
        <div className="container flex flex-col items-center text-center gap-4 max-w-[64rem] -mt-20">
          <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden shadow-lg">
            <Image
              src={dilaImg}
              layout="fill"
              objectFit="cover"
              alt="Fadhilah Nurhidayah"
            />
          </div>
          <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
            Fadhilah Nurhidayah
          </h1>
          <h3 className="text-base font-heading sm:text-xl md:text-xl lg:text-2xl">
            Full Stack Developer
          </h3>
          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <Link
              href="https://github.com/fadhilahnurhidayah"
              target="_blank"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
            </Link>
            <Link
              href="/contact"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Icons.contact className="w-4 h-4 mr-2" /> Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
