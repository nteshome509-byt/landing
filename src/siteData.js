import capabilitiesImage from "../assets/capabilities_hero.png";
import homeHeroImage from "../assets/home_hero.png";

export const primaryLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "ESG", path: "/esg" },
  { label: "Approach", path: "/approach" },
  { label: "Contact", path: "/contact" },
];

export const pageOrder = primaryLinks.map((item) => item.path);

export const pages = {
  "/": {
    slug: "home",
    title: "Home",
    eyebrow: "Armada Mining",
    heroKicker: "Ethiopia | Gold Mining",
    heading: "A technology-first platform for Ethiopian gold mining",
    lead:
      "ARMADA Mining builds technology-driven solutions to make the Ethiopian gold sector easier to understand, finance, and operate.",
    heroImage: homeHeroImage,
    primaryAction: { label: "Contact Us", path: "/contact" },
    secondaryAction: { label: "Explore Our Services", path: "/capabilities" },
    introTag: "Who we are",
    introHeading: "Closing the information gap, then turning insight into execution",
    introBody: [
      "We address the information gap that slows investors and operators down. We use intelligence, data, and mapping to make the Ethiopian gold sector more transparent and investable.",
      "From that foundation, we move to execution: exploration planning, production readiness, and disciplined operations supported by modern systems and clear reporting.",
    ],
    introFacts: [
      "Mining | Founded 2025 | 11–50 employees",
      "Headquartered in Addis Ababa, Ethiopia",
      "admin@armadaeth.com · +251 911 967 525",
    ],
    focusTag: "Core focus",
    focusHeading: "What we do",
    focusAreas: [
      {
        title: "Mining Intelligence",
        body:
          "We build the information base that helps investors and operators understand the sector, reduce uncertainty, and make better decisions.",
      },
      {
        title: "Strategic Planning",
        body:
          "We convert intelligence into planning, mapping, and operating priorities that support field readiness and smarter deployment of resources.",
      },
      {
        title: "Production & Ops",
        body:
          "We help projects move into disciplined execution by organizing teams, tools, and structured reporting to run safer, more consistent operations.",
      },
      {
        title: "Ecosystem Building",
        body:
          "ARMADA develops and supports small-scale operating models while helping shape the broader sector through networks and coordination.",
      },
    ],
    philosophyTag: "Our Philosophy",
    philosophyHeading: "Turning insight into execution",
    philosophyBody: [
      "We combine data, mapping, and modern operating systems with real investment in human capital — building a platform where intelligence and reporting are core infrastructure, not afterthoughts.",
      "The goal is to operate with better information, clearer reporting, and sharper decision quality across the full chain from planning to production.",
    ],
    philosophyPoints: [
      "Data-led intelligence",
      "Human capital development",
      "Structured operating systems",
      "Ecosystem leadership",
    ],
    responsibilityTag: "Responsibility",
    responsibilityHeading: "Building a stronger mining ecosystem",
    responsibilityBody: [
      "We are helping shape the broader Ethiopian mining ecosystem by connecting networks of experts, supporting industry coordination, and advocating for stronger operating standards.",
      "Our aim is a more transparent sector — easier to understand, finance, and operate for investors, operators, and communities alike.",
    ],
    responsibilityPoints: ["Experts", "Coordination", "Advocacy", "Transparency"],
    galleryTag: "Field gallery",
    galleryHeading: "Our work on the ground",
    galleryLead:
      "A view into the environments, operating realities, and execution context behind ARMADA Mining's work in Ethiopia.",
    globalCTA: {
      heading: "Ready to discuss the future of mining?",
      body: "Whether you are looking to invest, operate, or partner, we are building the platform to make it possible.",
      primaryAction: { label: "Get in touch", path: "/contact" },
      secondaryAction: { label: "Our capabilities", path: "/capabilities" },
    },
  },
  "/about": {
    slug: "about",
    title: "About",
    eyebrow: "About Armada",
    heading:
      "Making Ethiopian gold mining simple and accessible",
    lead:
      "ARMADA Mining is building a technology-first platform for Ethiopian gold mining, combining sector intelligence, operational readiness, and disciplined field execution.",
    primaryAction: { label: "See the approach", path: "/approach" },
    secondaryAction: { label: "Back home", path: "/" },
    highlights: [
      "Technology-first mining platform",
      "Founded in 2025",
      "11-50 employees",
      "Headquartered in Addis Ababa, Ethiopia",
    ],
    introTag: "Company overview",
    introHeading: "ARMADA Mining turns sector intelligence into real operating capability.",
    introBody:
      "We begin by addressing the information gap that slows the mining sector down, then use that intelligence to support exploration planning, production readiness, and well-structured small-scale operations.",
    cards: [
      {
        label: "01",
        title: "Who we serve",
        body:
          "ARMADA supports investors, operators, and sector participants who need clearer information and more disciplined execution in Ethiopian gold mining.",
      },
      {
        label: "02",
        title: "What we build",
        body:
          "We build the systems, workflows, and reporting habits that make mining activity easier to plan, finance, and operate with confidence.",
      },
      {
        label: "03",
        title: "Where we are based",
        body:
          "Our headquarters are in Addis Ababa, Ethiopia, positioning us close to the policy, coordination, and network-building work shaping the sector.",
      },
    ],
    closerHeading:
      "ARMADA Mining is positioning itself as both an operator and a sector builder.",
    closerBody:
      "That combination of intelligence, execution, and ecosystem support is central to how the company creates long-term value.",
  },
  "/capabilities": {
    slug: "capabilities",
    title: "Capabilities",
    eyebrow: "Capabilities",
    heading:
      "Capabilities built around insight, readiness, and disciplined execution.",
    lead:
      "ARMADA Mining combines mining intelligence, planning, training, and structured operating systems to improve how Ethiopian gold projects are understood and run.",
    primaryAction: { label: "Review contact", path: "/contact" },
    secondaryAction: { label: "Read about Armada", path: "/about" },
    highlights: [
      "Data and mapping support",
      "Exploration planning",
      "Production readiness",
      "Disciplined small-scale operations",
    ],
    introTag: "Capability framing",
    introHeading:
      "Our capabilities are designed to reduce friction and improve execution.",
    introBody:
      "We focus on the capabilities that move the sector from uncertainty to action — better information, clearer planning, stronger team organization, and more transparent operating systems.",
    cards: [
      {
        label: "01",
        title: "Sector intelligence",
        body:
          "We gather and organize information that helps clarify opportunities, operating constraints, and investment questions in Ethiopian gold mining.",
      },
      {
        label: "02",
        title: "Operational systems",
        body:
          "ARMADA uses tools, mapping, and structured workflows to improve decision quality, consistency, and field productivity.",
      },
      {
        label: "03",
        title: "Team execution",
        body:
          "We train and organize teams to execute safely and consistently, turning capability-building into practical day-to-day performance.",
      },
    ],
    visualQuote:
      "Mining performance improves when planning, people, and reporting work together.",
    detailTag: "Capability detail",
    detailHeading: "How ARMADA applies its capabilities in practice.",
    details: [
      {
        number: "01",
        title: "Exploration planning",
        body:
          "We support exploration planning with better information, clearer prioritization, and structured field preparation.",
      },
      {
        number: "02",
        title: "Production readiness",
        body:
          "We help projects build the systems and reporting discipline needed to move into more reliable production.",
      },
      {
        number: "03",
        title: "Operating transparency",
        body:
          "Structured reporting and modern operating tools make it easier to improve accountability, productivity, and decision-making over time.",
      },
    ],
    closerHeading:
      "ARMADA's capabilities are meant to strengthen both operations and confidence.",
    closerBody:
      "By combining intelligence, execution systems, and human capital development, we help the sector work more effectively from plan to production.",
    heroImage: capabilitiesImage,
    detailImage: capabilitiesImage,
  },
  "/esg": {
    slug: "esg",
    title: "ESG",
    eyebrow: "ESG",
    heading: "Sustainable Gold Production",
    lead:
      "ARMADA Mining is committed to transparent and sustainable operations that integrate Environmental, Social, and Governance principles into every stage.",
    primaryAction: { label: "Contact Us", path: "/contact" },
    secondaryAction: { label: "View capabilities", path: "/capabilities" },
    introTag: "Responsible Mining",
    introHeading: "Sustainable Gold Production",
    introBody:
      "Armada Mining is committed to transparent and sustainable operations that integrate Environmental, Social, and Governance principles into every stage.",
    esgPrinciples: [
      {
        category: "Environmental",
        details:
          "Reprocessing tailings reduces land disturbance and environmental waste legacy.",
      },
      {
        category: "Social Impact",
        details:
          "Supporting mining communities through training and disciplined workforce organization.",
      },
      {
        category: "Governance",
        details:
          "Structured custody and formal revenue pathways integrated with NBE systems.",
      },
    ],
  },
  "/approach": {
    slug: "approach",
    title: "Approach",
    eyebrow: "Approach",
    heading: "An approach built on data, mapping, systems, and people.",
    lead:
      "ARMADA Mining combines modern operating systems with human capital investment so mining decisions and field execution can become more consistent, transparent, and productive.",
    primaryAction: { label: "Visit contact", path: "/contact" },
    secondaryAction: { label: "View capabilities", path: "/capabilities" },
    highlights: [
      "Data-led decision support",
      "Mapping and workflow tools",
      "Team training and organization",
      "Structured reporting",
    ],
    introTag: "Operating model",
    introHeading:
      "We turn information into execution through a clear operating model.",
    introBody:
      "Our approach starts with understanding the sector better, then applying that intelligence to planning, readiness, and disciplined operating routines that teams can actually follow.",
    cards: [
      {
        label: "01",
        title: "Use better inputs",
        body:
          "We rely on data, mapping, and structured intelligence to improve how opportunities and operational choices are evaluated.",
      },
      {
        label: "02",
        title: "Build better teams",
        body:
          "We invest in human capital by training and organizing people to execute safely, consistently, and with a clear operational rhythm.",
      },
      {
        label: "03",
        title: "Run with more discipline",
        body:
          "Structured reporting and modern operating systems help improve transparency, productivity, and decision quality over time.",
      },
    ],
    visualQuote:
      "Strong execution comes from strong information, strong systems, and strong teams working together.",
    detailTag: "Approach detail",
    detailHeading: "The principles that shape how ARMADA operates.",
    details: [
      {
        number: "01",
        title: "Decision quality",
        body:
          "We use structured information and reporting to improve the quality of decisions before and during operations.",
      },
      {
        number: "02",
        title: "Operational consistency",
        body:
          "Teams perform better when workflows are organized, responsibilities are clearer, and systems can be repeated reliably.",
      },
      {
        number: "03",
        title: "Long-term sector improvement",
        body:
          "Our approach extends beyond operations into coordination and advocacy that can help the Ethiopian mining ecosystem mature.",
      },
    ],
    closerHeading:
      "ARMADA's approach is meant to improve both individual operations and the wider sector.",
    closerBody:
      "By pairing field execution with systems thinking, we aim to make Ethiopian gold mining easier to understand, finance, and operate.",
  },
  "/contact": {
    slug: "contact",
    title: "Contact",
    eyebrow: "Contact",
    heading: "Connect With Armada Mining .",
    lead:
      "For investor, operator, or partnership conversations, ARMADA Mining can be reached directly through its website, phone number, and headquarters in Addis Ababa, Ethiopia.",
    primaryAction: { label: "Return home", path: "/" },
    secondaryAction: { label: "See capabilities", path: "/capabilities" },
    highlights: [
      "Email: admin@armadaeth.com",
      "Phone: +251911967525",
      "Headquarters: Addis Ababa, Ethiopia",
      "Founded: 2025",
    ],
    introTag: "Contact details",
    introHeading: "Reach the team through the channels below.",
    introBody:
      "ARMADA Mining is headquartered in Addis Ababa, Ethiopia and operates in the mining sector with a focus on building a technology-first platform for Ethiopian gold mining.",
    cards: [
      {
        label: "01",
        title: "Email",
        body:
          "Reach out to admin@armadaeth.com for general inquiries, support, or administration.",
      },
      {
        label: "02",
        title: "Phone",
        body:
          "Call +251911967525 for direct business and partnership inquiries.",
      },
      {
        label: "03",
        title: "Head office",
        body: "Primary headquarters: Addis Ababa, ET.",
      },
    ],
  },
};

export const footerData = {
  brand: {
    name: "Armada Mining",
    description: "Building a technology-first platform for Ethiopian gold mining. Closing the information gap and turning insight into execution.",
  },
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Capabilities", path: "/capabilities" },
        { label: "Approach", path: "/approach" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
        { label: "Cookie Policy", path: "/cookies" },
      ],
    },
    {
      title: "Contact",
      details: [
        "Addis Ababa, Ethiopia",
        "+251 911 967 525",
        "admin@armadaeth.com",
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Armada Mining. All rights reserved.`,
};

