import capabilitiesImage from "../assets/gold_wash.jpg";
import bodyImage1 from "../assets/capabilities_body.jpg";
import bodyImage2 from "../assets/approch_body.jpg";
import homeHeroImage from "../assets/home_hero.jpg";
import heroImage3 from "../assets/hero_approach.webp";
import heroImage4 from "../assets/hero_contact.jpg";

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
      goldPriceAria: "Gold Price 24K: ",
      menuToggleAria: "Toggle navigation",
      primaryNavAria: "Primary",
      scrollToTopAria: "Scroll to top",
      languageToggleAria: "Change site language",
      goldprice:"Gold Price 24K: ",
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
        introTag: "Who Armada Mining is ?",
        introHeading: "Closing the information gap, then turning insight into execution",
        introBody: [
          "Armada Mining addresses the information gap that slows investors and operators down. Armada uses intelligence, data, and mapping to make the Ethiopian gold sector more transparent and investable.",
          "From that foundation, Armada moves to execution: exploration planning, production readiness, and disciplined operations supported by modern systems and clear reporting.",
        ],
        introFacts: [
          "Mining | Founded 2025",
          "Headquartered in Addis Ababa, Ethiopia",
          "admin@armadaeth.com | +251 911 967 525",
        ],
        focusTag: "Core focus",
        focusHeading: "What Armada Mining does",
        focusAreas: [
          {
            title: "Mining Intelligence",
            body:
              "Armada builds the information base that helps investors and operators understand the sector, reduce uncertainty, and make better decisions.",
          },
          {
            title: "Strategic Planning",
            body:
              "Armada converts intelligence into planning, mapping, and operating priorities that support field readiness and smarter deployment of resources.",
          },
          {
            title: "Production & Ops",
            body:
              "Armada helps projects move into disciplined execution by organizing teams, tools, and structured reporting to run safer, more consistent operations.",
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
          "Armada Mining combines data, mapping, and modern operating systems with real investment in human capital, building a platform where intelligence and reporting are core infrastructure, not afterthoughts.",
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
          "Armada Mining is helping shape the broader Ethiopian mining ecosystem by connecting networks of experts, supporting industry coordination, and advocating for stronger operating standards.",
          "Our aim is a more transparent sector, easier to understand, finance, and operate for investors, operators, and communities alike.",
        ],
        responsibilityPoints: ["Experts", "Coordination", "Advocacy", "Transparency"],
        galleryTag: "Field gallery",
        galleryHeading: "Our work on the ground",
        galleryLead:
          "A view into the environments, operating realities, and execution context behind ARMADA Mining's work in Ethiopia.",
        globalCTA: {
          heading: "Ready to discuss the future of mining?",
          body: "Whether you are looking to invest, operate, or partner, Armada Mining is building the platform to make it possible.",
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
          "Armada begins by addressing the information gap that slows the mining sector down, then use that intelligence to support exploration planning, production readiness, and well-structured small-scale operations.",
        cards: [
          {
            label: "01",
            title: "Who Armada Mining serves",
            body:
              "ARMADA supports investors, operators, and sector participants who need clearer information and more disciplined execution in Ethiopian gold mining.",
          },
          {
            label: "02",
            title: "What Armada Mining builds",
            body:
              "Armada Mining builds the systems, workflows, and reporting habits that make mining activity easier to plan, finance, and operate with confidence.",
          },
          {
            label: "03",
            title: "Where Armada Mining is based",
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
          "ARMADA Mining focuses on the capabilities that move the sector from uncertainty to action: better information, clearer planning, stronger team organization, and more transparent operating systems.",
        cards: [
          {
            label: "01",
            title: "Sector intelligence",
            body:
              "ARMADA Mining gathers and organizes information that helps clarify opportunities, operating constraints, and investment questions in Ethiopian gold mining.",
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
              "ARMADA trains and organizes teams to execute safely and consistently, turning capability-building into practical day-to-day performance.",
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
              "ARMADA supports exploration planning with better information, clearer prioritization, and structured field preparation.",
          },
          {
            number: "02",
            title: "Production readiness",
            body:
              "Armada helps projects build the systems and reporting discipline needed to move into more reliable production.",
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
        detailImage: bodyImage1,
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
        heroImage: heroImage3,
        detailImage: bodyImage2,
        primaryAction: { label: "Visit contact", path: "/contact" },
        secondaryAction: { label: "View capabilities", path: "/capabilities" },
        introTag: "Operating model",
        introHeading: "Armada turns information into execution through a clear operating model.",
        introBody:
          "Our approach starts with understanding the sector better, then applying that intelligence to planning, readiness, and disciplined operating routines that teams can actually follow.",
        cards: [
          {
            label: "01",
            title: "Use better inputs",
            body:
              "Armada relies on data, mapping, and structured intelligence to improve how opportunities and operational choices are evaluated.",
          },
          {
            label: "02",
            title: "Build better teams",
            body:
              "Armada invests in human capital by training and organizing people to execute safely, consistently, and with a clear operational rhythm.",
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
              "Armada uses structured information and reporting to improve the quality of decisions before and during operations.",
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
        heroImage: heroImage4,
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
      "/privacy": {
        slug: "legal",
        title: "Privacy Policy",
        heading: "Privacy Policy",
        lead: "Your privacy is important to Armada Mining. This policy explains how we collect, use, and protect your information.",
        introTag: "Legal",
        introHeading: "Our Commitment to Privacy",
        introBody: "At Armada Mining, we are committed to protecting the privacy and security of our visitors and clients. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure your data remains protected.",
        sections: [
          {
            title: "1. Information We Collect",
            body: [
              "We may collect personal information that you provide directly to us, such as your name, email address, and phone number when you fill out our contact form or subscribe to our updates.",
              "We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and information about your usage of our site through cookies and similar technologies."
            ]
          },
          {
            title: "2. How We Use Your Information",
            body: [
              "We use the information we collect to provide, maintain, and improve our services, including responding to your inquiries and providing you with updates about our operations and the Ethiopian mining sector.",
              "Your information helps us understand how our website is used, allowing us to enhance the user experience and tailor our content to your interests."
            ]
          },
          {
            title: "3. Data Sharing and Disclosure",
            body: [
              "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or required by law.",
              "We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential."
            ]
          },
          {
            title: "4. Data Security",
            body: [
              "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
            ]
          },
          {
            title: "5. Your Rights",
            body: [
              "You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at admin@armadaeth.com."
            ]
          },
          {
            title: "6. Changes to This Policy",
            body: [
              "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."
            ]
          }
        ]
      },
      "/terms": {
        slug: "legal",
        title: "Terms of Service",
        heading: "Terms of Service",
        lead: "Please read these Terms of Service carefully before using our website and services.",
        introTag: "Legal",
        introHeading: "General Terms",
        introBody: "By accessing or using the Armada Mining website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our website or use our services.",
        sections: [
          {
            title: "1. Acceptance of Terms",
            body: [
              "Your access to and use of Armada Mining's website and services is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users, and others who access or use the service."
            ]
          },
          {
            title: "2. Intellectual Property",
            body: [
              "The content, features, and functionality of our website, including but not limited to text, graphics, logos, and images, are the exclusive property of Armada Mining and are protected by international copyright, trademark, and other intellectual property laws.",
              "You may not reproduce, distribute, modify, or create derivative works of any part of our website without our express written permission."
            ]
          },
          {
            title: "3. Use of Service",
            body: [
              "You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.",
              "Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our site."
            ]
          },
          {
            title: "4. Disclaimer",
            body: [
              "The information provided on our website is for general informational purposes only. While we strive for accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information contained on the site."
            ]
          },
          {
            title: "5. Limitation of Liability",
            body: [
              "In no event shall Armada Mining be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website or services."
            ]
          },
          {
            title: "6. Governing Law",
            body: [
              "These Terms of Service shall be governed by and construed in accordance with the laws of Ethiopia, without regard to its conflict of law provisions."
            ]
          }
        ]
      },
      "/cookies": {
        slug: "legal",
        title: "Cookie Policy",
        heading: "Cookie Policy",
        lead: "This policy explains how Armada Mining uses cookies and similar technologies to improve your experience on our website.",
        introTag: "Legal",
        introHeading: "Understanding Cookies",
        introBody: "Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences, understand how you interact with our site, and improve your overall browsing experience.",
        sections: [
          {
            title: "1. How We Use Cookies",
            body: [
              "We use cookies for several reasons, including making our website work correctly, analyzing how visitors use our site, and remembering your language preferences and other settings.",
              "Some cookies are essential for the operation of our site, while others are used for performance and functionality purposes."
            ]
          },
          {
            title: "2. Types of Cookies We Use",
            body: [
              "Essential Cookies: These are necessary for the website to function and cannot be switched off in our systems.",
              "Performance Cookies: These allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
              "Functional Cookies: These enable the website to provide enhanced functionality and personalization."
            ]
          },
          {
            title: "3. Managing Your Cookies",
            body: [
              "Most web browsers allow you to control cookies through their settings preferences. You can choose to block or delete cookies, but this may affect your ability to use some features of our website.",
              "To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org."
            ]
          }
        ]
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
      baseTitle: "Armada Mining",
      brandHomeAria: "የArmada Mining መነሻ ገጽ",
      goldPriceAria: "የወርቅ ዋጋ 24K: ",
      menuToggleAria: "መንገድ መቀየሪያን ክፈት",
      primaryNavAria: "ዋና መንገድ",
      scrollToTopAria: "ወደ ላይ ተመለስ",
      languageToggleAria: "የጣቢያ ቋንቋ ቀይር",
      footerFollow: "ይከተሉን",
      copy: "ቅዳ",
      copied: "ተቀድቷል!",
      go: "ሂድ",
      atAGlance: "በአጭሩ",
      corePillars: "ዋና ምሰሶዎች",
      nextSteps: "ቀጣይ እርምጃዎች",
      inOurOwnWords: "በአርማዳ ማይኒንግ እይታ",
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
        name: "Armada Mining",
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
      copyright: `© ${new Date().getFullYear()} Armada Mining። መብቶች ሁሉ የተጠበቁ ናቸው።`,
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
        introTag: "Armada Mining ማነው?",
        introHeading: "የመረጃ ክፍተቱን እንዘጋለን፣ ከዚያም እውቀትን ወደ ተግባር እንቀይራለን",
        introBody: [
          "ባለሀብቶችንና ኦፕሬተሮችን የሚዘገይ የመረጃ ክፍተት ላይ እንሰራለን። የኢትዮጵያ የወርቅ ዘርፍ የበለጠ ግልፅና ለኢንቨስትመንት ምቹ እንዲሆን መረጃ፣ ውሂብ እና ካርታ እንጠቀማለን።",
          "ከዚያ መሠረት በኋላ ወደ ተግባር እንገባለን፤ የምርመራ እቅድ፣ የምርት ዝግጁነት እና በዘመናዊ ስርዓቶች እና ግልፅ ሪፖርት የተደገፈ የተደራጀ ኦፕሬሽን እንዲፈጠር እንረዳለን።",
        ],
        introFacts: [
          "Armada Mining  | በ2025 ተመሰረተ | 11-50 ሰራተኞች",
          "ዋና መስሪያ ቤት: አዲስ አበባ፣ ኢትዮጵያ",
          "admin@armadaeth.com | +251 911 967 525",
        ],
        focusTag: "ዋና ትኩረት",
        focusHeading: "የምንሰራው",
        focusAreas: [
          {
            title: "የማዕድን መረጃ ጥናት",
            body:
              "ባለሀብቶችና ኦፕሬተሮች ዘርፉን እንዲረዱ፣ ጥርጣሬ የሚቀንስ እና የተሻለ ውሳኔ እንዲወስኑ የሚያግዝ የመረጃ መሠረት እንገነባለን።",
          },
          {
            title: "ስልታዊ እቅድ",
            body:
              "የተገኘውን መረጃ ለመስክ ዝግጁነትን እና የተሻለ የሀብት አጠቃቀምን ወደሚደግፉ እቅዶች፣ ካርታዎች እና የሥራ ቅድሚያዎች እንለውጣለን።",
          },
          {
            title: "ምርት እና የሥራ እንቅስቃሴ",
            body:
              "ደህንነቱ የተጠበቀ እና ወጥ የሆነ ሥራ ለማካሄድ ቡድኖችን፣ መሣሪያዎችን እና ሥርዓታዊ ሪፖርቶችን በማደራጀት ፕሮጀክቶች ወደ ተግባር እንዲገቡ እንረዳለን።",
          },
          {
            title: "ሥነ-ምህዳር ግንባታ ",
            body:
              "Armada አነስተኛ የሥራ ሞዴሎችን በማዘጋጀት እና በመደገፍ እንዲሁም በትስስር እና በቅንጅት ሰፊውን ዘርፍ ለመቅረጽ ይረዳል።",
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
        responsibilityHeading: "ጠንካራ የማዕድን ሥነ-ምህዳር መገንባት",
        responsibilityBody: [
          "የባለሙያዎችን ትስስር በመፍጠር፣ የኢንዱስትሪ ቅንጅትን በመደገፍ እና ጠንካራ የሥራ ደረጃዎች እንዲኖሩ በመሟገት ሰፊውን የኢትዮጵያ ማዕድን ሥነ-ምህዳር ለመቅረጽ እየሰራን ነው።",
          "ዓላማችን ባለሀብቶችን፣ ኦፕሬተሮችን እና ማህበረሰቦችን ለመረዳት፣ የገንዘብ ድጋፍ (ፋይናንስ )ላይ ይበልጥ ግልጽ የሆነ ዘርፍ ማስቀጠል ነው ።",
        ],
        responsibilityPoints: ["ባለሙያዎች", "ትብብር", "ጥብቅና", "ግልጽነት"],
        galleryTag: "የመስክ ማሳያ",
        galleryHeading: "በመሬት ላይ የምንሰራው",
        galleryLead:
          "ARMADA Mining በኢትዮጵያ ውስጥ ስላለው የስራ አካባቢ፣ ተጨባጭ ስራዎች እና የአፈጻጸም ሁኔታዎች የሚያሳይ ምስል።",
        globalCTA: {
          heading: "ስለማዕድን ቁፋሮ ቢዝነስ ለማወቅ እና ወደ ቢዝነሱ ለመቀላቀል ዝግጁ ናችሁ ? ",
          body: "ኢንቨስት ለማድረግም ሆነ አብሮ ለመስራት ቢፈልጉ፣ እኛ ይህንን እውን የሚያደርግ አሰራር እያዘጋጀን ነው።",
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
        heading: "በእውቀትና በተግባር ላይ የተመሰረተ ብቃት",
        lead:
          "Armada Mining የማዕድን ዘርፉን እውቀት፣ ጥንቃቄ የተሞላበት እቅድ፣ ስልጠና እና የተደራጀ አሰራርን በማቀናጀት በኢትዮጵያ የወርቅ ማውጣት ስራዎች በተሻለ ሁኔታ እንዲመሩ ያደርጋል።",
        primaryAction: { label: "አድራሻን ይመልከቱ", path: "/contact" },
        secondaryAction: { label: "ስለ ARMADA ያንብቡ", path: "/about" },
        introTag: "የችሎታ አቀራረብ",
        introHeading: " አገልግሎቶቻችን ስራን ለማቅለልና ውጤታማ ለማድረግ የተነደፉ ናቸው።",
        introBody:
          "አርማዳ ማይኒንግ ትኩረት የሚያደርገው በዘርፉ ያለውን ተግዳሮት የተሻለ መረጃ፣ ግልጽ እቅድ፣ ጠንካራ የቡድን አደረጃጀት እና ግልጽነት ያለው አሰራር እንዲኖር በማድረግ የተሻለ ማዘመን ላይ ነው ።",
        cards: [
          {
            label: "01",
            title: "የዘርፍ እውቀት",
            body:
              "በኢትዮጵያ የወርቅ ቁፋሮ ላይ ያሉትን ዕድሎች፣ እንቅፋቶች እና ከኢንቨስትመንት ጋር የተያያዙ ጥያቄዎችን ለመመለስ የሚረዱ መረጃዎችን ሰብስበን እናደራጃለን።",
          },
          {
            label: "02",
            title: "የአሰራር ስርዓት ",
            body:
              "ARMADA Mining በዚህ የቢዝነስ መስክ ላይ ያሉት ውሳኔዎች በጥራትና በወጥነት እንዲተላለፉ እንዲሁም ምርታማነት እንዲጨምር  ዘመናዊ መሣሪያዎችንና የተቀናጀ አሰራርን ይጠቀማል።",
          },
          {
            label: "03",
            title: "የቡድን አፈፃፀም",
            body:
              "ቡድኖች ስራቸውን በደህንነትና በብቃት እንዲወጡ እናሰለጥናለን፤ እናደራጃለን። ይህም የተማሩትን እውቀት ወደ ተግባር እንዲቀይሩት ይረዳቸዋል።",
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
        closerBody: "የARMADA ዓላማ ዕውቀትን፣ የአሰራር ስርዓቶችን እና የሰው ኃይልን በማቀናጀት፣ ከዕቅድ እስከ ምርት ያለው ሂደት ይበልጥ ውጤታማ እንዲሆን ማድረግ ነው።",
        heroImage: capabilitiesImage,
        detailImage: bodyImage1,
      },
      "/esg": {
        slug: "esg",
        title: "ESG",
        heading: "ዘላቂ የወርቅ ምርት",
        lead:
          "ARMADA Mining የአካባቢ ጥበቃን፣ ማህበራዊ ኃላፊነትን እና መልካም አስተዳደርን ባገናዘበ መልኩ በግልጽነት እና በዘላቂነት መስራትን ቅድሚያ የሚሰጠው ተግባር ነው።",
        primaryAction: { label: "ያግኙን", path: "/contact" },
        secondaryAction: { label: "አቅሞችን ይመልከቱ", path: "/capabilities" },
        introTag: "ኃላፊነት ያለው ማዕድን",
        introHeading: "ዘላቂ የወርቅ ምርት",
        introBody:
          "ኩባንያችን በእያንዳንዱ የስራ ሂደት ውስጥ ለአካባቢ ጥበቃ፣ ለማህበረሰብ ደህንነት እና ለትክክለኛ አሰራር (ESG) ትኩረት ይሰጣል።",
        esgPrinciples: [
          {
            icon: "E",
            category: "አካባቢ",
            details: "የማዕድን ተረፈ-ምርቶችን መልሶ ጥቅም ላይ በማዋል፣ መሬት እንዳይበላሽ እና የአካባቢ ብክለት እንዳይከሰት ያደርጋል።",
          },
          {
            icon: "S",
            category: "ማህበራዊ ተፅዕኖ",
            details: "በስልጠና እና በተደራጀ የሰው ኃይል አደረጃጀት የማዕድን ማህበረሰቦችን እንደግፋለን።",
          },
          {
            icon: "G",
            category: "አስተዳደር",
            details: "የተደራጀ ንብረት እንክብካቤ እና መደበኛ የገቢ መንገዶች ከኢትዮጵያ ብሔራዊ ባንክ ስርዓቶች ጋር ተያይዘው ይሰራሉ።",
          },
        ],
      },
      "/approach": {
        slug: "approach",
        title: "አቀራረብ",
        heading: "በውሂብ፣ በካርታ፣ በስርዓት እና በሰዎች ላይ የተመሠረተ አቀራረብ።",
        lead:
          "ARMADA Mining አርማዳ ማይኒንግ ዘመናዊ አሰራርን ከሰው ኃይል ስልጠና ጋር በማቀናጀት፣ የማዕድን ውሳኔዎች እና የተግባር ስራዎች ወጥ፣ ግልጽ እና ውጤታማ እንዲሆኑ ያደርጋል።",
        heroImage: heroImage3,
        detailImage: bodyImage2,
        primaryAction: { label: "ወደ አድራሻ ሂድ", path: "/contact" },
        secondaryAction: { label: "አቅሞችን ይመልከቱ", path: "/capabilities" },
        introTag: "የአሰራር ሞዴል",
        introHeading: "መረጃን ወደ ተግባር የምንቀይረው ግልጽ በሆነ የአሰራር ዘዴ ነው።",
        introBody:
          "አሰራራችን የሚጀምረው ዘርፉን በሚገባ በመረዳት ሲሆን፣ ያገኘነውን ዕውቀት ለዕቅድ እና ቡድኖች በቀላሉ ሊተገብሩት ለሚችሉ የዕለት ተዕለት ተግባራት እናውለዋለን።",
        cards: [
          {
            label: "01",
            title: "ጥራት ያላቸው መረጃዎችን መጠቀም",
            body: "ዕድሎችን እና የአሰራር ምርጫዎችን በትክክል ለመገምገም በመረጃዎች፣ በካርታዎች እና በተደራጁ ዕውቀቶች ላይ እንመሰረታለን።",
          },
          {
            label: "02",
            title: "ጠንካራ ቡድኖችን መገንባት",
            body: "ሰዎች በደህና፣ በወጥነት እና በግልፅ የስራ ምት እንዲሰሩ በማስተማር እና በማደራጀት በሰው ሀብት ላይ እንወዳድራለን።",
          },
          {
            label: "03",
            title: "በተጠና መንገድ መምራት",
            body: "የተደራጁ ሪፖርቶች እና ዘመናዊ አሰራሮች ግልጽነትን፣ ምርታማነትን እና የውሳኔ አሰጣጥ ጥራትን በጊዜ ሂደት እንዲሻሻሉ ይረዳሉ።",
          },
        ],
        visualQuote: "ጠንካራ አፈፃፀም ከጠንካራ መረጃ፣ ከጠንካራ ስርዓት እና አብረው ከሚሰሩ ጠንካራ ቡድኖች ይመጣል።",
        detailTag: "የአቀራረብ ዝርዝር",
        detailHeading: "የARMADA Mining አሰራር የሚመሩ ዋና ዋና መርሆዎች፦",
        details: [
          {
            number: "01",
            title: "የውሳኔ ጥራት",
            body: "ከስራ በፊትም ሆነ በስራ ወቅት የሚሰጡ ውሳኔዎች የተሻሉ እንዲሆኑ የተደራጁ መረጃዎችን እና ሪፖርቶችን እንጠቀማለን።",
          },
          {
            number: "02",
            title: "ወጥ የሆነ አሰራር",
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
        heroImage: heroImage4,
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
      "/privacy": {
        slug: "legal",
        title: "የግላዊነት ፖሊሲ",
        heading: "የግላዊነት ፖሊሲ",
        lead: "የእርስዎ ግላዊነት ለArmada Mining አስፈላጊ ነው። ይህ ፖሊሲ መረጃዎን እንዴት እንደምንሰበስብ፣ እንደምንጠቀም እና እንደምንጠብቅ ያብራራል።",
        introTag: "ህጋዊ",
        introHeading: "ለግላዊነት ያለን ቁርጠኝነት",
        introBody: "በArmada Mining የጎብኚዎቻችንን እና የደንበኞቻችንን ግላዊነት እና ደህንነት ለመጠበቅ ቆርጠን ተነስተናል። ይህ የግላዊነት ፖሊሲ የምንሰበስባቸውን የመረጃ አይነቶች፣ እንዴት እንደምንጠቀምባቸው እና የርስዎ ውሂብ የተጠበቀ መሆኑን ለማረጋገጥ የምንወስዳቸውን እርምጃዎች ይዘረዝራል።",
        sections: [
          {
            title: "1. የምንሰበስበው መረጃ",
            body: [
              "የእኛን የግንኙነት ፎርም ሲሞሉ ወይም ለዝማኔዎቻችን ሲመዘገቡ በቀጥታ የሚሰጡንን እንደ ስምዎ፣ የኢሜይል አድራሻዎ እና ስልክ ቁጥርዎ ያሉ የግል መረጃዎችን ልንሰበስብ እንችላለን።",
              "እንዲሁም የእኛን ድህረ ገጽ ሲጎበኙ አንዳንድ መረጃዎችን በራስ-ሰር እንሰበስባለን፤ ይህም የእርስዎን የአይፒ አድራሻ፣ የብሮውዘር አይነት፣ የኦፕሬቲንግ ሲስተም እና ስለ ድህረ ገጻችን አጠቃቀም በኩኪዎች እና መሰል ቴክኖሎጂዎች አማካኝነት የሚገኝ መረጃን ይጨምራል።"
            ]
          },
          {
            title: "2. መረጃዎን እንዴት እንደምንጠቀምበት",
            body: [
              "የምንሰበስበውን መረጃ አገልግሎቶቻችንን ለማቅረብ፣ ለመጠገን እና ለማሻሻል እንጠቀምበታለን፤ ይህም ለጥያቄዎችዎ ምላሽ መስጠትን እና ስለ ስራችን እና ስለ ኢትዮጵያ የማዕድን ዘርፍ ዝማኔዎችን ለእርስዎ ማቅረብን ይጨምራል።",
              "የእርስዎ መረጃ ድህረ ገጻችን እንዴት ጥቅም ላይ እንደሚውል እንድንረዳ ይረዳናል፣ ይህም የተጠቃሚውን ልምድ እንድናሻሽል እና ይዘታችንን ለእርስዎ ፍላጎት እንድንቀርጽ ያስችለናል።"
            ]
          },
          {
            title: "3. መረጃን ማጋራት እና ይፋ ማድረግ",
            body: [
              "በዚህ ፖሊሲ ውስጥ ከተገለጸው ወይም በህግ ከተጠየቀው በስተቀር የእርስዎን የግል መረጃ ያለእርስዎ ፍቃድ ለሶስተኛ ወገኖች አንሸጥም፣ አንለዋወጥም ወይም አናስተላልፍም።",
              "እነዚያ ወገኖች ይህንን መረጃ በሚስጥር ለመጠበቅ እስከተስማሙ ድረስ ድህረ ገጻችንን ለማንቀሳቀስ እና ንግዶቻችንን ለማካሄድ ከሚረዱን ታማኝ የአገልግሎት ሰጪዎች ጋር መረጃዎን ልናጋራ እንችላለን።"
            ]
          },
          {
            title: "4. የውሂብ ደህንነት",
            body: [
              "የግል መረጃዎን ደህንነት ለመጠበቅ የተለያዩ የደህንነት እርምጃዎችን እንተገብራለን። ሆኖም፣ በኢንተርኔት ላይ የሚደረግ ምንም አይነት የማስተላለፊያ ዘዴ ወይም የኤሌክትሮኒክስ ማከማቻ 100% አስተማማኝ አይደለም፣ እና ሙሉ ደህንነትን ማረጋገጥ አንችልም።"
            ]
          },
          {
            title: "5. የእርስዎ መብቶች",
            body: [
              "የግል መረጃዎን የማግኘት፣ የማረም ወይም የመሰረዝ መብት አለዎት። እነዚህን መብቶች ለመጠቀም ከፈለጉ እባክዎን በ admin@armadaeth.com ያግኙን።"
            ]
          },
          {
            title: "6. በዚህ ፖሊሲ ላይ የሚደረጉ ለውጦች",
            body: [
              "ይህንን የግላዊነት ፖሊሲ ከጊዜ ወደ ጊዜ ልናሻሽለው እንችላለን። ማንኛቸውም ለውጦች በዚህ ገጽ ላይ ከተሻሻለው ቀን ጋር ይለጠፋሉ።"
            ]
          }
        ]
      },
      "/terms": {
        slug: "legal",
        title: "የአጠቃቀም ደንቦች",
        heading: "የአጠቃቀም ደንቦች",
        lead: "እባክዎን የእኛን ድህረ ገጽ እና አገልግሎቶች ከመጠቀምዎ በፊት እነዚህን የአጠቃቀም ደንቦች በጥንቃቄ ያንብቡ።",
        introTag: "ህጋዊ",
        introHeading: "አጠቃላይ ደንቦች",
        introBody: "የArmada Mining ድህረ ገጽን በመጠቀም በእነዚህ የአጠቃቀም ደንቦች ለመገዛት ተስማምተዋል። በማንኛውም የነዚህ ደንቦች ክፍል ካልተስማሙ ድህረ ገጻችንን ማግኘት ወይም አገልግሎቶቻችንን መጠቀም አይችሉም።",
        sections: [
          {
            title: "1. ደንቦቹን መቀበል",
            body: [
              "የArmada Mining ድህረ ገጽ እና አገልግሎቶች አጠቃቀምዎ ለእነዚህ ደንቦች ባሎት ተገዢነት ላይ የተመሰረተ ነው። እነዚህ ደንቦች አገልግሎቱን ለሚጠቀሙ ወይም ለሚጎበኙ ሁሉ ተፈጻሚ ይሆናሉ።"
            ]
          },
          {
            title: "2. የአእምሮ ንብረት መብት",
            body: [
              "የድህረ ገጻችን ይዘት፣ ባህሪያት እና ተግባራት፤ ጽሁፎችን፣ ግራፊክስን፣ ሎጎዎችን እና ምስሎችን ጨምሮ የArmada Mining ብቸኛ ንብረት ናቸው እና በዓለም አቀፍ የቅጂ መብት፣ የንግድ ምልክት እና ሌሎች የአእምሮ ንብረት ህጎች የተጠበቁ ናቸው።",
              "ያለእኛ ግልጽ የጽሁፍ ፍቃድ የድህረ ገጻችንን የትኛውንም ክፍል ማባዛት፣ ማሰራጨት፣ ማሻሻል ወይም ተዋጽኦ ስራዎችን መስራት አይፈቀድም።"
            ]
          },
          {
            title: "3. የአገልግሎት አጠቃቀም",
            body: [
              "ድህረ ገጻችንን ለህጋዊ ዓላማዎች ብቻ እና የሌሎችን መብት በማይጥስ ወይም የሌሎችን አጠቃቀም በማያስተጓጉል መልኩ ለመጠቀም ተስማምተዋል።",
              "የተከለከሉ ባህሪያት ማንኛውንም ሰው ማዋከብ ወይም ስቃይ ወይም ችግር ማድረስ፣ ጸያፍ ወይም አፀያፊ ይዘትን ማስተላለፍ ወይም በጣቢያችን ውስጥ ያለውን መደበኛ የውይይት ፍሰት ማቋረጥን ይጨምራሉ።"
            ]
          },
          {
            title: "4. ማስተባበያ",
            body: [
              "በድህረ ገጻችን ላይ የቀረበው መረጃ ለአጠቃላይ መረጃ አገልግሎት ብቻ ነው። ለትክክለኛነቱ ጥረት ብናደርግም፣ በጣቢያው ላይ ስላለው መረጃ ምሉዕነት፣ ትክክለኛነት፣ አስተማማኝነት ወይም ተገኝነት ማንኛውንም አይነት ግልጽ ወይም ድምዳሜያዊ ዋስትና አንሰጥም።"
            ]
          },
          {
            title: "5. የተጠያቂነት ገደብ",
            body: [
              "Armada Mining በምንም አይነት ሁኔታ ድህረ ገጻችንን ወይም አገልግሎቶቻችንን በመጠቀምዎ ምክንያት ለሚመጣ ማንኛውም አይነት ቀጥተኛ ወይም ቀጥተኛ ያልሆነ ጉዳት ተጠያቂ አይሆንም።"
            ]
          },
          {
            title: "6. የሚገዛው ህግ",
            body: [
              "እነዚህ የአጠቃቀም ደንቦች በኢትዮጵያ ህጎች መሰረት የሚተረጎሙ እና የሚመሩ ይሆናሉ።"
            ]
          }
        ]
      },
      "/cookies": {
        slug: "legal",
        title: "የኩኪ ፖሊሲ",
        heading: "የኩኪ ፖሊሲ",
        lead: "ይህ ፖሊሲ Armada Mining በድህረ ገጻችን ላይ ያለዎትን ልምድ ለማሻሻል ኩኪዎችን እና መሰል ቴክኖሎጂዎችን እንዴት እንደሚጠቀም ያብራራል።",
        introTag: "ህጋዊ",
        introHeading: "ስለ ኩኪዎች መረዳት",
        introBody: "ኩኪዎች ድህረ ገጽ ሲጎበኙ በመሳሪያዎ ላይ የሚቀመጡ ትናንሽ የጽሁፍ ፋይሎች ናቸው። የእርስዎን ምርጫዎች እንድናስታውስ፣ ከጣቢያችን ጋር እንዴት እንደሚገናኙ እንድንረዳ እና አጠቃላይ የአሰሳ ተሞክሮዎን ለማሻሻል ይረዱናል።",
        sections: [
          {
            title: "1. ኩኪዎችን እንዴት እንደምንጠቀምባቸው",
            body: [
              "ኩኪዎችን ለተለያዩ ምክንያቶች እንጠቀማለን፤ ይህም ድህረ ገጻችን በትክክል እንዲሰራ ማድረግን፣ ጎብኚዎች ጣቢያችንን እንዴት እንደሚጠቀሙ መተንተንን እና የእርስዎን የቋንቋ ምርጫዎች እና ሌሎች ቅንብሮችን ማስታወስን ይጨምራል።",
              "አንዳንድ ኩኪዎች ለጣቢያችን አሠራር አስፈላጊ ሲሆኑ፣ ሌሎች ደግሞ ለአፈጻጸም እና ለተግባራዊነት ዓላማዎች ያገለግላሉ።"
            ]
          },
          {
            title: "2. የምንጠቀማቸው የኩኪ አይነቶች",
            body: [
              "አስፈላጊ ኩኪዎች፡ እነዚህ ለድህረ ገጹ መስራት አስፈላጊ ናቸው እና በእኛ ስርዓቶች ውስጥ ሊጠፉ አይችሉም።",
              "የአፈጻጸም ኩኪዎች፡ እነዚህ የጣቢያችንን አፈጻጸም ለመለካት እና ለማሻሻል እንድንችል ጉብኝቶችን እና የትራፊክ ምንጮችን ለመቁጠር ያስችሉናል።",
              "ተግባራዊ ኩኪዎች፡ እነዚህ ድህረ ገጹ የተሻሻለ ተግባር እና ግላዊነትን እንዲያቀርብ ያስችሉታል።"
            ]
          },
          {
            title: "3. ኩኪዎችዎን ማስተዳደር",
            body: [
              "አብዛኛዎቹ የድረ-ገጽ አሳሾች በቅንብሮቻቸው በኩል ኩኪዎችን እንዲቆጣጠሩ ያስችሉዎታል። ኩኪዎችን ለማገድ ወይም ለመሰረዝ መምረጥ ይችላሉ፣ ነገር ግን ይህ በአንዳንድ የድህረ ገጻችን ባህሪያት የመጠቀም ችሎታዎ ላይ ተጽዕኖ ሊያሳድር ይችላል።",
              "ስለ ኩኪዎች የበለጠ ለማወቅ፣ የትኞቹ ኩኪዎች እንደተቀመጡ እና እንዴት ማስተዳደር እና መሰረዝ እንደሚቻል ለማየት www.aboutcookies.org ወይም www.allaboutcookies.org ን ይጎብኙ።"
            ]
          }
        ]
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
