import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Beaker, FileText, FlaskConical, Microscope, GraduationCap } from "lucide-react";
import heroResearch from "@/assets/hero-research.jpg";
import ctaCampus from "@/assets/cta-campus.jpg";
import health from "@/assets/Health.webp";
import engineering from "@/assets/Engineering.webp";
import social from "@/assets/Humanities.jpg";
import environment from "@/assets/Environment.webp";
import ai from "@/assets/AI.webp";
import law from "@/assets/Law.jpg";
import heroAcademics from "@/assets/hero-academics.jpg";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Innovation — SGT University (SGTU)" },
      { name: "description", content: "Research at Shree Guru Gobind Singh Tricentenary University: introduction, projects, publications, CSIF shared facilities and Ph.D. programmes—as listed on sgtuniversity.ac.in." },
      { property: "og:title", content: "Research at SGT University" },
      { property: "og:description", content: "Publications, projects, CSIF and doctoral research aligned with the official SGT University portal." },
    ],
  }),
  component: ResearchPage,
});

const OFFICIAL = "https://sgtuniversity.ac.in";

const ECOSYSTEM = [
  { icon: Beaker, t: "Research introduction", d: "Policies, priorities and institutional support" },
  { icon: FlaskConical, t: "Research projects", d: "Interdisciplinary and funded enquiry" },
  { icon: FileText, t: "Publications", d: "Papers, patents and scholarly output" },
  { icon: Microscope, t: "CSIF", d: "Central shared instrumentation facilities" },
  { icon: GraduationCap, t: "Ph.D. programmes", d: "Doctoral training, regulations and admit card" },
];

const AREAS = [
  { t: "Health & Life Sciences", img: health },
  { t: "Engineering & Technology", img: engineering },
  { t: "Social Sciences & Humanities", img: social },
  { t: "Environment & Sustainability", img: environment },
  { t: "AI & Data Science", img: ai },
  { t: "Law & Policy", img: law },
];

const FEATURED = [
  {
    t: "AI-Powered Healthcare Analytics",
    d: "Predictive models supporting earlier, better diagnosis.",
    img: heroResearch,
  },
  {
    t: "Sustainable Materials for a Green Future",
    d: "Bio-derived composites reducing industrial emissions.",
    img: ctaCampus,
  },
  {
    t: "Mental Health & Wellbeing Study",
    d: "Population-scale insights into youth wellbeing.",
    img: heroAcademics,
  },
];

function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title={<>Research. Innovate. <em className="not-italic text-gold">Impact.</em></>}
        subtitle="Grants, publications, shared instrumentation (CSIF), doctoral programmes and hospital-linked enquiry—mirroring the Research menu on sgtuniversity.ac.in."
        image={heroResearch}
      />

      {/* Ecosystem */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Research at SGTU"
          title="Introduction, projects, publications, CSIF and Ph.D."
          subtitle="These pillars follow the structure of the official university website so you can explore the same themes here, then complete forms or downloads on the portal."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ECOSYSTEM.map((e, i) => (
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
      </section>

      {/* Research Areas — sharp image + title strip (match reference layout) */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Research Areas</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Thematic strengths drawn from SGT University’s faculties—from health and engineering to law, pharmacy and environmental sciences.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-shadow duration-300 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/20] w-full shrink-0 overflow-hidden bg-muted">
                  <img
                    src={a.img}
                    alt={a.t}
                    width= "auto"
                    height= "auto"
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col bg-card px-5 py-4">
                  <a
                    href="#"
                    className="text-base font-semibold text-primary transition-colors hover:text-primary-glow hover:underline"
                  >
                    {a.t}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              View All Research Areas
            </button>
          </div>
        </div>
      </section>

      {/* Featured spotlight — blurred image + frosted content */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Campus spotlight" title="Recent highlights from the official news feed." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED.map((f, i) => (
            <motion.article
              key={f.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="hover-lift group relative min-h-[240px] overflow-hidden rounded-2xl border border-border shadow-card"
            >
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                {/* <img
                  src={f.img}
                  alt=""
                  className="h-full w-full scale-110 object-cover opacity-90 blur-xl transition duration-700 group-hover:scale-[1.14] group-hover:blur-2xl"
                  loading="lazy"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-br from-card/92 via-card/88 to-primary/[0.12]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent opacity-80" />
              </div>
              <div className="relative z-10 flex h-full min-h-[240px] flex-col p-6 sm:p-7">
                <div className="h-1 w-10 rounded-full bg-primary/80" />
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">{f.t}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                <span
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary cursor-default select-text"
                  aria-readonly="true"
                  tabIndex={-1}
                >
                  Read more 
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </span>
           
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Collaborate CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-elegant">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <h3 className="font-display text-4xl text-balance sm:text-5xl">Join us in solving real-world challenges through research and innovation.</h3>
              <a href="#" className="mt-7 inline-flex rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5">Collaborate With Us</a>
            </div>
            <div className="relative min-h-[260px]">
              <img src={ctaCampus} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
