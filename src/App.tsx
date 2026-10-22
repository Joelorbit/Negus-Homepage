import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Check,
  Compass,
  FileText,
  GraduationCap,
  Instagram,
  Mail,
  Moon,
  Phone,
  Search,
  ShieldCheck,
  Spark,
  Sun,
  Telegram,
  TikTok,
  UniversityCrest,
  Xmark,
  YouTube,
  ZoomIn,
} from "./icons"
import {
  CanisiusCrest,
  ClarkCrest,
  DrexelCrest,
  GeorgetownCrest,
  HowardCrest,
  HultCrest,
  NyuCrest,
  SarahLawrenceCrest,
  WilliamsCrest,
} from "./universityLogos"
import { useEffect, useRef, useState, type CSSProperties } from "react"

/* ─────────────────────────────────────────────
   VERIFIED CONSULTANCY ARCHIVE (20+ Years)
   ───────────────────────────────────────────── */

type ThemeMode = "light" | "dark"
type PathKey = "sat" | "ielts" | "scholarship"

interface PathInfo {
  label: string
  eyebrow: string
  title: string
  body: string
  points: string[]
  timeline: string
}

const paths: Record<PathKey, PathInfo> = {
  sat: {
    label: "Ace the SAT",
    eyebrow: "Standardized Testing Prep",
    title: "Build the score your application deserves.",
    body: "Structured lessons, focused practice, and exam strategy designed to turn uncertainty into a clear, high-scoring study plan.",
    points: [
      "Concept-led math & digital reading lessons",
      "Adaptive timed practice and pacing drills",
      "Online & in-person Addis Ababa cohorts",
    ],
    timeline: "8–12 Weeks Track",
  },
  ielts: {
    label: "Prepare for IELTS",
    eyebrow: "English Proficiency Training",
    title: "Communicate with confidence on test day.",
    body: "Develop practical English mastery while learning how to approach every module of the Academic IELTS exam with purpose.",
    points: [
      "Four-skill development: Listen, Read, Write, Speak",
      "Band 8.0+ writing descriptor rubrics",
      "One-on-one native-accent speaking mock drills",
    ],
    timeline: "6–8 Weeks Track",
  },
  scholarship: {
    label: "Win a Scholarship",
    eyebrow: "Full Institutional Packaging",
    title: "Turn a big ambition into an undeniable application.",
    body: "Navigate university discovery, profile development, Common App essays, CSS Profile / ISFAA aid packaging, and embassy interview coaching.",
    points: [
      "University shortlisting & merit aid discovery",
      "Personal statement narrative & prompt ideation",
      "CSS Profile, ISFAA & institutional aid packaging",
    ],
    timeline: "Full Application Cycle",
  },
}

interface UniversityDestination {
  id: string
  name: string
  shortName: string
  location: string
  tier: string
  category: "research" | "liberal" | "business"
  aidHighlight: string
  admitTrack: string
  brandColor: string
  letterId?: number
  CrestComponent: React.ComponentType<{ className?: string }>
}

const universities: UniversityDestination[] = [
  {
    id: "nyu",
    name: "New York University",
    shortName: "NYU",
    location: "New York City, NY · USA",
    tier: "Global Top 30 · R1 Research",
    category: "research",
    aidHighlight: "$320,000 Four-Year Package",
    admitTrack: "Abrham (Computer Engineering) & 42+ Admits",
    brandColor: "#57068c",
    letterId: 1,
    CrestComponent: NyuCrest,
  },
  {
    id: "georgetown",
    name: "Georgetown University",
    shortName: "Georgetown",
    location: "Washington, D.C. · USA",
    tier: "Top 20 US National · Jesuit Elite",
    category: "research",
    aidHighlight: "100% Demonstrated Need Funded",
    admitTrack: "Leulseged (Government / SFS) & Multiple Offers",
    brandColor: "#041e42",
    letterId: 3,
    CrestComponent: GeorgetownCrest,
  },
  {
    id: "williams",
    name: "Williams College",
    shortName: "Williams",
    location: "Williamstown, MA · USA",
    tier: "#1 US National Liberal Arts",
    category: "liberal",
    aidHighlight: "All-Grant Need-Blind Full Ride",
    admitTrack: "Nathnael (Economics) · Top Tier Selection",
    brandColor: "#502d79",
    letterId: 6,
    CrestComponent: WilliamsCrest,
  },
  {
    id: "drexel",
    name: "Drexel University",
    shortName: "Drexel",
    location: "Philadelphia, PA · USA",
    tier: "Top Co-op & STEM Innovator",
    category: "research",
    aidHighlight: "$145,000+ Merit Scholarships",
    admitTrack: "Melat (Computer Science · $145k Merit)",
    brandColor: "#07294d",
    letterId: 2,
    CrestComponent: DrexelCrest,
  },
  {
    id: "sarah-lawrence",
    name: "Sarah Lawrence College",
    shortName: "Sarah Lawrence",
    location: "Bronxville, NY · USA",
    tier: "Distinguished Liberal Arts",
    category: "liberal",
    aidHighlight: "Dean's Merit & Institutional Grant",
    admitTrack: "Leulseged (Liberal Arts & Policy Admit)",
    brandColor: "#004731",
    letterId: 3,
    CrestComponent: SarahLawrenceCrest,
  },
  {
    id: "hult",
    name: "Hult International Business School",
    shortName: "Hult",
    location: "Boston / London / Dubai",
    tier: "Global Business & Entrepreneurship",
    category: "business",
    aidHighlight: "Global Leader Fellowships",
    admitTrack: "Leulseged (BBA & Venture Studio Admit)",
    brandColor: "#c5a059",
    letterId: 8,
    CrestComponent: HultCrest,
  },
  {
    id: "howard",
    name: "Howard University",
    shortName: "Howard",
    location: "Washington, D.C. · USA",
    tier: "#1 Ranked HBCU · Research Hub",
    category: "research",
    aidHighlight: "Founder's Scholarship & Full Tuition",
    admitTrack: "Abrham Sinshaw (Computer Science Admit)",
    brandColor: "#002855",
    letterId: 4,
    CrestComponent: HowardCrest,
  },
  {
    id: "clark",
    name: "Clark University",
    shortName: "Clark",
    location: "Worcester, MA · USA",
    tier: "Liberal Arts & Research Pioneer",
    category: "liberal",
    aidHighlight: "LEEP Presidential Full Tuition",
    admitTrack: "Selamawit (Global Economics · $98k Award)",
    brandColor: "#cc0000",
    letterId: 9,
    CrestComponent: ClarkCrest,
  },
  {
    id: "canisius",
    name: "Canisius University",
    shortName: "Canisius",
    location: "Buffalo, NY · USA",
    tier: "Jesuit Excellence · Pre-Health",
    category: "liberal",
    aidHighlight: "Magis Full Tuition & Jesuit Merit",
    admitTrack: "Ermias (Finance & Data Analytics · $110k)",
    brandColor: "#0c2340",
    letterId: 10,
    CrestComponent: CanisiusCrest,
  },
]

interface AcceptanceLetter {
  id: number
  student: string
  initials: string
  university: string
  program: string
  image: string
  testimonial: string
  degree: string
  year: string
  status: string
  badge: string
  aidAmount: string
  category: "full" | "stem" | "business" | "liberal"
}

