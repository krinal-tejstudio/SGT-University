import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Beaker, Cpu, Stethoscope, Scale, Briefcase,
  ArrowUpRight, Calendar, Sparkles, FileText, FlaskConical, Handshake, Search, ChevronDown,
  Leaf, Brain,
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import ctaCampus from "@/assets/cta-campus.jpg";
import { PageHero } from "@/components/page-hero";
import { StatStrip } from "@/components/stat-strip";
import { SectionHeading } from "@/components/section-heading";
import paper from "@/assets/paper.avif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGT University (SGTU) — Gurugram, Haryana & Delhi NCR" },
      { name: "description", content: "Shree Guru Gobind Singh Tricentenary University (SGT University): NAAC A+ accredited, 19 faculties, programmes from diploma to Ph.D. Official information at sgtuniversity.ac.in." },
      { property: "og:title", content: "SGT University — Shree Guru Gobind Singh Tricentenary University" },
      { property: "og:description", content: "Study at SGT University, Gurugram — medicine, engineering, law, design, agriculture, allied health and more. Explore programmes and admissions." },
    ],
  }),
  component: HomePage,
});

/** Faculty names and one-line descriptions aligned with sgtuniversity.ac.in */
const SCHOOLS = [
  {
    icon: Leaf,
    name: "Faculty of Agricultural Sciences",
    desc: "Competitive human capital for a changing sector—courses aligned with national regulations and standards.",
  },
  {
    icon: Brain,
    name: "School of Behavioural Sciences",
    desc: "Advanced clinical training in psychology and counselling to meet mental health needs in the community and country.",
  },
  {
    icon: Briefcase,
    name: "School of Commerce & Management",
    desc: "Skilled, socially responsible managers for global business—grounded in Indian knowledge, wisdom and consciousness.",
  },
  {
    icon: Cpu,
    name: "Faculty of Engineering & Technology",
    desc: "Skilled engineers in disruptive technologies—with Centres of Excellence that deepen hands-on learning.",
  },
  {
    icon: Stethoscope,
    name: "Faculty of Medicine & Health Sciences",
    desc: "Job-oriented courses led by senior medical faculty, with affordable care and a large multispecialty hospital.",
  },
  {
    icon: Scale,
    name: "Faculty of Law",
    desc: "Professional legal education for transnational practice and the challenges of globalisation.",
  },
];

const RESEARCH_PILLARS = [
  { icon: Beaker, t: "Research & innovation", d: "Institutional priorities and support" },
  { icon: FileText, t: "Publications", d: "Research output and dissemination" },
  { icon: FlaskConical, t: "Projects & labs", d: "Funded research and facilities" },
  { icon: Stethoscope, t: "Clinical research", d: "Hospital-linked healthcare studies" },
  { icon: Handshake, t: "Collaborations", d: "Industry and global partnerships" },
];

const OFFICIAL = "https://sgtuniversity.ac.in";

const NEWS = [
  {
    tag: "Campus",
    date: "2026",
    title: "From Job Seekers to Job Creators: Union Budget Conclave 2026 on Viksit Bharat@2047",
    excerpt: "What will it take for India to become a high-income economy by 2047—and how can today’s youth contribute?",
  },
  {
    tag: "Convocation",
    date: "2026",
    title: "Special Convocation confers honorary doctorates on Haryana Health Minister Ms. Aarti Singh Rao and Padma Shri Bimal Kumar Jain",
    excerpt: "SGT University, Gurugram, honoured exceptional individuals whose work has shaped public life, service and leadership.",
  },
  {
    tag: "Scholarships",
    date: "2026",
    title: "Scholarship Distribution Ceremony supports meritorious students",
    excerpt: "The Scholars’ Council recognised deserving students, reaffirming the university’s commitment to academic excellence and access.",
  },
];

