import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Sparkles, Users, Globe2 } from "lucide-react";
import heroAcademics from "@/assets/hero-academics.jpg";
import ctaCampus from "@/assets/cta-campus.jpg";
import heroResearch from "@/assets/hero-research.jpg";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Study at SGT University (SGTU)" },
      { name: "description", content: "Study at Shree Guru Gobind Singh Tricentenary University: diploma, graduate, postgraduate and Ph.D. programmes across nineteen faculties. Full course lists live on sgtuniversity.ac.in." },
      { property: "og:title", content: "Academics at SGT University" },
      { property: "og:description", content: "Explore programs designed for the world that's coming." },
    ],
  }),
  component: AcademicsPage,
});

const OFFICIAL = "https://sgtuniversity.ac.in";

const TABS = ["Undergraduate", "Postgraduate", "Diploma", "Doctoral"] as const;
type Tab = (typeof TABS)[number];

const TAB_INTRO: Record<Tab, { title: string; subtitle: string }> = {
  Undergraduate: {
    title: "Undergraduate & graduate programmes",
    subtitle: "Bachelor’s-level study including B.Tech, B.Com, B.Ed, BHM, law (BA LL.B), journalism, forensic science and allied fields—as listed under graduate study on sgtuniversity.ac.in.",
  },
  Postgraduate: {
    title: "Postgraduate programmes",
    subtitle: "Master’s and professional degrees including MBA, M.Ed, M.Tech tracks, M.Sc. (Clinical Psychology), M.Des, LL.M. and more, aligned with the official course browser.",
  },
  Diploma: {
    title: "Diploma & certificate programmes",
    subtitle: "Diploma in Pharmacy, clinical psychology, psychotherapy, nurse assistant certificates and other workforce-ready pathways from the official catalogue.",
  },
  Doctoral: {
    title: "Doctoral (Ph.D.) programmes",
    subtitle: "Ph.D. in management, education, law, agricultural sciences, psychology, hospitality, physics, English and other disciplines per university doctoral regulations.",
  },
};

const PROGRAMS: Record<Tab, { title: string; desc: string; image: string }[]> = {
  Undergraduate: [
    {
      title: "Undergraduate & graduate catalogue",
      desc: "Browse bachelor’s programmes in agriculture, commerce, design, hotel management, law, journalism, forensic science and more—use the official “Select Your Study Preference” tool for the live list.",
      image: heroAcademics,
    },
    {
      title: "Faculty of Engineering & Technology",
      desc: "Innovate, create and build for tomorrow—engineering in disruptive technologies with Centres of Excellence, as described on sgtuniversity.ac.in.",
      image: ctaCampus,
    },
    {
      title: "Medicine, dental & allied health",
      desc: "MBBS, BDS, BAMS and allied health pathways with hospital-linked training and senior faculty, reflecting the Faculty of Medicine & Health Sciences and related schools.",
      image: heroResearch,
    },
  ],
  Postgraduate: [
    {
      title: "Postgraduate catalogue",
      desc: "MBA, M.Ed, M.Sc., LL.M., M.Des and other PG options—refer to the official postgraduate listing for eligibility and intakes.",
      image: heroResearch,
    },
    {
      title: "SGT Global Business School & commerce",
      desc: "Management and commerce programmes that blend global business acumen with Indian knowledge traditions, per the School of Commerce & Management and SGT Global Business School.",
      image: heroAcademics,
    },
  ],
  Diploma: [
    {
      title: "Diploma & PG diploma pathways",
      desc: "Diploma in Pain Management, Pharmacy, PG diplomas in psycho-oncology and psychotherapy, professional diplomas in clinical psychology and related offerings from the official diploma list.",
      image: ctaCampus,
    },
  ],
  Doctoral: [
    {
      title: "Ph.D. & doctoral research",
      desc: "Doctoral programmes across agricultural sciences, psychology, management, education, law, fashion design, hospitality, physics, English and more—see Ph.D. section on the official portal for regulations.",
      image: heroResearch,
    },
  ],
};

const FEATURES = [
  { icon: Sparkles, t: "Industry-Aligned Curriculum" },
  { icon: Users, t: "Experienced Faculty" },
  { icon: Globe2, t: "Global Collaborations" },
  { icon: BookOpen, t: "Holistic Student Development" },
];

function AcademicsPage() {
  const [tab, setTab] = useState<Tab>("Undergraduate");
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title={<>Discover. <em className="not-italic text-gold">Learn.</em> Lead.</>}
        subtitle="Programmes mirror the official portal—from diploma and certificate courses through MBBS/BDS/BAMS, B.Tech, law, design, agriculture and Ph.D. pathways across nineteen faculties."
        image={heroAcademics}
      />

      {/* Search */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="grid gap-3 sm:grid-cols-3">
            <select className="rounded-md border border-input bg-background px-3 py-3 text-sm">
              <option>Program Level</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>Doctoral</option>
              <option>Diploma</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-3 text-sm">
              <option>All Disciplines</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Law</option>
              <option>Management</option>
            </select>
            <input className="rounded-md border border-input bg-background px-3 py-3 text-sm" placeholder="Search programs…" />
          </div>
        </div>

        {/* Tabs — solid active state */}
        <div className="mt-10 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${tab === t ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted/70 text-foreground/75 hover:bg-muted hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">{TAB_INTRO[tab].title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{TAB_INTRO[tab].subtitle}</p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          {PROGRAMS[tab].map((p, i) => (
            <motion.div
              key={`${tab}-${p.title}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={`flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <img
                src={p.image}
                alt=""
                className="h-28 w-full shrink-0 rounded-lg object-cover sm:h-24 sm:w-40"
                loading="lazy"
                width={160}
                height={112}
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex text-sm font-semibold text-primary">Explore Program →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Excellence band */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-balance sm:text-5xl">Academic Excellence</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold/20 text-gold">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.t}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/10">
              View Academic Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Counsellor */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-10 shadow-card lg:grid-cols-[1.2fr_1fr] lg:p-16">
          <div>
            <SectionHeading eyebrow="Guidance" title="Not sure which program is right for you?" subtitle="Our counsellors are here to help you make the right choice — book a free session and chart your path." />
            <Link to="/admissions" className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
              Book Counselling Session
            </Link>
          </div>
          <img src={heroAcademics} alt="Students" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" loading="lazy" width={800} height={600} />
        </div>
      </section>
    </>
  );
}