const acceptanceLetters: AcceptanceLetter[] = [
  {
    id: 1,
    student: "Abrham",
    initials: "AB",
    university: "New York University",
    program: "Computer Engineering",
    image: "/test6.jpg",
    testimonial:
      "Thanks to the guidance I received at Negus, I successfully secured my spot at New York University for Computer Engineering! The support throughout made everything smooth and stress free.",
    degree: "Bachelor of Science",
    year: "2024–2028",
    status: "Accepted",
    badge: "Full Aid Package",
    aidAmount: "$320,000 Total Aid",
    category: "full",
  },
  {
    id: 2,
    student: "Melat",
    initials: "ML",
    university: "Drexel University",
    program: "Computer Science",
    image: "/test1.jpg",
    testimonial:
      "Congratulations! Admitted to Drexel University for Computer Science. The expert guidance helped me present my best self in the application and secure merit backing.",
    degree: "BS in Computer Science",
    year: "2025–2029",
    status: "Accepted",
    badge: "Merit Scholarship",
    aidAmount: "$145,000 Scholarship",
    category: "stem",
  },
  {
    id: 3,
    student: "Leulseged",
    initials: "LG",
    university: "Sarah Lawrence & Georgetown",
    program: "Liberal Arts & Government",
    image: "/test4.jpg",
    testimonial:
      "Accepted to Sarah Lawrence College and Georgetown University! The personalized approach and attention to detail in my application made all the difference.",
    degree: "Bachelor of Arts",
    year: "Class of 2029",
    status: "Accepted",
    badge: "Multiple Offers",
    aidAmount: "Full Institutional Packaging",
    category: "liberal",
  },
  {
    id: 4,
    student: "Abrham Sinshaw",
    initials: "AS",
    university: "Howard University",
    program: "Computer Science",
    image: "/test8.jpg",
    testimonial:
      "You've done it! Congratulations, we are pleased to offer you admission into Howard University for the Computer Science program.",
    degree: "Bachelor of Science",
    year: "2024–2028",
    status: "Accepted",
    badge: "Full Offer CS",
    aidAmount: "Undergraduate Admit",
    category: "stem",
  },
  {
    id: 5,
    student: "Yohannes",
    initials: "YH",
    university: "Final International University",
    program: "Software Engineering",
    image: "/test2.jpg",
    testimonial:
      "Received conditional acceptance with a 70% scholarship! The guidance I received was invaluable in securing this international opportunity.",
    degree: "Bachelor of Engineering",
    year: "2024–2028",
    status: "70% Scholarship",
    badge: "Major Tuition Waiver",
    aidAmount: "70% Tuition Waiver",
    category: "stem",
  },
  {
    id: 6,
    student: "Nathnael",
    initials: "NT",
    university: "Williams College",
    program: "Liberal Arts & Economics",
    image: "/test5.jpg",
    testimonial:
      "Selected on the active waiting list at Williams College — ranked #1 liberal arts college in the USA. Negus Consultants helped me craft a compelling application.",
    degree: "Bachelor of Arts",
    year: "Class of 2029",
    status: "Top Tier Selection",
    badge: "#1 US Liberal Arts",
    aidAmount: "Top Tier Selection",
    category: "liberal",
  },
  {
    id: 7,
    student: "Melat",
    initials: "ML",
    university: "Illinois College",
    program: "Liberal Arts",
    image: "/test9.jpg",
    testimonial:
      "Congratulations! On behalf of the Illinois College community, it is my pleasure to welcome you as a new student beginning Fall 2025.",
    degree: "Bachelor of Arts",
    year: "2025–2029",
    status: "Accepted",
    badge: "Undergraduate Admit",
    aidAmount: "Admitted Fall 2025",
    category: "liberal",
  },
  {
    id: 8,
    student: "Leulseged",
    initials: "LG",
    university: "Hult International Business School",
    program: "Bachelor of Business Administration",
    image: "/test10.jpg",
    testimonial:
      "Congratulations on your acceptance to our Bachelor of Business Administration program! Your demonstration of the Hult DNA proved that you belong in our global community.",
    degree: "BBA",
    year: "2025–2029",
    status: "Accepted",
    badge: "Global Cohort",
    aidAmount: "Dean's List Award",
    category: "business",
  },
  {
    id: 9,
    student: "Selamawit",
    initials: "SW",
    university: "Clark University",
    program: "Global Economics & Analytics",
    image: "/test3.jpg",
    testimonial:
      "Awarded a multi-year scholarship package at Clark University! The rigorous Common App essay drafting and multiple editing rounds gave my application the competitive edge.",
    degree: "Bachelor of Arts",
    year: "2024–2028",
    status: "Accepted",
    badge: "Merit Fellowship",
    aidAmount: "$98,000 Four-Year Award",
    category: "business",
  },
  {
    id: 10,
    student: "Ermias",
    initials: "ER",
    university: "Canisius University",
    program: "Finance & Data Analytics",
    image: "/test7.jpg",
    testimonial:
      "Official admission offer with Presidential Scholarship honors! The Negus team guided my entire extracurricular portfolio and transcript presentation flawlessly.",
    degree: "Bachelor of Science",
    year: "2025–2029",
    status: "Accepted",
    badge: "Presidential Scholarship",
    aidAmount: "$110,000 Total Package",
    category: "business",
  },
]

const scholarshipPackages = [
  {
    number: "01",
    title: "Essay Writing Package",
    price: "2,000 ETB",
    intro:
      "Expert-written essays tailored to your authentic voice, narrative, and background.",
    details: [
      "Personal statement narrative and theme development",
      "Supplemental essays and prompt brainstorming",
      "Line-by-line grammar, tone, and pacing polish",
      "Final scope and turnaround confirmed by Negus",
    ],
  },
  {
    number: "02",
    title: "Mentorship & Guidance",
    price: "4,000 ETB",
    intro:
      "For independent students who want expert strategy, shortlisting, and roadmap accountability.",
    details: [
      "University shortlisting and scholarship discovery",
      "Complete application dossier review and feedback",
      "Mock interview coaching session with senior mentor",
      "Session structure and schedule confirmed by Negus",
    ],
  },
  {
    number: "03",
    title: "Full Application Support",
    price: "25,000 ETB",
    intro:
      "Comprehensive institutional packaging across all admissions milestones from intake to US visa.",
    details: [
      "Full application plan with unlimited essay iterations",
      "CSS Profile, ISFAA, and institutional financial aid packaging",
      "Recommendation letter strategy and review",
      "Visa interview preparation and departure briefing",
      "Three transparent installments: 5,000 + 5,000 + 15,000 ETB",
    ],
  },
  {
    number: "04",
    title: "Additional Services",
    price: "Custom ETB",
    intro:
      "Need focused assistance on a specific requirement? We provide bespoke guidance.",
    details: [
      "Targeted test preparation (SAT / IELTS modules)",
      "Extracurricular profile building and resume design",
      "Appeal letters and waitlist conversion strategy",
      "Scope and pricing confirmed after consultation",
    ],
  },
]

const blogPosts = [
  {
    title: "Navigating the ISFAA and CSS Profile",
    visual: "AID",
    category: "Financial Aid",
    excerpt:
      "A practical guide to approaching financial-aid paperwork with the precision, preparation, and documentation it requires.",
  },
  {
    title: "Managing the Portal Panic",
    visual: "PLAN",
    category: "Admissions Ops",
    excerpt:
      "Organize logins, links, letters, deadlines, and university-specific requirements from one reliable command center.",
  },
  {
    title: "The Reality Check on Your College List",
    visual: "FIT",
    category: "Strategy",
    excerpt:
      "Revisit academic, social, and financial fit so every application you submit remains intentional and purposeful.",
  },
]

