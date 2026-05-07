import capabilitiesImage from "../assets/capabilities_hero.png";
import homeHeroImage from "../assets/home_hero.png";

export const pageOrder = ["/", "/about", "/capabilities", "/esg", "/approach", "/contact"];

export const supportedLanguages = [
  { code: "en", toggleLabel: "EN" },
  { code: "am", toggleLabel: "AH" },
];

const content = {
  en: {
    primaryLinks: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Capabilities", path: "/capabilities" },
      { label: "ESG", path: "/esg" },
      { label: "Approach", path: "/approach" },
      { label: "Contact", path: "/contact" },
    ],
    uiText: {
      baseTitle: "Armada Mining",
      brandHomeAria: "Armada Mining home",
      goldPriceAria: "Indicative gold price",
      menuToggleAria: "Toggle navigation",
      primaryNavAria: "Primary",
      scrollToTopAria: "Scroll to top",
      languageToggleAria: "Change site language",
      goldUnit: "gm",
      defaultGoldPrices: [
        { currency: "USD", value: "$154.80", trend: "up", note: "+1.6% today" },
        { currency: "ETB", value: "20,850 ETB", trend: "down", note: "-0.6% today" },
      ],
      goldRateNote: (date) => `24K / ${date}`,
      footerFollow: "Follow us",
      copy: "Copy",
      copied: "Copied!",
      go: "Go",
      atAGlance: "At a glance",
      corePillars: "Core pillars",
      nextSteps: "Next steps",
      inOurOwnWords: "In our own words",
      continueExploring: "Continue exploring",
      previousPage: "Previous page",
      nextPage: "Next page",
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "E.g. John Doe",
        emailAddress: "Email Address",
        subject: "Subject",
        selectOption: "Select an option",
        subjectOptions: {
          investment: "Investment Inquiry",
          partnership: "Partnership",
          operations: "Operations",
          other: "Other",
        },
        message: "Message",
        messagePlaceholder: "How can we help?",
        sendMessage: "Send Message",
      },
    },
    footerData: {
      brand: {
        name: "Armada Mining",
        description:
          "Building a technology-first platform for Ethiopian gold mining. Closing the information gap and turning insight into execution.",
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
          details: ["Addis Ababa, Ethiopia", "+251 911 967 525", "admin@armadaeth.com"],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Armada Mining. All rights reserved.`,
    },
    pages: {
      "/": {
        slug: "home",
        title: "Home",
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
          "Mining | Founded 2025 | 11-50 employees",
          "Headquartered in Addis Ababa, Ethiopia",
          "admin@armadaeth.com | +251 911 967 525",
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
        philosophyTag: "Our philosophy",
        philosophyHeading: "Turning insight into execution",
        philosophyBody: [
          "We combine data, mapping, and modern operating systems with real investment in human capital, building a platform where intelligence and reporting are core infrastructure, not afterthoughts.",
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
          "Our aim is a more transparent sector, easier to understand, finance, and operate for investors, operators, and communities alike.",
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
        heading: "Making Ethiopian gold mining simple and accessible",
        lead:
          "ARMADA Mining is building a technology-first platform for Ethiopian gold mining, combining sector intelligence, operational readiness, and disciplined field execution.",
        primaryAction: { label: "See the approach", path: "/approach" },
        secondaryAction: { label: "Back home", path: "/" },
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
        closerHeading: "ARMADA Mining is positioning itself as both an operator and a sector builder.",
        closerBody:
          "That combination of intelligence, execution, and ecosystem support is central to how the company creates long-term value.",
      },
      "/capabilities": {
        slug: "capabilities",
        title: "Capabilities",
        heading: "Capabilities built around insight, readiness, and disciplined execution.",
        lead:
          "ARMADA Mining combines mining intelligence, planning, training, and structured operating systems to improve how Ethiopian gold projects are understood and run.",
        primaryAction: { label: "Review contact", path: "/contact" },
        secondaryAction: { label: "Read about Armada", path: "/about" },
        introTag: "Capability framing",
        introHeading: "Our capabilities are designed to reduce friction and improve execution.",
        introBody:
          "We focus on the capabilities that move the sector from uncertainty to action: better information, clearer planning, stronger team organization, and more transparent operating systems.",
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
        visualQuote: "Mining performance improves when planning, people, and reporting work together.",
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
        closerHeading: "ARMADA's capabilities are meant to strengthen both operations and confidence.",
        closerBody:
          "By combining intelligence, execution systems, and human capital development, we help the sector work more effectively from plan to production.",
        heroImage: capabilitiesImage,
        detailImage: capabilitiesImage,
      },
      "/esg": {
        slug: "esg",
        title: "ESG",
        heading: "Sustainable Gold Production",
        lead:
          "ARMADA Mining is committed to transparent and sustainable operations that integrate Environmental, Social, and Governance principles into every stage.",
        primaryAction: { label: "Contact Us", path: "/contact" },
        secondaryAction: { label: "View capabilities", path: "/capabilities" },
        introTag: "Responsible mining",
        introHeading: "Sustainable Gold Production",
        introBody:
          "ARMADA Mining is committed to transparent and sustainable operations that integrate Environmental, Social, and Governance principles into every stage.",
        esgPrinciples: [
          {
            icon: "E",
            category: "Environmental",
            details:
              "Reprocessing tailings reduces land disturbance and environmental waste legacy.",
          },
          {
            icon: "S",
            category: "Social Impact",
            details:
              "Supporting mining communities through training and disciplined workforce organization.",
          },
          {
            icon: "G",
            category: "Governance",
            details:
              "Structured custody and formal revenue pathways integrated with NBE systems.",
          },
        ],
      },
      "/approach": {
        slug: "approach",
        title: "Approach",
        heading: "An approach built on data, mapping, systems, and people.",
        lead:
          "ARMADA Mining combines modern operating systems with human capital investment so mining decisions and field execution can become more consistent, transparent, and productive.",
        primaryAction: { label: "Visit contact", path: "/contact" },
        secondaryAction: { label: "View capabilities", path: "/capabilities" },
        introTag: "Operating model",
        introHeading: "We turn information into execution through a clear operating model.",
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
        closerHeading: "ARMADA's approach is meant to improve both individual operations and the wider sector.",
        closerBody:
          "By pairing field execution with systems thinking, we aim to make Ethiopian gold mining easier to understand, finance, and operate.",
      },
      "/contact": {
        slug: "contact",
        title: "Contact",
        heading: "Connect with Armada Mining",
        lead:
          "For investor, operator, or partnership conversations, ARMADA Mining can be reached directly through its website, phone number, and headquarters in Addis Ababa, Ethiopia.",
        primaryAction: { label: "Return home", path: "/" },
        secondaryAction: { label: "See capabilities", path: "/capabilities" },
        introTag: "Contact details",
        introHeading: "Reach the team through the channels below.",
        introBody:
          "ARMADA Mining is headquartered in Addis Ababa, Ethiopia and operates in the mining sector with a focus on building a technology-first platform for Ethiopian gold mining.",
        cards: [
          {
            label: "01",
            title: "Email",
            body: "Reach out to admin@armadaeth.com for general inquiries, support, or administration.",
          },
          {
            label: "02",
            title: "Phone",
            body: "Call +251911967525 for direct business and partnership inquiries.",
          },
          {
            label: "03",
            title: "Head office",
            body: "Primary headquarters: Addis Ababa, Ethiopia.",
          },
        ],
      },
    },
  },
  am: {
    primaryLinks: [
      { label: "መነሻ", path: "/" },
      { label: "ስለ እኛ", path: "/about" },
      { label: "አቅሞች", path: "/capabilities" },
      { label: "ESG", path: "/esg" },
      { label: "አቀራረብ", path: "/approach" },
      { label: "ያግኙን", path: "/contact" },
    ],
    uiText: {
      baseTitle: "አርማዳ ማዕድን",
      brandHomeAria: "የአርማዳ ማዕድን መነሻ ገጽ",
      goldPriceAria: "ጠቋሚ የወርቅ ዋጋ",
      menuToggleAria: "መንገድ መቀየሪያን ክፈት",
      primaryNavAria: "ዋና መንገድ",
      scrollToTopAria: "ወደ ላይ ተመለስ",
      languageToggleAria: "የጣቢያ ቋንቋ ቀይር",
      goldUnit: "ግራም",
      defaultGoldPrices: [
        { currency: "USD", value: "$154.80", trend: "up", note: "+1.6% ዛሬ" },
        { currency: "ETB", value: "20,850 ETB", trend: "down", note: "-0.6% ዛሬ" },
      ],
      goldRateNote: (date) => `24K / ${date}`,
      footerFollow: "ይከተሉን",
      copy: "ቅዳ",
      copied: "ተቀድቷል!",
      go: "ሂድ",
      atAGlance: "በአጭሩ",
      corePillars: "ዋና ምሰሶዎች",
      nextSteps: "ቀጣይ እርምጃዎች",
      inOurOwnWords: "በራሳችን አባባል",
      continueExploring: "ማስረጃውን ቀጥሉ",
      previousPage: "ያለፈው ገጽ",
      nextPage: "ቀጣይ ገጽ",
      form: {
        fullName: "ሙሉ ስም",
        fullNamePlaceholder: "ለምሳሌ ዮሐንስ ተስፋዬ",
        emailAddress: "ኢሜይል አድራሻ",
        subject: "ርዕስ",
        selectOption: "አንድ አማራጭ ይምረጡ",
        subjectOptions: {
          investment: "የኢንቨስትመንት ጥያቄ",
          partnership: "ሽርክና",
          operations: "ስራ አስኪያጅነት",
          other: "ሌላ",
        },
        message: "መልእክት",
        messagePlaceholder: "እንዴት ልንረዳዎ እንችላለን?",
        sendMessage: "መልእክት ላክ",
      },
    },
    footerData: {
      brand: {
        name: "አርማዳ ማዕድን",
        description:
          "ለኢትዮጵያ የወርቅ ማዕድን ቴክኖሎጂን የሚመራ መድረክ እየገነባን ነው። የመረጃ ክፍተቱን በመዝጋት እውቀትን ወደ ተግባር እንቀይራለን።",
      },
      columns: [
        {
          title: "ኩባንያ",
          links: [
            { label: "ስለ እኛ", path: "/about" },
            { label: "አቅሞች", path: "/capabilities" },
            { label: "አቀራረብ", path: "/approach" },
          ],
        },
        {
          title: "ህጋዊ",
          links: [
            { label: "የግላዊነት ፖሊሲ", path: "/privacy" },
            { label: "የአገልግሎት ውሎች", path: "/terms" },
            { label: "የኩኪ ፖሊሲ", path: "/cookies" },
          ],
        },
        {
          title: "አድራሻ",
          details: ["አዲስ አበባ፣ ኢትዮጵያ", "+251 911 967 525", "admin@armadaeth.com"],
        },
      ],
      copyright: `© ${new Date().getFullYear()} አርማዳ ማዕድን። መብቶች ሁሉ የተጠበቁ ናቸው።`,
    },
    pages: {
      "/": {
        slug: "home",
        title: "መነሻ",
        heroKicker: "ኢትዮጵያ | የወርቅ ማዕድን",
        heading: "ለኢትዮጵያ የወርቅ ማዕድን ቴክኖሎጂን የሚመራ መድረክ",
        lead:
          "ARMADA Mining የኢትዮጵያን የወርቅ ዘርፍ ለመረዳት፣ ለመደገፍ እና ለማስኬድ የሚያስችሉ በቴክኖሎጂ የተደገፉ መፍትሄዎችን ይገነባል።",
        heroImage: homeHeroImage,
        primaryAction: { label: "ያግኙን", path: "/contact" },
        secondaryAction: { label: "አገልግሎቶቻችንን ይመልከቱ", path: "/capabilities" },
        introTag: "እኛ ማን ነን",
        introHeading: "የመረጃ ክፍተቱን እንዘጋለን፣ ከዚያም እውቀትን ወደ ተግባር እንቀይራለን",
        introBody: [
          "ባለሀብቶችንና ኦፕሬተሮችን የሚዘገይ የመረጃ ክፍተት ላይ እንሰራለን። የኢትዮጵያ የወርቅ ዘርፍ የበለጠ ግልፅና ለኢንቨስትመንት ምቹ እንዲሆን መረጃ፣ ውሂብ እና ካርታ እንጠቀማለን።",
          "ከዚያ መሠረት በኋላ ወደ ተግባር እንገባለን፤ የምርመራ እቅድ፣ የምርት ዝግጁነት እና በዘመናዊ ስርዓቶች እና ግልፅ ሪፖርት የተደገፈ የተደራጀ ኦፕሬሽን እንዲፈጠር እንረዳለን።",
        ],
        introFacts: [
          "ማዕድን | በ2025 ተመሰረተ | 11-50 ሰራተኞች",
          "ዋና መስሪያ ቤት: አዲስ አበባ፣ ኢትዮጵያ",
          "admin@armadaeth.com | +251 911 967 525",
        ],
        focusTag: "ዋና ትኩረት",
        focusHeading: "የምንሰራው",
        focusAreas: [
          {
            title: "የማዕድን መረጃ",
            body:
              "ባለሀብቶችና ኦፕሬተሮች ዘርፉን እንዲረዱ፣ ያልታወቀውን እንዲቀንሱ እና የተሻለ ውሳኔ እንዲወስኑ የሚያግዝ የመረጃ መሠረት እንገነባለን።",
          },
          {
            title: "ስትራቴጂካዊ እቅድ",
            body:
              "መረጃን ወደ እቅድ፣ ካርታ እና የኦፕሬሽን ቅድሚያዎች እንቀይራለን እንዲሁም የመስክ ዝግጁነትን እና የሀብት አጠቃቀምን እናበረታታለን።",
          },
          {
            title: "ምርት እና ኦፕሬሽን",
            body:
              "ፕሮጀክቶች ቡድን፣ መሳሪያ እና የተደራጀ ሪፖርት በመደራጀት ወደ ተቆጣጠረ አፈፃፀም እንዲገቡ እንረዳለን።",
          },
          {
            title: "የስርዓት ግንባታ",
            body:
              "ARMADA አነስተኛ የኦፕሬሽን ሞዴሎችን ያዳብራል እና በኔትወርክ እና በመተባበር አጠቃላይ ዘርፉን እንዲጠናከር ያግዛል።",
          },
        ],
        philosophyTag: "ፍልስፍናችን",
        philosophyHeading: "እውቀትን ወደ ተግባር መቀየር",
        philosophyBody: [
          "ውሂብን፣ ካርታን እና ዘመናዊ የኦፕሬሽን ስርዓቶችን ከሰው ሀብት ልማት ጋር እናቀላቅላለን፤ በዚህም መረጃና ሪፖርት ከኋላ የሚመጡ ነገሮች ሳይሆኑ ዋና መሠረት የሚሆኑበት መድረክ እንገነባለን።",
          "ግባችን ከእቅድ እስከ ምርት ድረስ በሙሉ ሰንሰለቱ ውስጥ የተሻለ መረጃ፣ ግልፅ ሪፖርት እና ጥራት ያለው ውሳኔ ማስፈጸም ነው።",
        ],
        philosophyPoints: ["በውሂብ የተመራ መረጃ", "የሰው ሀብት ልማት", "የተደራጀ ስርዓት", "የዘርፍ አመራር"],
        responsibilityTag: "ኃላፊነት",
        responsibilityHeading: "ጠንካራ የማዕድን ስርዓት መገንባት",
        responsibilityBody: [
          "ባለሙያዎችን በማገናኘት፣ የዘርፍ ትብብርን በማጠናከር እና ከፍተኛ የኦፕሬሽን ደረጃዎችን በመገፋት ሰፊውን የኢትዮጵያ የማዕድን ስርዓት እንዲጠናከር እየረዳን ነው።",
          "ዓላማችን ለባለሀብቶች፣ ለኦፕሬተሮች እና ለማህበረሰቦች የበለጠ ግልፅ፣ ለመረዳት ለመደገፍ እና ለማስኬድ ቀላል የሆነ ዘርፍ መፍጠር ነው።",
        ],
        responsibilityPoints: ["ባለሙያዎች", "ትብብር", "ጥብቅና", "ግልጽነት"],
        galleryTag: "የመስክ ማሳያ",
        galleryHeading: "በመሬት ላይ የምንሰራው",
        galleryLead:
          "ARMADA Mining በኢትዮጵያ ውስጥ የሚሰራውን የስራ አካባቢ፣ የኦፕሬሽን እውነታዎች እና የአፈፃፀም አቀራረብ በአጭሩ የሚያሳይ እይታ ነው።",
        globalCTA: {
          heading: "ስለ የወደፊቱ ማዕድን ለመወያየት ዝግጁ ነዎት?",
          body: "ለመዋዕለ ንዋይ፣ ለኦፕሬሽን ወይም ለሽርክና ከሆነ ይህንን የሚያስችል መድረክ እየገነባን ነው።",
          primaryAction: { label: "ያግኙን", path: "/contact" },
          secondaryAction: { label: "አቅሞቻችን", path: "/capabilities" },
        },
      },
      "/about": {
        slug: "about",
        title: "ስለ እኛ",
        heading: "የኢትዮጵያን የወርቅ ማዕድን ቀላል እና ተደራሽ ማድረግ",
        lead:
          "ARMADA Mining የዘርፍ መረጃን፣ የኦፕሬሽን ዝግጁነትን እና የተደራጀ የመስክ አፈፃፀምን በማጣመር ለኢትዮጵያ የወርቅ ማዕድን ቴክኖሎጂን የሚመራ መድረክ እየገነባ ነው።",
        primaryAction: { label: "አቀራረባችንን ይመልከቱ", path: "/approach" },
        secondaryAction: { label: "ወደ መነሻ ተመለስ", path: "/" },
        introTag: "የኩባንያ አጠቃላይ እይታ",
        introHeading: "ARMADA Mining የዘርፍ መረጃን ወደ እውነተኛ የኦፕሬሽን ችሎታ ይቀይራል።",
        introBody:
          "የማዕድን ዘርፉን የሚዘገይ የመረጃ ክፍተትን በመቅረፍ እንጀምራለን፤ ከዚያም ያ መረጃ ለምርመራ እቅድ፣ ለምርት ዝግጁነት እና ለተደራጀ አነስተኛ ኦፕሬሽን ድጋፍ እንዲውል እናደርጋለን።",
        cards: [
          {
            label: "01",
            title: "የምንሰራላቸው",
            body:
              "ARMADA በኢትዮጵያ የወርቅ ማዕድን ውስጥ ግልፅ መረጃ እና የተደራጀ አፈፃፀም የሚፈልጉ ባለሀብቶችን፣ ኦፕሬተሮችን እና የዘርፉ ተሳታፊዎችን ይደግፋል።",
          },
          {
            label: "02",
            title: "የምንገነባው",
            body:
              "የማዕድን እንቅስቃሴ በእምነት ለመእቅድ፣ ለመደገፍ እና ለማስኬድ የሚያግዙ ስርዓቶችን፣ የስራ ፍሰቶችን እና የሪፖርት ልምዶችን እንገነባለን።",
          },
          {
            label: "03",
            title: "የምንገኝበት",
            body:
              "ዋና መስሪያ ቤታችን በአዲስ አበባ፣ ኢትዮጵያ ይገኛል፤ ይህም ዘርፉን የሚቀይሩ የፖሊሲ፣ የትብብር እና የኔትወርክ ስራዎች አጠገብ እንድንሆን ያደርገናል።",
          },
        ],
        closerHeading: "ARMADA Mining እንደ ኦፕሬተርም እንደ ዘርፍ አበልጣጭም ራሱን እያቆመ ነው።",
        closerBody: "ይህ የመረጃ፣ የአፈፃፀም እና የስርዓት ድጋፍ ጥምረት ኩባንያው የረጅም ጊዜ እሴት እንዲፈጥር ዋና መሠረት ነው።",
      },
      "/capabilities": {
        slug: "capabilities",
        title: "አቅሞች",
        heading: "በእውቀት፣ በዝግጁነት እና በተደራጀ አፈፃፀም የተገነቡ አቅሞች።",
        lead:
          "ARMADA Mining የኢትዮጵያ የወርቅ ፕሮጀክቶች እንዴት እንደሚረዱ እና እንዴት እንደሚካሄዱ ለማሻሻል የማዕድን መረጃን፣ እቅድን፣ ስልጠናን እና የተደራጀ የኦፕሬሽን ስርዓቶችን ያጣምራል።",
        primaryAction: { label: "አድራሻን ይመልከቱ", path: "/contact" },
        secondaryAction: { label: "ስለ ARMADA ያንብቡ", path: "/about" },
        introTag: "የችሎታ አቀራረብ",
        introHeading: "አቅሞቻችን ግጭትን ለመቀነስ እና አፈፃፀምን ለማሻሻል ተቀይረዋል።",
        introBody:
          "ዘርፉን ከግራ ወደ ተግባር የሚያንቀሳቅሱ ችሎታዎች ላይ እንሰራለን፤ የተሻለ መረጃ፣ ግልፅ እቅድ፣ ጠንካራ የቡድን አደረጃጀት እና ግልፅ የኦፕሬሽን ስርዓቶች።",
        cards: [
          {
            label: "01",
            title: "የዘርፍ መረጃ",
            body:
              "በኢትዮጵያ የወርቅ ማዕድን ውስጥ እድሎችን፣ የኦፕሬሽን ገደቦችን እና የኢንቨስትመንት ጥያቄዎችን ግልፅ ለማድረግ የሚያግዝ መረጃ እንሰበስባለን እና እናደራጃለን።",
          },
          {
            label: "02",
            title: "የኦፕሬሽን ስርዓቶች",
            body:
              "ARMADA የውሳኔ ጥራትን፣ የስራ ወጥነትን እና የመስክ ምርታማነትን ለማሻሻል መሳሪያዎችን፣ ካርታን እና የተደራጀ የስራ ፍሰት ይጠቀማል።",
          },
          {
            label: "03",
            title: "የቡድን አፈፃፀም",
            body:
              "ቡድኖች በደህና እና በወጥነት እንዲሰሩ እናስተምራለን እና እናደራጃለን፤ ችሎታ ግንባታንም ወደ ዕለታዊ ውጤት እንቀይራለን።",
          },
        ],
        visualQuote: "እቅድ፣ ሰዎች እና ሪፖርት በአንድነት ሲሰሩ የማዕድን አፈፃፀም ይሻሻላል።",
        detailTag: "የችሎታ ዝርዝር",
        detailHeading: "ARMADA አቅሞቹን በተግባር እንዴት እንደሚተግብር።",
        details: [
          {
            number: "01",
            title: "የምርመራ እቅድ",
            body: "በተሻለ መረጃ፣ በግልፅ ቅድሚያ እና በተደራጀ የመስክ ዝግጅት የምርመራ እቅድን እንደግፋለን።",
          },
          {
            number: "02",
            title: "የምርት ዝግጁነት",
            body: "ፕሮጀክቶች ወደ የበለጠ የታመነ ምርት እንዲገቡ የሚያስፈልጉ ስርዓቶችን እና የሪፖርት ልምዶችን እንገነባለን።",
          },
          {
            number: "03",
            title: "የኦፕሬሽን ግልጽነት",
            body: "የተደራጀ ሪፖርት እና ዘመናዊ የኦፕሬሽን መሳሪያዎች ተጠያቂነትን፣ ምርታማነትን እና የውሳኔ ጥራትን በጊዜ ሂደት ማሻሻል ያስችላሉ።",
          },
        ],
        closerHeading: "የARMADA አቅሞች ኦፕሬሽንንም እምነትንም ለማጠናከር ተዘጋጅተዋል።",
        closerBody: "መረጃን፣ የአፈፃፀም ስርዓቶችን እና የሰው ሀብት ልማትን በማጣመር ዘርፉ ከእቅድ እስከ ምርት ድረስ የበለጠ ውጤታማ እንዲሆን እንረዳለን።",
        heroImage: capabilitiesImage,
        detailImage: capabilitiesImage,
      },
      "/esg": {
        slug: "esg",
        title: "ESG",
        heading: "ዘላቂ የወርቅ ምርት",
        lead:
          "ARMADA Mining የአካባቢ፣ የማህበራዊ እና የአስተዳደር መርሆዎችን በእያንዳንዱ ደረጃ የሚያካትት ግልፅ እና ዘላቂ ኦፕሬሽን ለማካሄድ ቁርጠኛ ነው።",
        primaryAction: { label: "ያግኙን", path: "/contact" },
        secondaryAction: { label: "አቅሞችን ይመልከቱ", path: "/capabilities" },
        introTag: "ኃላፊነት ያለው ማዕድን",
        introHeading: "ዘላቂ የወርቅ ምርት",
        introBody:
          "ARMADA Mining የአካባቢ፣ የማህበራዊ እና የአስተዳደር መርሆዎችን በእያንዳንዱ ደረጃ የሚያካትት ግልፅ እና ዘላቂ ኦፕሬሽን ለማካሄድ ቁርጠኛ ነው።",
        esgPrinciples: [
          {
            icon: "E",
            category: "አካባቢ",
            details: "የቀረ ጭቃ እንደገና ማቀነባበር የመሬት እንክብካቤን ያሳንሳል እና የአካባቢ ቆሻሻ ተፅዕኖን ይቀንሳል።",
          },
          {
            icon: "S",
            category: "ማህበራዊ ተፅዕኖ",
            details: "በስልጠና እና በተደራጀ የሰው ኃይል አደረጃጀት የማዕድን ማህበረሰቦችን እንደግፋለን።",
          },
          {
            icon: "G",
            category: "አስተዳደር",
            details: "የተደራጀ ንብረት እንክብካቤ እና መደበኛ የገቢ መንገዶች ከNBE ስርዓቶች ጋር ተያይዘው ይሰራሉ።",
          },
        ],
      },
      "/approach": {
        slug: "approach",
        title: "አቀራረብ",
        heading: "በውሂብ፣ በካርታ፣ በስርዓት እና በሰዎች ላይ የተመሠረተ አቀራረብ።",
        lead:
          "ARMADA Mining ዘመናዊ የኦፕሬሽን ስርዓቶችን ከሰው ሀብት ኢንቨስትመንት ጋር ያጣምራል ይህም የማዕድን ውሳኔዎችና የመስክ አፈፃፀም የበለጠ ወጥነት ያለው፣ ግልፅ እና ምርታማ እንዲሆን ያግዛል።",
        primaryAction: { label: "ወደ አድራሻ ሂድ", path: "/contact" },
        secondaryAction: { label: "አቅሞችን ይመልከቱ", path: "/capabilities" },
        introTag: "የኦፕሬሽን ሞዴል",
        introHeading: "መረጃን በግልፅ የኦፕሬሽን ሞዴል ወደ ተግባር እንቀይራለን።",
        introBody:
          "አቀራረባችን ዘርፉን በተሻለ ሁኔታ በመረዳት ይጀምራል፤ ከዚያም ያንን መረጃ ወደ እቅድ፣ ወደ ዝግጁነት እና ቡድኖች በተግባር ሊከተሉት የሚችሉ የተደራጀ የስራ ሂደቶች እንቀይራለን።",
        cards: [
          {
            label: "01",
            title: "የተሻሉ ግቤቶችን ይጠቀሙ",
            body: "እድሎችን እና የኦፕሬሽን ምርጫዎችን ለማሻሻል ውሂብን፣ ካርታን እና የተደራጀ መረጃን እንጠቀማለን።",
          },
          {
            label: "02",
            title: "የተሻሉ ቡድኖችን ገንቡ",
            body: "ሰዎች በደህና፣ በወጥነት እና በግልፅ የስራ ምት እንዲሰሩ በማስተማር እና በማደራጀት በሰው ሀብት ላይ እንወዳድራለን።",
          },
          {
            label: "03",
            title: "በተጨማሪ ትክክለኛነት ያስኪዱ",
            body: "የተደራጀ ሪፖርት እና ዘመናዊ የኦፕሬሽን ስርዓቶች ግልጽነትን፣ ምርታማነትን እና የውሳኔ ጥራትን በጊዜ ሂደት ያሻሽላሉ።",
          },
        ],
        visualQuote: "ጠንካራ አፈፃፀም ከጠንካራ መረጃ፣ ከጠንካራ ስርዓት እና አብረው ከሚሰሩ ጠንካራ ቡድኖች ይመጣል።",
        detailTag: "የአቀራረብ ዝርዝር",
        detailHeading: "ARMADA የሚሰራባቸውን መርሆዎች የሚቀርጹ ነጥቦች።",
        details: [
          {
            number: "01",
            title: "የውሳኔ ጥራት",
            body: "ከኦፕሬሽን በፊትና በመካከል የውሳኔ ጥራትን ለማሻሻል የተደራጀ መረጃን እና ሪፖርትን እንጠቀማለን።",
          },
          {
            number: "02",
            title: "የኦፕሬሽን ወጥነት",
            body: "የስራ ፍሰቶች ሲደራጁ፣ ሀላፊነቶች ሲገለጹ እና ስርዓቶች ሲደገሙ ቡድኖች የበለጠ ውጤታማ ይሆናሉ።",
          },
          {
            number: "03",
            title: "የረጅም ጊዜ የዘርፍ ማሻሻያ",
            body: "አቀራረባችን ከኦፕሬሽን በላይ በትብብርና በጥብቅና ይዘልቃል፣ ይህም የኢትዮጵያ የማዕድን ስርዓት እንዲያድግ ያግዛል።",
          },
        ],
        closerHeading: "የARMADA አቀራረብ የግለሰብ ኦፕሬሽኖችንም ሰፊውን ዘርፍም ለማሻሻል የታሰበ ነው።",
        closerBody: "የመስክ አፈፃፀምን ከስርዓት አስተሳሰብ ጋር በማጣመር የኢትዮጵያን የወርቅ ማዕድን ለመረዳት፣ ለመደገፍ እና ለማስኬድ ቀላል ለማድረግ እንቀጥላለን።",
      },
      "/contact": {
        slug: "contact",
        title: "ያግኙን",
        heading: "ከARMADA Mining ጋር ይገናኙ",
        lead:
          "ለባለሀብት፣ ለኦፕሬተር ወይም ለሽርክና ውይይት ARMADA Mining በድህረ ገጹ፣ በስልክ ቁጥሩ እና በአዲስ አበባ ዋና መስሪያ ቤቱ በቀጥታ ሊደረስበት ይችላል።",
        primaryAction: { label: "ወደ መነሻ ተመለስ", path: "/" },
        secondaryAction: { label: "አቅሞችን ይመልከቱ", path: "/capabilities" },
        introTag: "የመገናኛ መረጃ",
        introHeading: "በሚከተሉት መንገዶች ቡድኑን ያግኙ።",
        introBody:
          "ARMADA Mining ዋና መስሪያ ቤቱ በአዲስ አበባ፣ ኢትዮጵያ ይገኛል፤ በኢትዮጵያ የወርቅ ማዕድን ላይ ቴክኖሎጂን የሚመራ መድረክ ለመገንባት ትኩረት በማድረግ በማዕድን ዘርፍ ይሰራል።",
        cards: [
          {
            label: "01",
            title: "ኢሜይል",
            body: "ለአጠቃላይ ጥያቄ፣ ለድጋፍ ወይም ለአስተዳደር ጉዳዮች admin@armadaeth.com ይጻፉ።",
          },
          {
            label: "02",
            title: "ስልክ",
            body: "ለንግድ ወይም ለሽርክና ጥያቄዎች +251911967525 ይደውሉ።",
          },
          {
            label: "03",
            title: "ዋና መስሪያ ቤት",
            body: "ዋና መስሪያ ቤት: አዲስ አበባ፣ ኢትዮጵያ።",
          },
        ],
      },
    },
  },
};

export function getPrimaryLinks(language) {
  return content[language]?.primaryLinks ?? content.en.primaryLinks;
}

export function getPages(language) {
  return content[language]?.pages ?? content.en.pages;
}

export function getFooterData(language) {
  return content[language]?.footerData ?? content.en.footerData;
}

export function getUiText(language) {
  return content[language]?.uiText ?? content.en.uiText;
}
