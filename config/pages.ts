import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Naman Barkiya's portfolio website.",
    },
  },
  skills: {
    title: "About",
    description: "Fadhilah Nurhidayah's professional identity.",
    metadata: {
      title: "About",
      description:
        "Fadhilah Nurhidayah's professional identity.",
    },
  },
  experience: {
    title: "Gallery",
    description: "My Gallery.",
    metadata: {
      title: "Experience",
      description: "Naman Barkiya's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Naman Barkiya.",
    },
  },
  contributions: {
    title: "Education",
    description: "Fadhilah Nurhidayah's Education History.",
    metadata: {
      title: "Education",
      description:
        "Fadhilah Nurhidayah's Education History.",
    },
  },
  resume: {
    title: "Resume",
    description: "Naman Barkiya's resume.",
    metadata: {
      title: "Resume",
      description: "Naman Barkiya's resume.",
    },
  },
};