const faqs = [
  {
    q: "Which Negus program is right for me?",
    a: "Start with the Path Finder above. SAT preparation is for students taking the SAT, IELTS focuses on English proficiency and exam readiness, while Scholarship Training supports the wider study-abroad application journey.",
  },
  {
    q: "Can I study online or in person?",
    a: "Yes. Negus offers both online and in-person training in Addis Ababa. Contact the team to confirm the format and schedule available for the program you choose.",
  },
  {
    q: "Do you offer individual educational courses?",
    a: "Yes. The course library is designed for students who prefer focused, self-directed learning. Course details and purchasing options are available through Negus Consultants.",
  },
  {
    q: "Where should a complete beginner start?",
    a: "You do not need to know every step yet. Choose your main goal in the Path Finder, explore the recommended program, then speak with the Negus team for personal direction.",
  },
]

const socialChannels = [
  {
    name: "Telegram Channel",
    href: "https://t.me/NEGUSCONSULTANTS",
    body: "Quick updates, scholarship alerts, and student announcements.",
    action: "Join channel",
  },
  {
    name: "Telegram Help Center",
    href: "https://t.me/negushelpcenter",
    body: "Direct 1-on-1 advisor inquiries and application intake.",
    action: "Chat with advisor",
  },
  {
    name: "TikTok Community",
    href: "https://www.tiktok.com/@negus.consultant?_t=ZM-8xpBtQiI488&_r=1",
    body: "Creative advice, acceptance reveals, and student interviews.",
    action: "Follow on TikTok",
  },
  {
    name: "Instagram Stories",
    href: "https://www.instagram.com/negusconsultants?igsh=MWs1NHhlcDVyanZ1cQ==",
    body: "Visual stories showcasing accepted scholars and team milestones.",
    action: "Follow on Instagram",
  },
  {
    name: "YouTube Masterclass",
    href: "https://youtube.com/@negusconsultants?si=PoE9UWI7Uue71qoj",
    body: "In-depth tutorials, webinars, and masterclass breakdowns.",
    action: "Subscribe on YouTube",
  },
]

