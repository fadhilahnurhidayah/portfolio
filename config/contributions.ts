export interface contributionsInterface {
  repo: string;
  contributionDescription: string; // Corrected spelling
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "MTSN 01 Bengkalis",
    contributionDescription: "", // Corrected spelling
    repoOwner: "Bengkalis",
    link: "",
  },
  {
    repo: "Babussalam Senior High School",
    contributionDescription: "Science", // Corrected spelling
    repoOwner: "Pekanbaru",
    link: "",
  },
  {
    repo: "Universitas Islam Negeri Sultan Syarif Kasim Riau",
    contributionDescription: "Masters in Computer Science", // Corrected spelling
    repoOwner: "Pekanbaru",
    link: "",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 2);
