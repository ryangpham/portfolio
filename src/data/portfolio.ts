export const DATA = {
  name: "Ryan Pham",
  location: "Atlanta, GA",
  timezone: "America/New_York",
  timezoneLabel: "ATL",
  bio: "Software Engineer. Coding, music, fashion, and sports enthusiast.",
  summary:
    "I am a fourth-year Computer Science major at Georgia State University. I interned at New EIC as a Software Developer, and I enjoy building projects in my field of interest, ranging from full-stack development to machine learning.",
  avatarUrl: "/me.png",
  resumeUrl: "/Ryan_Pham_Resume_FW25.pdf",
  social: {
    github: {
      label: "GitHub",
      url: "https://github.com/ryangpham",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/the-ryan-pham/",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/glokknb/",
    },
    email: {
      label: "Email",
      url: "mailto:ryangpham@gmail.com",
    },
  },
  skills: [
    "python",
    "java",
    "sql",
    "mysql",
    "mongodb",
    "postgres",
    "react",
    "materialui",
    "tailwindcss",
    "typescript",
    "pandas",
    "numpy",
    "matplotlib",
    "scikit-learn",
    "seaborn",
    "docker",
    "c",
  ],
  work: [
    {
      company: "New EIC",
      href: "https://www.neweicgroup.com/",
      location: "Remote",
      title: "Software Development Intern",
      logoUrl: "/neweic.png",
      start: "May 2025",
      end: "August 2025",
      description:
        "Contributed across the full stack to 10 new features and resolved critical bugs, delivering ~24% of all issues and 31% of merged PRs during the internship. Led a team of 4 interns in refactoring a Mind Map system into a scalable MongoDB-backed multi-map architecture, implementing real-time user collaboration with Yjs and WebSocket. Developed key components like a rich text editor, timeline-synced progress bar, enhanced image preview & PDF export, and multiple dialog forms. Authored 84 commits and contributed 2,113 net lines of production code to the company's codebase.",
    },
    {
      company: "Outlier AI",
      href: "https://outlier.ai/",
      location: "Remote",
      title: "Freelance LLM Trainer",
      logoUrl: "/outlier.png",
      start: "December 2024",
      end: "June 2025",
      description:
        "Conducted in-depth evaluations of large language model responses, verifying adherence to various prompts with detailed instructions and specific constraints. Reviewed and compared models' outputs for high quality responses, accuracy, and compliance to instructions. Improved model training by refining response quality and modifying content to align with the prompt.",
    },
  ],
  education: [
    {
      school: "Georgia State University",
      href: "https://www.gsu.edu/",
      degree: "Bachelor's Degree of Computer Science (B.S.)",
      logoUrl: "/gsu.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "dumpy",
      dates: "November 2025",
      description:
        "An AI-powered event photo sharing app that automatically generates slideshow videos with AI-generated captions, facial recognition tagging, and custom music.",
      technologies: [
        "python",
        "react native",
        "expo",
        "typescript",
        "fastapi",
        "openai gpt-4 vision",
        "supabase",
        "azure blob storage",
      ],
      links: [
        { type: "devpost", href: "https://devpost.com/software/dumpy-g9v1hx" },
        { type: "github", href: "https://github.com/theEricHoang/dumpy" },
      ],
      image: "/dumpy.png",
    },
    {
      title: "heart disease prediction app",
      dates: "June 2025 - July 2025",
      description:
        "A machine learning web app that predicts the likelihood of heart disease based on clinical and lifestyle features. Includes data preprocessing with SMOTE and KNN imputation, and outputs a risk score with health recommendations.",
      technologies: [
        "python",
        "scikit-learn",
        "flask",
        "bootstrap",
        "pandas",
        "xgboost",
        "smote",
      ],
      links: [
        {
          type: "github",
          href: "https://github.com/ryangpham/heart-disease-prediction",
        },
      ],
      image: "/heartprediction.png",
    },
    {
      title: "home price prediction app",
      dates: "November 2024",
      description:
        "A web-based app that predicts housing prices using regression models trained on real estate data. Includes interactive frontend filters for location, bedrooms, and square footage.",
      technologies: [
        "react",
        "python",
        "flask",
        "scikit-learn",
        "bootstrap",
        "pandas",
        "numpy",
      ],
      links: [
        { type: "website", href: "https://atlhomepricepredictor.com/" },
        {
          type: "github",
          href: "https://github.com/theEricHoang/home-price-predictor",
        },
      ],
      image: "/homepricepredict.png",
    },
    {
      title: "fit of the day",
      dates: "December 2024 - Present",
      description:
        "A cross-platform mobile fashion app that allows users to post, browse, and interact with outfit inspirations. Features include tab navigation, authentication, animated profile panels, and real-time state updates.",
      technologies: [
        "python",
        "django",
        "react native",
        "expo router",
        "javascript",
        "typescript",
        "tailwindcss",
      ],
      links: [
        { type: "github", href: "https://github.com/grassfeds/fotd" },
      ],
      image: "/fotd.png",
    },
    {
      title: "employee management system",
      dates: "November 2024",
      description:
        "A JavaFX-based desktop application designed to manage employee data, payroll, job titles, and divisions. Built with modular DAO patterns and JavaFX components.",
      technologies: [
        "java",
        "javafx",
        "mysql",
        "jdbc",
        "scene builder",
        "mvc",
      ],
      links: [
        { type: "github", href: "https://github.com/theEricHoang/zems" },
      ],
      image: "/zems.png",
    },
  ],
  hackathons: [
    {
      title: "AI ATL",
      dates: "November 2025",
      location: "Atlanta, Georgia",
      description:
        "Developed dumpy, an AI-powered event photo sharing app that automatically generates slideshow videos with AI-generated captions, facial recognition tagging, and custom music.",
      image: "/aiatl.png",
    },
  ],
} as const;