function HomePage() {
  return (
    <section className="relative">
      <div className="sticky top-0 z-10">
        <PageHero
          eyebrow="Shree Guru Gobind Singh Tricentenary University (SGTU)"
          title={<>From here, <em className="not-italic text-gold">you can</em> change tomorrow.</>}
          subtitle="A NAAC A+ institution on Gurgaon–Badli Road, Budhera, Gurugram—empowering students through 19 faculties, from diploma and undergraduate study to Ph.D."
          image={heroHome}
          ctaPrimary={{ label: "Explore Programs", to: "/academics" }}
          ctaSecondary={{ label: "About the University", to: "/about" }}
          height="tall"
        />
      </div>

      <div className="bg-white relative z-10">
        {/* Find your program — dark band directly under hero */}
        <section className="gradient-hero text-primary-foreground relative z-10 mt-5">
          <div className="absolute z-10 top-0 left-0 w-full h-[10%] md:h-[20%] translate-y-[-30%] flex items-center justify-center">
            <img 
              src={paper} 
              alt="" 
              className="w-full h-full object-cover object-center lg:object-fill" 
              style={{ filter: "brightness(1.2)" }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-16 lg:pt-32 pb-16 lg:pb-24">
            <h2 className="text-left font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Find Your Program
            </h2>
            <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
              <div className="relative min-w-0 lg:w-[200px]">
                <select
                  aria-label="Program level"
                  className="h-full w-full cursor-pointer appearance-none rounded-md border border-white/25 bg-white py-3.5 pl-4 pr-10 text-sm font-medium text-primary shadow-sm"
                >
                  <option>Program level</option>
                  <option>Diploma</option>
                  <option>Graduate (UG)</option>
                  <option>Post Graduate</option>
                  <option>PhD</option>
                  
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" aria-hidden />
              </div>
              <div className="relative min-w-0 lg:w-[200px]">
                <select
                  aria-label="Discipline"
                  className="h-full w-full cursor-pointer appearance-none rounded-md border border-white/25 bg-white py-3.5 pl-4 pr-10 text-sm font-medium text-primary shadow-sm"
                >
                  <option>All disciplines</option>
                  <option>MBBS / BAMS / BDS</option>
                  <option>MD / MS / MDS</option>
                  <option>B.Tech / BBA / BCA</option>
                  <option>Law (BA LL.B / LLB / LLM)</option>
                  <option>Agriculture / Behavioural Sciences</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" aria-hidden />
              </div>
              <div className="flex min-w-0 flex-1 overflow-hidden rounded-md border border-white/25 bg-white shadow-sm">
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
                  placeholder="Search programs…"
                  type="search"
                />
                <button
                  type="button"
                  aria-label="Search programs"
                  className="grid shrink-0 place-items-center bg-primary px-5 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              <span className="text-white/70">Popular Searches: </span>
              {["BDS", "MBBS", "B.Tech", "Law", "AI & Data Science", "Nursing"].map((t, i) => (
                <span key={t}>
                  {i > 0 ? ", " : null}
                  <button type="button" className="font-medium text-white underline-offset-4 transition-colors hover:text-white hover:underline">
                    {t}
                  </button>
                </span>
              ))}
            </p>
          </div>
        </section>

        <div className="pt-32 pb-24">
          <StatStrip />
        </div>

        {/* Youth fest banner */}
        <section className="relative z-10 py-24 bg-[url('@/assets/first-img.jpeg')] bg-cover bg-center bg-no-repeat">

        <div className="absolute z-10 top-0 left-0 w-full h-[10%] md:h-[15%] translate-y-[-30%] flex items-center justify-center">
          <img 
            src={paper} 
            alt="" 
            className="w-full h-full object-cover object-center lg:object-fill" 
            style={{ filter: "brightness(1.2)" }}
          />
        </div>
  
          {/* Sky blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-sky-200/80 sm:from-sky-200/90 sm:via-sky-100/90 to-sky-100/50 sm:to-transparent h-full w-full sm:w-[70%]" />

          {/* Content */}
          <div className="relative z-20 grid lg:grid-cols-[1fr_1fr] mx-auto max-w-7xl">
            <div className="p-10 lg:p-14">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Synergy 2026
              </span>

              <h3 className="mt-5 font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl">
                Campus buzz: events, culture and student life.
              </h3>

              <p className="mt-4 max-w-md text-muted-foreground">
                Follow flagship celebrations like Synergy alongside sports, festivals and guest experiences on campus—as showcased on the official SGT University website.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore Event
              </Link>
            </div>
          </div>
        </section>

        {/* Admissions Open 2026 banner */}
        <section className="relative z-10 py-24 bg-[url('@/assets/second-img.jpeg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute z-10 top-0 left-0 w-full h-[10%] md:h-[15%] translate-y-[-30%] flex items-center justify-center">
            <img 
              src={paper} 
              alt="" 
              className="w-full h-full object-cover object-center lg:object-fill -scale-x-100" 
              style={{ filter: "brightness(1.2)" }}
            />
          </div>
  
          {/* Sky blue gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent h-full w-full sm:w-[80%]" 
          />

          {/* Content */}
          <div className="relative z-20 grid lg:grid-cols-[1fr_1fr] mx-auto max-w-7xl">
            <div className="p-10 lg:p-14">
                <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                  Admission 2026–27
                </span>
                <h3 className="mt-5 font-display text-4xl leading-tight text-balance text-white sm:text-5xl">
                  Take the first step towards a successful future.
                </h3>
                <Link to="/admissions" className="mt-7 inline-flex rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5">
                  Apply Now
                </Link>
            </div>
          </div>

          <div className="absolute z-10 bottom-0 left-0 w-full h-[10%] md:h-[15%] translate-y-[70%] flex items-center justify-center">
            <img 
              src={paper} 
              alt="" 
              className="w-full h-full object-cover object-center lg:object-fill" 
              style={{ filter: "brightness(1.2)" }}
            />
          </div>
        </section>

        {/* Academic schools */}
        <section className="bg-secondary py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Faculties & schools"
              title="Multiple disciplines, infinite possibilities."
              subtitle="With 19 dynamic faculties, SGT University empowers students with endless opportunities—from allied health and dental sciences to engineering, law, pharmacy and beyond."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SCHOOLS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="hover-lift group rounded-xl border border-border bg-card p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/academics" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary-glow">
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/academics" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-glow">
                View All Schools <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Research & Innovation pillars */}
        <section className="relative z-10">
          <div className="absolute z-10 top-0 left-0 w-full h-[55px] md:h-[10%] translate-y-[-30%] flex items-center justify-center">
            <img 
              src={paper} 
              alt="" 
              className="w-full h-full object-cover object-center lg:object-fill" 
              style={{ filter: "brightness(1.3)" }}
            />
          </div>
          <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative">
            <SectionHeading
              eyebrow="Research & innovation"
              title="Research prowess, publications and collaboration."
              subtitle="Explore grants, publications, labs, clinical research and industry ties—aligned with the Research section of the official university portal."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {RESEARCH_PILLARS.map((e, i) => (
                <motion.div
                  key={e.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="hover-lift rounded-xl border border-border bg-card p-6 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                    <e.icon className="h-7 w-7" />
                  </span>
                  <div className="mt-4 font-semibold">{e.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{e.d}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/research" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
                View All Research Projects
              </Link>
            </div>
          </section>
        </section>

        {/* News & Events */}
        <section className="relative z-10">
          <div className="absolute z-10 top-0 left-0 w-full h-[55px] md:h-[10%] translate-y-[-30%] flex items-center justify-center">
            <img 
              src={paper} 
              alt="" 
              className="w-full h-full object-cover object-center lg:object-fill" 
              style={{ filter: "brightness(1.3)" }}
            />
          </div>
          <section className="bg-secondary/60 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between gap-6">
                <SectionHeading eyebrow="News & Events" title="What's happening on campus." />
                <Link to="/about" className="hidden text-sm font-semibold text-primary hover:text-primary-glow sm:inline-flex">View All →</Link>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {NEWS.map((n, i) => (
                  <motion.article
                    key={n.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="hover-lift flex flex-col rounded-xl border border-border bg-card p-7"
                  >
                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">{n.tag}</span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground"><Calendar className="h-3.5 w-3.5" />{n.date}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{n.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                    <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read More <ArrowUpRight className="h-4 w-4" /></a>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
