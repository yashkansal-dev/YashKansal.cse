const siteUrl = "https://yashkansal.dev";
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

type JsonLdProps = {
  includePerson?: boolean;
  includeWebsite?: boolean;
  includeProfilePage?: boolean;
  includeProjects?: boolean;
  page?: {
    path: string;
    title: string;
    description: string;
  };
  breadcrumbs?: Array<{
    name: string;
    item: string;
  }>;
};

const sameAs = [
  "https://www.linkedin.com/in/yashkansal-dev/",
  "https://github.com/yashkansal-dev",
  "https://leetcode.com/u/YashKansal-dev/",
  "https://x.com/yashkansal_dev",
];

const projects = [
  {
    name: "CodeSync",
    description:
      "Real-time collaborative coding system using WebRTC and scalable synchronization patterns.",
    url: "https://codesync.yashkansal.dev/",
    keywords: ["WebRTC", "real-time collaboration", "system design"],
  },
  {
    name: "SmartSched",
    description:
      "Genetic algorithm timetable scheduling system for conflict-free academic schedules.",
    url: "https://smartsched.netlify.app/",
    repository: "https://github.com/yashkansal-dev/SmartSched",
    keywords: ["genetic algorithms", "optimization", "MERN"],
  },
  {
    name: "AidLink",
    description:
      "MERN application focused on reliable delivery workflows and user-centered coordination.",
    url: "https://aid-link.netlify.app/",
    repository: "https://github.com/yashkansal-dev/AidLink",
    keywords: ["MERN", "MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "SparkBook",
    description:
      "Full-stack social and content platform demonstrating product engineering and scalable web architecture.",
    url: "https://github.com/yashkansal-dev/SparkBook",
    repository: "https://github.com/yashkansal-dev/SparkBook",
    keywords: ["full-stack", "React", "Node.js", "product engineering"],
  },
];

export default function JsonLd({
  includePerson = true,
  includeWebsite = true,
  includeProfilePage,
  includeProjects,
  page,
  breadcrumbs,
}: JsonLdProps) {
  const graph: object[] = [];
  const isGlobalGraph = !page && !breadcrumbs?.length;
  const shouldIncludeProfilePage =
    includeProfilePage ?? (isGlobalGraph && includePerson && includeWebsite);
  const shouldIncludeProjects =
    includeProjects ?? (isGlobalGraph && includePerson && includeWebsite);

  if (includePerson) {
    graph.push({
      "@type": "Person",
      "@id": personId,
      name: "Yash Kansal",
      givenName: "Yash",
      familyName: "Kansal",
      url: siteUrl,
      image: `${siteUrl}/images/ykansal.webp`,
      email: "mailto:yashkansal.dev@gmail.com",
      jobTitle: "Software Engineer",
      description:
        "Software engineer and B.Tech CSE 2026 candidate building scalable MERN, WebRTC, real-time, cloud-native, and optimization-driven systems.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Graphic Era University",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Engineer",
        occupationLocation: {
          "@type": "Country",
          name: "India",
        },
        skills:
          "React, Next.js, Node.js, Express.js, MongoDB, WebRTC, system design, distributed systems, performance optimization",
      },
      memberOf: {
        "@type": "Organization",
        name: "Co-Dev Club",
        url: "https://www.linkedin.com/company/co-dev-club/",
      },
      knowsAbout: [
        "Scalable systems",
        "Real-time applications",
        "WebRTC",
        "MERN stack",
        "System design",
        "Distributed systems",
        "Performance optimization",
        "Cloud-native applications",
        "Genetic algorithms",
      ],
      sameAs,
    });
  }

  if (includeWebsite) {
    graph.push({
      "@type": "WebSite",
      "@id": websiteId,
      name: "Yash Kansal Portfolio",
      alternateName: "Yash Kansal",
      url: siteUrl,
      inLanguage: "en-US",
      publisher: {
        "@id": personId,
      },
    });
  }

  if (shouldIncludeProfilePage) {
    graph.push({
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      name: "Yash Kansal - Software Engineer",
      description:
        "Portfolio profile for Yash Kansal, featuring scalable systems, WebRTC, MERN, optimization, and engineering leadership work.",
      url: `${siteUrl}/`,
      inLanguage: "en-US",
      isPartOf: {
        "@id": websiteId,
      },
      mainEntity: {
        "@id": personId,
      },
    });
  }

  if (shouldIncludeProjects) {
    graph.push({
      "@type": "ItemList",
      "@id": `${siteUrl}/#featured-projects`,
      name: "Featured Software Engineering Projects",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.name,
          description: project.description,
          url: project.url,
          ...(project.repository ? { codeRepository: project.repository } : {}),
          programmingLanguage: ["TypeScript", "JavaScript"],
          keywords: project.keywords.join(", "),
          author: {
            "@id": personId,
          },
        },
      })),
    });
  }

  if (page) {
    graph.push({
      "@type": "WebPage",
      "@id": `${siteUrl}${page.path}#webpage`,
      name: page.title,
      description: page.description,
      url: `${siteUrl}${page.path}`,
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": personId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/og-preview.webp`,
        width: 1200,
        height: 630,
      },
    });
  }

  if (breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.name,
        item: breadcrumb.item,
      })),
    });
  }

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
