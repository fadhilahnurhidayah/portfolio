import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/IMG_20190817_023623.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/IMG_20190817_023623.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/IMG_7469.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/IMG_7469.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/IMG_7446.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/IMG_7446.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/IMG_0123.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/IMG_0123.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/IMG_6939.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/IMG_6939.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/WhatsApp Image 2025-03-03 at 11.27.39_6c68a4c8.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/WhatsApp Image 2025-03-03 at 11.27.39_6c68a4c8.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/DSC00037.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["DSC00037.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/WhatsApp Image 2025-03-03 at 11.27.38_778b3bd5.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/WhatsApp Image 2025-03-03 at 11.27.38_778b3bd5.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "2",
    companyName: "",
    type: "Professional",
    category: [],
    shortDescription:
      "",
    websiteLink:
      "",
    techStack: [],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/WhatsApp Image 2025-03-03 at 11.27.35_8a49ab5e.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description: "test description",
        imgArr: ["/WhatsApp Image 2025-03-03 at 11.27.35_8a49ab5e.jpg"],
      },
      {
        title: "Quotes Download Component",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      {
        title: "Interest Selection and Update Page",
        description: "test description",
        imgArr: [
          "/dila.jpg",
          "/experience/superquotes/app_3.webp",
        ],
      },
      {
        title: "Responsiveness",
        description: "test description",
        imgArr: ["/dila.jpg"],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  
]

export const featuredExperiences = Experiences.slice(0, 3);