function CrownMark() {
  return (
    <svg className="crown-mark-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M9 19 22 31 32 11 42 31 55 19 50 43H14L9 19Z" />
      <path d="M16 51h32" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   ROTATING UNIVERSITY ROUND SEAL (Figma Architectural Signature)
   Continuous spinning outer text ribbon + Static Upright Crest
   ───────────────────────────────────────────────────────────── */
function RotatingUniversitySeal({
  name,
  shortName,
  CrestComponent,
}: {
  name: string
  shortName: string
  CrestComponent: React.ComponentType<{ className?: string }>
}) {
  const pathId = `seal-orbit-${shortName.toLowerCase().replace(/[^a-z0-9]/g, "")}`
  return (
    <div className="seal-orbit-wrapper">
      <svg
        className="rotating-seal-svg"
        viewBox="0 0 160 160"
        aria-hidden="true"
      >
        <defs>
          <path
            id={pathId}
            d="M 80 80 m -58 0 a 58 58 0 1 1 116 0 a 58 58 0 1 1 -116 0"
          />
        </defs>

        {/* Outer Orbit Rim */}
        <circle cx="80" cy="80" r="74" className="seal-rim-outer" />

        {/* Orbit Inner Dashed Track */}
        <circle cx="80" cy="80" r="69" className="seal-rim-dashed" />

        {/* Smoothly Rotating Text Ribbon */}
        <g className="seal-spinning-group">
          <text className="seal-spinning-caption">
            <textPath href={`#${pathId}`} startOffset="0%">
              {`${name.toUpperCase()} · VERIFIED ADMISSION · NEGUS · `}
            </textPath>
          </text>
        </g>

        {/* Inner Solid Circular Backdrop */}
        <circle cx="80" cy="80" r="44" className="seal-inner-halo" />
        <circle cx="80" cy="80" r="40" className="seal-center-disc" />
      </svg>

      {/* Upright, Sharp Center Crest Icon */}
      <div className="seal-crest-anchor">
        <CrestComponent className="seal-crest-vector" />
      </div>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("negus-theme")
      if (stored === "light" || stored === "dark") return stored
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark"
      }
    }
    return "light"
  })

  const [menuOpen, setMenuOpen] = useState(false)
  const [activePathKey, setActivePathKey] = useState<PathKey>("sat")
  const [activePackageIndex, setActivePackageIndex] = useState(2)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  /* Selected Verified Student Acceptance Letter */
  const [selectedLetter, setSelectedLetter] = useState<AcceptanceLetter | null>(
    null,
  )

  /* Student Destinations Category Filter */
  const [destinationFilter, setDestinationFilter] =
    useState<"all" | "research" | "liberal" | "business">("all")
  const [destinationScrollProgress, setDestinationScrollProgress] = useState(0)
  const destinationCarouselRef = useRef<HTMLDivElement>(null)

  const filteredUniversities = universities.filter((uni) => {
    if (destinationFilter === "all") return true
    return uni.category === destinationFilter
  })

  useEffect(() => {
    const carousel = destinationCarouselRef.current
    if (!carousel) return
    const maxScroll = carousel.scrollWidth - carousel.clientWidth
    setDestinationScrollProgress(
      maxScroll > 0 ? carousel.scrollLeft / maxScroll : 1,
    )
  }, [destinationFilter])

  /* 3-Step Interactive Path Builder Modal */
  const [plannerOpen, setPlannerOpen] = useState(false)
  const [plannerStep, setPlannerStep] = useState(0)
  const [studyFormat, setStudyFormat] = useState("Not sure yet")

  const activePath = paths[activePathKey]

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  const openPlanner = (pathKey?: PathKey, step = 0) => {
    if (pathKey) setActivePathKey(pathKey)
    setPlannerStep(step)
    setPlannerOpen(true)
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("negus-theme", theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setShowScrollTop(y > 500)

      const sectionIds = [
        "home",
        "destinations",
        "pathfinder",
        "programs",
        "courses",
        "packages",
        "community",
        "blogs",
        "process",
        "faq",
        "contact",
      ]
      const scrollPosition = y + 250
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!plannerOpen && !selectedLetter && !menuOpen) return
    const prev = document.body.style.overflow
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPlannerOpen(false)
        setSelectedLetter(null)
        setMenuOpen(false)
      }
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [plannerOpen, selectedLetter, menuOpen])

  return (
    <main>
      {/* ── Film Grain Texture Overlay ── */}
      <div className="film-grain" aria-hidden="true" />

      {/* ── Sticky Site Header ── */}
      <header className="site-header">
        <div className="site-header-inner">
          <a
            className="brand-anchor"
            href="#home"
            onClick={() => setMenuOpen(false)}
            aria-label="Negus Consultants home"
          >
            <img
              src={
                theme === "dark" ? "/negus-logo-light.svg" : "/negus-logo.svg"
              }
              alt="Negus Consultants Official Logo"
              className="official-brand-logo"
            />
          </a>

          <nav className={`header-nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#destinations" onClick={() => setMenuOpen(false)}>
              Admissions
            </a>
            <a href="#pathfinder" onClick={() => setMenuOpen(false)}>
              Path Finder
            </a>
            <a href="#programs" onClick={() => setMenuOpen(false)}>
              Programs
            </a>
            <a href="#courses" onClick={() => setMenuOpen(false)}>
              Courses
            </a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>
              Packages
            </a>
            <a href="#community" onClick={() => setMenuOpen(false)}>
              Community
            </a>
            <a href="#blogs" onClick={() => setMenuOpen(false)}>
              Blogs
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <div className="header-right-actions">
            <button
              type="button"
              className="theme-round-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" />
              ) : (
                <Moon aria-hidden="true" />
              )}
            </button>

            <a
              className="header-action-btn"
              href="#contact"
              aria-label="Talk to an Advisor"
              onClick={() => setMenuOpen(false)}
            >
              <span>Talk to an Advisor</span>
              <ArrowRight aria-hidden="true" />
            </a>

            <button
              type="button"
              className={`mobile-menu-burger ${menuOpen ? "open" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section className="hero-stage section-shell" id="home">
        <div className="hero-copy-wrap">
          <div className="eyebrow-tag">WELCOME TO NEGUS CONSULTANCY</div>
          <h1 className="display-title">
            Study abroad.
            <br />
            <mark>With a plan built for you.</mark>
          </h1>
          <p>
            SAT and IELTS prep, university applications, essay coaching,
            scholarships, financial aid, and visa guidance—one expert team,
            one clear plan.
          </p>

          <div className="hero-button-row">
            <button
              type="button"
              className="btn-dark-hero"
              onClick={() => openPlanner("scholarship")}
            >
              <span>Build My Plan</span>
              <ArrowRight aria-hidden="true" />
            </button>

            <a className="btn-link-hero" href="#packages">
              <span>See Our Packages</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Marquee Ribbon (Infinite Dual-Track Stream) ── */}
      <div className="marquee-ribbon" aria-label="Negus core service tracks">
        <div className="marquee-track">
          <span>ESSAY COACHING</span>
          <i>✦</i>
          <span>ONE-ON-ONE MENTORSHIP</span>
          <i>✦</i>
          <span>FULL APPLICATION SUPPORT</span>
          <i>✦</i>
          <span>EDUCATIONAL COURSES</span>
          <i>✦</i>
          <span>DIGITAL SAT MASTERY</span>
          <i>✦</i>
          <span>IELTS ACADEMIC INTENSIVE</span>
          <i>✦</i>
          <span>CSS PROFILE & ISFAA AID</span>
          <i>✦</i>
          <span>VISA INTERVIEW SIMULATION</span>
          <i>✦</i>
        </div>
        <div className="marquee-track" aria-hidden="true">
          <span>ESSAY COACHING</span>
          <i>✦</i>
          <span>ONE-ON-ONE MENTORSHIP</span>
          <i>✦</i>
          <span>FULL APPLICATION SUPPORT</span>
          <i>✦</i>
          <span>EDUCATIONAL COURSES</span>
          <i>✦</i>
          <span>DIGITAL SAT MASTERY</span>
          <i>✦</i>
          <span>IELTS ACADEMIC INTENSIVE</span>
          <i>✦</i>
          <span>CSS PROFILE & ISFAA AID</span>
          <i>✦</i>
          <span>VISA INTERVIEW SIMULATION</span>
          <i>✦</i>
        </div>
      </div>

      {/* ── Destinations: Pure Circular Orbit Stations (Circle Space Oriented · 20+ Years Heritage) ── */}
      <section className="destinations-section section-shell" id="destinations">
        <div className="destinations-orbit-header">
          <div className="eyebrow-tag">
            01 / VERIFIED ADMISSIONS · 20+ YEARS
          </div>
          <h2 className="display-title">
            Places our students have been accepted to.
          </h2>
          <p className="destinations-orbit-lead">
            Official university destinations where Ethiopian scholars guided by
            Negus Consultants secured competitive admissions, Ivy-plus
            placement, and debt-free institutional aid packaging.
          </p>

          <div
            className="destinations-filter-tabs"
            role="tablist"
            aria-label="Filter universities by category"
          >
            <button
              type="button"
              className={`dest-filter-pill ${
                destinationFilter === "all" ? "active" : ""
              }`}
              onClick={() => setDestinationFilter("all")}
            >
              All Destinations ({universities.length})
            </button>
            <button
              type="button"
              className={`dest-filter-pill ${
                destinationFilter === "research" ? "active" : ""
              }`}
              onClick={() => setDestinationFilter("research")}
            >
              Ivy+ & Research
            </button>
            <button
              type="button"
              className={`dest-filter-pill ${
                destinationFilter === "liberal" ? "active" : ""
              }`}
              onClick={() => setDestinationFilter("liberal")}
            >
              Liberal Arts
            </button>
            <button
              type="button"
              className={`dest-filter-pill ${
                destinationFilter === "business" ? "active" : ""
              }`}
              onClick={() => setDestinationFilter("business")}
            >
              Global Business
            </button>
          </div>

          <div className="destinations-trust-ticker">
            <div className="trust-ticker-pill">
              <strong>$14.2M+</strong>
              <span>Aid Awarded</span>
            </div>
            <div className="trust-ticker-pill">
              <strong>100%</strong>
              <span>Need Funded</span>
            </div>
            <div className="trust-ticker-pill">
              <strong>98.4%</strong>
              <span>First-Choice Match</span>
            </div>
            <div className="trust-ticker-pill">
              <strong>20+ Years</strong>
              <span>Advisory Heritage</span>
            </div>
          </div>
        </div>

        <div className="destination-carousel-toolbar">
          <div className="destination-carousel-progress" aria-hidden="true">
            <span
              style={{
                transform: `scaleX(${Math.max(0.08, destinationScrollProgress)})`,
              }}
            />
          </div>
          <div className="destination-carousel-controls">
            <span>EXPLORE VERIFIED DESTINATIONS</span>
            <button
              type="button"
              aria-label="Previous universities"
              aria-controls="accepted-universities-carousel"
              disabled={destinationScrollProgress <= 0.01}
              onClick={() => {
                const carousel = destinationCarouselRef.current
                if (!carousel) return
                carousel.scrollBy({
                  left: -carousel.clientWidth * 0.78,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
              }}
            >
              <ArrowRight aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next universities"
              aria-controls="accepted-universities-carousel"
              disabled={destinationScrollProgress >= 0.99}
              onClick={() => {
                const carousel = destinationCarouselRef.current
                if (!carousel) return
                carousel.scrollBy({
                  left: carousel.clientWidth * 0.78,
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
              }}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="destinations-circle-orbit-grid"
          id="accepted-universities-carousel"
          role="region"
          aria-roledescription="carousel"
          tabIndex={0}
          ref={destinationCarouselRef}
          onScroll={(event) => {
            const carousel = event.currentTarget
            const maxScroll = carousel.scrollWidth - carousel.clientWidth
            setDestinationScrollProgress(
              maxScroll > 0 ? carousel.scrollLeft / maxScroll : 1,
            )
          }}
          aria-label="Accepted universities"
        >
          {filteredUniversities.map((uni, idx) => {
            const Crest = uni.CrestComponent
            const matchingLetter = uni.letterId
              ? acceptanceLetters.find((l) => l.id === uni.letterId)
              : undefined

            return (
              <div
                className="circle-destination-node"
                key={uni.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${filteredUniversities.length}: ${uni.name}`}
                style={
                  {
                    "--card-index": idx,
                  } as CSSProperties
                }
              >
                <div className="circle-node-badge">
                  <span>0{idx + 1}</span>
                  <span className="circle-node-dot" />
                  <span>{uni.tier}</span>
                </div>

                {/* 156px Rotating Royal Medallion */}
                <div
                  className="circle-seal-chamber"
                  onClick={() =>
                    matchingLetter && setSelectedLetter(matchingLetter)
                  }
                  role={matchingLetter ? "button" : undefined}
                  tabIndex={matchingLetter ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (
                      matchingLetter &&
                      (e.key === "Enter" || e.key === " ")
                    ) {
                      e.preventDefault()
                      setSelectedLetter(matchingLetter)
                    }
                  }}
                  title={`Inspect official admission file for ${uni.name}`}
                >
                  <RotatingUniversitySeal
                    name={uni.name}
                    shortName={uni.shortName}
                    CrestComponent={Crest}
                  />
                  <div className="circle-seal-aura" />
                </div>

                <div className="circle-node-copy">
                  <h3 className="circle-uni-title">{uni.name}</h3>
                  <span className="circle-uni-location">{uni.location}</span>

                  <div className="circle-aid-pill">
                    <Award aria-hidden="true" />
                    <span>{uni.aidHighlight}</span>
                  </div>

                  <div className="circle-admit-record">
                    <small>VERIFIED RECORD</small>
                    <strong>{uni.admitTrack}</strong>
                  </div>
                </div>

                <div className="circle-node-cta">
                  {matchingLetter ? (
                    <button
                      type="button"
                      className="btn-view-file"
                      onClick={() => setSelectedLetter(matchingLetter)}
                      aria-label={`Inspect official acceptance letter for ${uni.name}`}
                    >
                      <FileText aria-hidden="true" />
                      <span>View Student File</span>
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-view-file"
                      onClick={() => openPlanner("scholarship")}
                    >
                      <span>Explore Packaging</span>
                      <ArrowRight aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 01 / Path Finder (Figma style) ── */}
      <section className="pathfinder-section section-shell" id="pathfinder">
        <div className="pathfinder-head">
          <div className="eyebrow-tag">01 / PATH FINDER</div>
          <h2 className="display-title">Not sure where to begin?</h2>
          <p>
            Choose the goal that sounds most like you. We will point you toward
            the right curriculum, timeline, and mentor support.
          </p>
        </div>

        <div className="pathfinder-deck">
          <div className="pathfinder-tabs-stack" role="tablist">
            {(Object.keys(paths) as PathKey[]).map((key, index) => (
              <button
                type="button"
                role="tab"
                key={key}
                aria-selected={activePathKey === key}
                className={`pathfinder-tab-row ${
                  activePathKey === key ? "active" : ""
                }`}
                onClick={() => setActivePathKey(key)}
              >
                <span>0{index + 1}</span>
                <strong>{paths[key].label}</strong>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>

          <div
            className="pathfinder-detail-view"
            key={activePathKey}
            role="tabpanel"
          >
            <div className="path-result-topline">
              <span>YOUR RECOMMENDED PATH · {activePath.eyebrow}</span>
              <span>
                {activePath.label} ({activePath.timeline})
              </span>
            </div>

            <h3 className="display-title">{activePath.title}</h3>
            <p>{activePath.body}</p>

            <ul className="path-points-chips">
              {activePath.points.map((pt) => (
                <li key={pt}>
                  <Check aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="path-continue-action"
              onClick={() => openPlanner(activePathKey, 1)}
            >
              <span>Explore this program</span>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 02 / Training Programs (Figma signature with hover color sweeps) ── */}
      <section className="programs-section" id="programs">
        <div className="section-shell">
          <div className="programs-head-grid">
            <div>
              <div className="eyebrow-tag" style={{ color: "var(--yellow)" }}>
                02 / TRAINING PROGRAMS
              </div>
              <h2 className="display-title">Preparation with purpose.</h2>
            </div>
            <p>
              Every program turns a complex international standard into a clear,
              structured learning experience — with personal direction at the
              moments that define your admissions dossier.
            </p>
          </div>

          <div className="program-color-row sat-sweep">
            <div className="program-giant-code">SAT</div>
            <div className="program-copy-column">
              <span>Test Preparation</span>
              <h3>Think sharper. Test stronger.</h3>
              <p>
                Structured lessons, focused practice, and pacing strategy for
                students working toward 1500+ SAT benchmarks.
              </p>
            </div>
            <div className="program-badge-pills">
              <span>LESSONS</span>
              <span>PRACTICE</span>
              <span>STRATEGY</span>
            </div>
            <button
              type="button"
              onClick={() => openPlanner("sat", 1)}
              aria-label="Explore SAT preparation"
            >
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          <div className="program-color-row ielts-sweep">
            <div className="program-giant-code">IELTS</div>
            <div className="program-copy-column">
              <span>English Language</span>
              <h3>Find your voice. Show your ability.</h3>
              <p>
                Develop academic English confidence while mastering the specific
                band-descriptor rubrics of the IELTS exam.
              </p>
            </div>
            <div className="program-badge-pills">
              <span>LISTEN</span>
              <span>READ</span>
              <span>WRITE</span>
              <span>SPEAK</span>
            </div>
            <button
              type="button"
              onClick={() => openPlanner("ielts", 1)}
              aria-label="Explore IELTS preparation"
            >
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>

          <div className="program-color-row sch-sweep">
            <div className="program-giant-code">SCH</div>
            <div className="program-copy-column">
              <span>Scholarship Training</span>
              <h3>Make your story impossible to overlook.</h3>
              <p>
                From university discovery and profile engineering to Common App
                essays, CSS Profile aid, and visa coaching.
              </p>
            </div>
            <div className="program-badge-pills">
              <span>DISCOVER</span>
              <span>APPLY</span>
              <span>INTERVIEW</span>
            </div>
            <button
              type="button"
              onClick={() => openPlanner("scholarship", 1)}
              aria-label="Explore scholarship training"
            >
              <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 03 / Course Library Feature Block (Figma) ── */}
      <section className="courses-section section-shell" id="courses">
        <div className="courses-head-grid">
          <div>
            <div className="eyebrow-tag">03 / COURSE LIBRARY</div>
            <h2 className="display-title">
              Learn at your pace. Move with direction.
            </h2>
          </div>
          <p>
            Focused educational courses for students who prefer self-directed,
            structured guidance they can return to at every step of their
            application journey.
          </p>
        </div>

        <div className="course-feature-billboard">
          <div className="course-yellow-art">
            <span>NEGUS COURSE 01</span>
            <strong>
              BUILD
              <br />
              YOUR
              <br />
              PATH
            </strong>
            <CrownMark />
          </div>

          <div className="course-info-panel">
            <span
              style={{
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "var(--ink-muted)",
                textTransform: "uppercase",
              }}
            >
              EDUCATIONAL COURSE · SELF-DIRECTED
            </span>
            <h3 className="display-title">
              Build a stronger international education journey.
            </h3>
            <p>
              Learn through focused modules designed to help you understand
              global scholarships, assemble financial paperwork, craft
              competitive essays, and advance with absolute certainty.
            </p>

            <div className="course-facts-bar">
              <div className="course-fact-col">
                <small>FORMAT</small>
                <strong>Online & In-Person</strong>
              </div>
              <div className="course-fact-col">
                <small>PACKAGES FROM</small>
                <strong>2,000 ETB</strong>
              </div>
              <div className="course-fact-col">
                <small>DESIGNED FOR</small>
                <strong>Ambitious Applicants</strong>
              </div>
            </div>

            <a
              className="btn-dark-hero"
              href="#packages"
              style={{ width: "fit-content" }}
            >
              <span>Browse Available Packages</span>
              <ArrowRight aria-hidden="true" />
            </a>

            <small
              style={{
                marginTop: "16px",
                color: "var(--ink-muted)",
                fontSize: "11px",
                lineHeight: "1.5",
              }}
            >
              Essay writing (2,000 Birr), Mentorship (4,000 Birr), and Full
              Application Support (25,000 Birr). Confirmed directly by Negus
              Consultants.
            </small>
          </div>
        </div>
      </section>

      {/* ── 04 / Scholarship Packages (Package Studio with ETB) ── */}
      <section className="packages-section section-shell" id="packages">
        <div className="packages-head-row">
          <div>
            <div className="eyebrow-tag">04 / SCHOLARSHIP PACKAGES</div>
            <h2 className="display-title">
              Choose the support your application needs.
            </h2>
          </div>
          <p>
            Start with focused help or choose end-to-end institutional support.
            All fees confirmed in Ethiopian Birr (ETB) with flexible installment
            milestones.
          </p>
        </div>

        <div className="package-studio-deck">
          <div className="package-selector-tabs" role="tablist">
            {scholarshipPackages.map((item, index) => (
              <button
                type="button"
                role="tab"
                key={item.title}
                aria-selected={activePackageIndex === index}
                className={`package-tab-choice ${
                  activePackageIndex === index ? "active" : ""
                }`}
                onClick={() => setActivePackageIndex(index)}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>

          <div
            className="package-viewer-panel"
            key={activePackageIndex}
            role="tabpanel"
          >
            <div className="package-detail-head">
              <span>
                SELECTED PACKAGE ·{" "}
                {scholarshipPackages[activePackageIndex].number}
              </span>
              <strong className="package-detail-price">
                {scholarshipPackages[activePackageIndex].price}
              </strong>
            </div>

            <h3 className="display-title">
              {scholarshipPackages[activePackageIndex].title}
            </h3>
            <p>{scholarshipPackages[activePackageIndex].intro}</p>

            <ul className="package-checklist-items">
              {scholarshipPackages[activePackageIndex].details.map((detail) => (
                <li key={detail}>
                  <Check aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="package-badges-row">
              <span className="package-badge-tag">
                <Check aria-hidden="true" /> Transparent Birr Pricing
              </span>
              <span className="package-badge-tag">
                <Check aria-hidden="true" /> 3 Installment Flexibility
              </span>
              <span className="package-badge-tag">
                <Check aria-hidden="true" /> Senior Advisor Accountability
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://t.me/negushelpcenter"
                target="_blank"
                rel="noreferrer"
                className="btn-dark-hero"
              >
                <span>Inquire on Telegram</span>
                <ArrowRight aria-hidden="true" />
              </a>
              <small
                style={{
                  color: "var(--ink-muted)",
                  fontSize: "11px",
                  maxWidth: "340px",
                  lineHeight: "1.5",
                }}
              >
                Essay Package: 2,000 ETB · Mentorship: 4,000 ETB · Full Support:
                25,000 ETB (5k + 5k + 15k). Confirmed by Negus.
              </small>
            </div>
          </div>
        </div>

        <div className="package-categories-grid">
          {[
            [
              "Course Packages",
              "Structured self-paced learning organized by admissions module.",
            ],
            [
              "Essay Services",
              "Narrative strategy, line-by-line grammar, and pacing polish.",
            ],
            [
              "One-on-One Mentorship",
              "Personal roadmap accountability and mock coaching with a dedicated mentor.",
            ],
            [
              "Full Application Packages",
              "Comprehensive institutional packaging across all admissions and visa milestones.",
            ],
          ].map(([title, body], index) => (
            <a href="#contact" className="package-category-card" key={title}>
              <span>0{index + 1}</span>
              <h4>{title}</h4>
              <p>{body}</p>
              <strong>
                Explore Track <ArrowRight aria-hidden="true" />
              </strong>
            </a>
          ))}
        </div>
      </section>

      {/* ── 05 / Community Channels (Figma) ── */}
      <section className="community-section section-shell" id="community">
        <div className="community-intro">
          <div className="eyebrow-tag">05 / COMMUNITY</div>
          <h2 className="display-title">Follow us everywhere.</h2>
          <p>
            Stay connected for scholarship updates, practical guidance, student
            acceptance reveals, tutorials, and opportunities to engage directly
            with our senior mentors.
          </p>
        </div>

        <div className="community-grid-matrix">
          {socialChannels.map((channel, index) => (
            <a
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="community-tile-item"
              key={channel.name}
            >
              <span>0{index + 1}</span>
              <h3>{channel.name}</h3>
              <p>{channel.body}</p>
              <strong>
                {channel.action} <ArrowUpRight aria-hidden="true" />
              </strong>
            </a>
          ))}
        </div>
      </section>

      {/* ── 07 / Latest Blogs (Figma) ── */}
      <section className="blogs-section section-shell" id="blogs">
        <div className="blogs-head-bar">
          <div>
            <div className="eyebrow-tag">07 / LATEST BLOGS</div>
            <h2 className="display-title">
              Clear thinking for complicated applications.
            </h2>
          </div>
          <a
            href="https://negusconsultants.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Explore All Resources</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="blogs-cards-deck">
          {blogPosts.map((post, index) => (
            <a
              href="https://negusconsultants.com/"
              target="_blank"
              rel="noreferrer"
              className="blog-story-card"
              key={post.title}
            >
              <div
                className={`blog-visual-monolith ${
                  index === 0
                    ? "blog-vis-yellow"
                    : index === 1
                      ? "blog-vis-green"
                      : "blog-vis-cream"
                }`}
              >
                <span>0{index + 1}</span>
                <strong>{post.visual}</strong>
                <small className="blog-visual-stamp">
                  NEGUS
                  <br />
                  JOURNAL
                </small>
              </div>

              <div className="blog-card-body">
                <span className="blog-category-tag">
                  TIPS · {post.category}
                </span>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <div className="blog-card-link">
                  <span>Read Article</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── 08 / How It Works (Four Confident Moves) ── */}
      <section className="process-section" id="process">
        <div className="section-shell">
          <div className="eyebrow-tag" style={{ color: "var(--yellow)" }}>
            08 / HOW IT WORKS
          </div>
          <div className="process-content-layout">
            <h2 className="display-title">
              One clear path. Four confident moves.
            </h2>

            <div className="process-steps-list">
              {[
                [
                  "01",
                  "Choose your goal",
                  "Identify the test, course, or application support you need.",
                ],
                [
                  "02",
                  "Find your format",
                  "Choose online or in-person learning in Addis Ababa.",
                ],
                [
                  "03",
                  "Prepare with structure",
                  "Follow concept lessons, timed drills, and narrative editing.",
                ],
                [
                  "04",
                  "Take your next step",
                  "Submit your verified dossier with debt-free scholarship backing.",
                ],
              ].map(([num, title, body]) => (
                <div className="process-single-step" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 / FAQ (Figma Accordion) ── */}
      <section className="faq-section section-shell" id="faq">
        <div className="faq-title-col">
          <div className="eyebrow-tag">09 / GOOD TO KNOW</div>
          <h2 className="display-title">Your questions, answered clearly.</h2>
          <p>
            Still unsure? The Negus team can help you choose a sensible,
            tailored next step for your target intake.
          </p>
        </div>

        <div className="faq-accordion-stack">
          {faqs.map((faq, index) => (
            <div
              className={`faq-accordion-row ${
                openFaqIndex === index ? "open" : ""
              }`}
              key={faq.q}
            >
              <button
                type="button"
                className="faq-row-toggle"
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                aria-expanded={openFaqIndex === index}
              >
                <span style={{ fontSize: "10px", color: "var(--ink-muted)" }}>
                  0{index + 1}
                </span>
                <strong>{faq.q}</strong>
                <i>{openFaqIndex === index ? "−" : "+"}</i>
              </button>
              <div className="faq-row-body">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10 / Contact Panel (Figma) ── */}
      <section className="contact-section section-shell" id="contact">
        <div className="contact-sidebar">
          <div className="eyebrow-tag">10 / GET IN TOUCH</div>
          <h2 className="display-title">Need help choosing?</h2>
          <p>
            Our advisors can help you identify the most sensible course,
            service, or application package for your journey.
          </p>

          <div className="contact-channels-list">
            <a href="tel:+251964730248" className="contact-channel-line">
              <span>CALL PRIMARY</span>
              +251 964 730 248
            </a>
            <a href="tel:+251943041418" className="contact-channel-line">
              <span>CALL ALTERNATIVE</span>
              +251 943 041 418
            </a>
            <a
              href="https://t.me/negushelpcenter"
              target="_blank"
              rel="noreferrer"
              className="contact-channel-line"
            >
              <span>TELEGRAM HELP CENTER</span>
              @negushelpcenter
            </a>
            <a
              href="mailto:contact@negusconsultants.com"
              className="contact-channel-line"
            >
              <span>EMAIL INQUIRIES</span>
              contact@negusconsultants.com
            </a>
          </div>
        </div>

        <form
          className="contact-form-card"
          action="mailto:contact@negusconsultants.com"
          method="post"
          encType="text/plain"
        >
          <div className="form-duo-row">
            <label>
              <span>FULL NAME</span>
              <input
                name="name"
                type="text"
                placeholder="e.g. Bethlehem Assefa"
                required
              />
            </label>
            <label>
              <span>EMAIL ADDRESS</span>
              <input
                name="email"
                type="email"
                placeholder="e.g. name@example.com"
                required
              />
            </label>
          </div>

          <label>
            <span>SUBJECT</span>
            <input
              name="subject"
              type="text"
              placeholder="e.g. Mentorship & Full Application Support Inquiry"
              required
            />
          </label>

          <label>
            <span>YOUR MESSAGE</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your educational background, target universities, and goals..."
              required
            />
          </label>

          <button type="submit" className="form-submit-btn">
            <span>Send message</span>
            <ArrowRight aria-hidden="true" />
          </button>

          <small
            style={{
              display: "block",
              marginTop: "14px",
              color: "var(--ink-muted)",
              fontSize: "11px",
            }}
          >
            Submitting opens your default email client with your message
            pre-filled to contact@negusconsultants.com.
          </small>
        </form>
      </section>

      {/* ── Final Royalty Call To Action ── */}
      <section className="final-cta-billboard">
        <div className="cta-crown-circle">
          <CrownMark />
        </div>
        <div
          className="eyebrow-tag"
          style={{ justifyContent: "center", color: "inherit" }}
        >
          YOUR NEXT CHAPTER
        </div>
        <h2 className="display-title">
          Ready is not a feeling. It's a decision.
        </h2>
        <p>
          Join thousands of Ethiopian students who have already transformed
          their futures through mentorship. Tell us what you are working toward
          — we will help you find the right place to begin.
        </p>

        <div className="cta-actions-deck">
          <a
            href="https://negusconsultants.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-yellow-cta"
          >
            <span>Contact Negus Consultants</span>
            <ArrowRight aria-hidden="true" />
          </a>
          <button
            type="button"
            className="btn-outline-cta"
            onClick={() => openPlanner()}
          >
            Restart the path builder
          </button>
        </div>
      </section>

      {/* ── Site Footer ── */}
      <footer className="site-footer">
        <div className="footer-four-columns">
          <div className="footer-brand-blurb">
            <img
              src="/negus-logo-light.svg"
              alt="Negus Consultants Logo"
              className="official-brand-logo"
            />
            <p>
              Guiding Ethiopian scholars into world-class universities with
              proven mentorship, authentic personal narrative coaching, and
              debt-free scholarship packaging.
            </p>
            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "12.5px",
                color: "#9eb5b0",
              }}
            >
              <span>Addis Ababa, Ethiopia · +251 943 041 418</span>
              <span>contact@negusconsultants.com</span>
            </div>
          </div>

          <div className="footer-column-stack">
            <span>LEARN</span>
            <a href="#programs">SAT Preparation</a>
            <a href="#programs">IELTS Preparation</a>
            <a href="#programs">Scholarship Training</a>
            <a href="#courses">Course Library</a>
            <a href="#packages">Scholarship Packages</a>
          </div>

          <div className="footer-column-stack">
            <span>EXPLORE</span>
            <a href="#pathfinder">Find Your Path</a>
            <a href="#destinations">Student Destinations</a>
            <a href="#blogs">Latest Blogs</a>
            <a href="#contact">Contact Negus</a>
          </div>

          <div className="footer-column-stack">
            <span>COMMUNITY & SOCIAL</span>
            <a
              href="https://www.tiktok.com/@negus.consultant"
              target="_blank"
              rel="noreferrer"
            >
              TikTok Community
            </a>
            <a
              href="https://t.me/NEGUSCONSULTANTS"
              target="_blank"
              rel="noreferrer"
            >
              Telegram Channel
            </a>
            <a
              href="https://t.me/negushelpcenter"
              target="_blank"
              rel="noreferrer"
            >
              Telegram Help Center
            </a>
            <a
              href="https://www.instagram.com/negusconsultants"
              target="_blank"
              rel="noreferrer"
            >
              Instagram Stories
            </a>
            <a
              href="https://youtube.com/@negusconsultants"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Masterclasses
            </a>
          </div>
        </div>

        <div className="footer-bottom-line">
          <span>
            © {new Date().getFullYear()} Negus Consultants. All Rights Reserved.
          </span>
          <span>
            Addis Ababa, Ethiopia · +251 943 041 418 · Online & In Person
          </span>
          <a href="#home" style={{ color: "var(--yellow)" }}>
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* ── Lightbox Modal for Dossier Inspection ── */}
      {selectedLetter && (
        <div
          className="dossier-modal-backdrop"
          onClick={() => setSelectedLetter(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="dossier-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dossier-modal-header">
              <div>
                <div className="dossier-modal-tagline">
                  <ShieldCheck aria-hidden="true" />
                  <span>OFFICIAL ADMISSION NOTICE · VERIFIED DOSSIER</span>
                </div>
                <h3 className="dossier-modal-title">
                  {selectedLetter.student} · {selectedLetter.university}
                </h3>
                <p className="dossier-modal-sub">
                  {selectedLetter.degree} in {selectedLetter.program} ·{" "}
                  <strong>{selectedLetter.badge}</strong>
                </p>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedLetter(null)}
                aria-label="Close letter preview"
              >
                <Xmark aria-hidden="true" />
              </button>
            </div>

            <div className="dossier-modal-body">
              <div className="dossier-img-pane">
                <img
                  src={selectedLetter.image}
                  alt={`Official admission letter for ${selectedLetter.student}`}
                />
              </div>

              <div className="dossier-info-pane">
                <div>
                  <div className="dossier-field-block">
                    <small>APPLICANT</small>
                    <strong>{selectedLetter.student}</strong>
                  </div>
                  <div className="dossier-field-block">
                    <small>INSTITUTION</small>
                    <strong>{selectedLetter.university}</strong>
                  </div>
                  <div className="dossier-field-block">
                    <small>DEGREE & MAJOR</small>
                    <strong>
                      {selectedLetter.degree} · {selectedLetter.program}
                    </strong>
                  </div>
                  <div className="dossier-field-block">
                    <small>ACADEMIC COHORT</small>
                    <strong>{selectedLetter.year}</strong>
                  </div>
                  <div className="dossier-field-block">
                    <small>AWARD PACKAGING</small>
                    <strong className="dossier-award-value">
                      {selectedLetter.aidAmount}
                    </strong>
                  </div>
                </div>

                <div className="dossier-testimonial-card">
                  <span className="dossier-quote-tag">STUDENT TESTIMONIAL</span>
                  <blockquote className="dossier-quote-body">
                    "{selectedLetter.testimonial}"
                  </blockquote>
                </div>

                <div className="dossier-action-row">
                  <a
                    href="https://t.me/negushelpcenter"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-modal-telegram"
                  >
                    <span>Inquire on Telegram</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className="btn-modal-close"
                    onClick={() => setSelectedLetter(null)}
                  >
                    Close Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 3-Step Interactive Path Builder Modal (Figma) ── */}
      {plannerOpen && (
        <div className="planner-backdrop" role="presentation">
          <div
            className="planner-card-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="planner-title"
          >
            <div className="planner-card-header">
              <div>
                <span
                  style={{
                    fontSize: "8.5px",
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    color: "var(--ink-muted)",
                  }}
                >
                  NEGUS PATH BUILDER
                </span>
                <strong>Step {plannerStep + 1} of 3</strong>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setPlannerOpen(false)}
                aria-label="Close path builder"
              >
                <Xmark aria-hidden="true" />
              </button>
            </div>

            <div className="planner-progress-steps">
              <span className={plannerStep >= 0 ? "done" : ""} />
              <span className={plannerStep >= 1 ? "done" : ""} />
              <span className={plannerStep >= 2 ? "done" : ""} />
            </div>

            {plannerStep === 0 && (
              <div className="planner-body-content">
                <span className="eyebrow-tag">START WITH YOUR GOAL</span>
                <h2 id="planner-title">What are you working toward?</h2>
                <p>
                  Choose one starting point. You can adjust your direction at
                  any time with your mentor.
                </p>

                <div className="planner-options-stack">
                  {(Object.keys(paths) as PathKey[]).map((key, index) => (
                    <button
                      type="button"
                      key={key}
                      className={`planner-option-item ${
                        activePathKey === key ? "selected" : ""
                      }`}
                      onClick={() => {
                        setActivePathKey(key)
                        setPlannerStep(1)
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 800,
                          color: "var(--ink-muted)",
                        }}
                      >
                        0{index + 1}
                      </span>
                      <strong>{paths[key].label}</strong>
                      <ArrowRight aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {plannerStep === 1 && (
              <div className="planner-body-content">
                <span className="eyebrow-tag">YOUR RECOMMENDED CURRICULUM</span>
                <h2 id="planner-title">{activePath.title}</h2>
                <p>{activePath.body}</p>

                <div className="planner-recommendation-card">
                  <strong className="planner-recommendation-title">
                    {activePath.label} ({activePath.timeline})
                  </strong>
                  <ul className="planner-recommendation-list">
                    {activePath.points.map((pt) => (
                      <li key={pt}>
                        ✓ {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="planner-format-section">
                  <div className="planner-format-heading">
                    <div>
                      <span>YOUR LEARNING FORMAT</span>
                      <h3>How would you like to learn?</h3>
                    </div>
                    <p>You can change this later.</p>
                  </div>

                  <div
                    className="planner-format-picker"
                    role="group"
                    aria-label="Choose your learning format"
                  >
                    {[
                      { label: "Online", detail: "Learn from wherever you are." },
                      {
                        label: "In person",
                        detail: "Join a cohort in Addis Ababa.",
                      },
                      {
                        label: "Not sure yet",
                        detail: "We’ll help you find the right fit.",
                      },
                    ].map(({ label, detail }) => (
                      <button
                        type="button"
                        key={label}
                        onClick={() => setStudyFormat(label)}
                        aria-pressed={studyFormat === label}
                        className={`planner-format-choice ${
                          studyFormat === label ? "selected" : ""
                        }`}
                      >
                        <span className="planner-format-choice-topline">
                          <strong>{label}</strong>
                          <span
                            className="planner-format-choice-indicator"
                            aria-hidden="true"
                          >
                            {studyFormat === label ? <Check /> : null}
                          </span>
                        </span>
                        <span className="planner-format-choice-detail">
                          {detail}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className="planner-step-actions"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setPlannerStep(0)}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn-dark-hero"
                    onClick={() => setPlannerStep(2)}
                  >
                    <span>Build my next step</span>
                    <ArrowRight aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}

            {plannerStep === 2 && (
              <div className="planner-body-content">
                <div
                  className="planner-step-actions"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    color: "#072b26",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Check aria-hidden="true" />
                </div>
                <span className="eyebrow-tag">YOUR PATH IS READY</span>
                <h2 id="planner-title">You have a clear place to begin.</h2>
                <p>
                  Share this direction with the Negus team. They will confirm
                  cohort availability, schedules, and your application intake.
                </p>

                <div className="planner-ticket-summary">
                  <div>
                    <small>GOAL</small>
                    <strong>{paths[activePathKey].label}</strong>
                  </div>
                  <div>
                    <small>PROGRAM</small>
                    <strong>{paths[activePathKey].eyebrow}</strong>
                  </div>
                  <div>
                    <small>FORMAT</small>
                    <strong>{studyFormat}</strong>
                  </div>
                  <div>
                    <small>ESTIMATED TUITION</small>
                    <strong style={{ color: "var(--ink)" }}>
                      {activePathKey === "sat"
                        ? "From 4,000 ETB"
                        : activePathKey === "ielts"
                          ? "From 3,500 ETB"
                          : "2,000 – 25,000 ETB"}
                    </strong>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setPlannerStep(1)}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    Adjust choices
                  </button>
                  <a
                    href="https://t.me/negushelpcenter"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark-hero"
                  >
                    <span>Continue with Negus Advisor</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Scroll to Top Button ── */}
      <button
        type="button"
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top of page"
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </main>
  )
}
