import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Target, Award, Trophy, Star, ShieldCheck } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import ctaCampus from "@/assets/cta-campus.jpg";
import { PageHero } from "@/components/page-hero";
import { StatStrip } from "@/components/stat-strip";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shree Guru Gobind Singh Tricentenary University (SGTU)" },
      { name: "description", content: "About SGT University, Gurugram: our university, leadership, accreditation & rankings (NAAC A+), governance and vision—consistent with sgtuniversity.ac.in." },
      { property: "og:title", content: "About SGT University" },
      { property: "og:description", content: "A legacy of excellence and a vision for the future." },
    ],
  }),
  component: AboutPage,
});

const SIDE = ["Overview", "Leadership", "Awards & Honors", "Rankings", "Facts & Figures", "Governance", "Vision & Mission", "History"];
const RANKINGS = [
  { icon: ShieldCheck, top: "NAAC A+", text: "Accredited by NAAC with A+ grade (as published on the official portal)" },
  { icon: Trophy, top: "NIRF", text: "Participation in national institutional ranking frameworks" },
  { icon: Star, top: "19 faculties", text: "Multidisciplinary teaching from agriculture and Ayurveda to engineering, law and health sciences" },
  { icon: Award, top: "Clinical & community", text: "Large multispecialty hospital and outreach aligned with medicine and allied health programmes" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>A legacy of excellence. A vision for the future.</>}
        subtitle="Shree Guru Gobind Singh Tricentenary University (SGT University), Gurugram, Haryana—dedicated to teaching, research and community impact across nineteen faculties."
        image={heroAbout}
      />

      <StatStrip />

      {/* Overview with sidebar + campus column */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,200px)] lg:items-start">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="About sections" className="overflow-hidden rounded-xl border border-border bg-secondary/40 text-sm">
              <ul className="flex flex-row gap-0 overflow-x-auto p-1.5 lg:flex-col lg:gap-0.5">
                {SIDE.map((s, i) => (
                  <li key={s} className="shrink-0 lg:w-full">
                    <button
                      type="button"
                      className={`w-full whitespace-nowrap rounded-lg px-4 py-2.5 text-left font-medium transition-colors ${i === 0 ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground/80 hover:bg-background"}`}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">Overview</h2>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Established as a state private university, SGT University is a multidisciplinary institution in Budhera, Gurugram, known for NAAC A+ accreditation, modern infrastructure, hospital-linked professional programmes and a strong research and publications ecosystem—as described on the official website sgtuniversity.ac.in.
            </p>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Quick facts</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "19 faculties and schools across medicine, engineering, law, design, agriculture and more",
                  "Six campus libraries supporting teaching and research",
                  "NAAC accredited with A+ grade",
                  "Gurgaon–Badli Road, Chandu, Budhera, Gurugram, Haryana 122505",
                ].map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-foreground/90">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {[
                { icon: Eye, title: "Our Vision", body: "To be a globally recognized university for excellence in teaching, research, innovation and community engagement." },
                { icon: Target, title: "Our Mission", body: "To develop future-ready professionals and responsible citizens who contribute to society and create a better world." },
              ].map((b) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="hover-lift rounded-xl border border-border bg-card p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-card lg:block">
            <img src={ctaCampus} alt="Students on a tree-lined campus path" className="h-full min-h-[420px] w-full object-cover object-center" loading="lazy" width={400} height={800} />
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Accreditation & rankings" title="Recognitions that matter to students and families." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RANKINGS.map((r, i) => (
              <motion.div
                key={r.top}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="hover-lift rounded-xl border border-border bg-card p-7 text-center"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                  <r.icon className="h-7 w-7" />
                </span>
                <div className="mt-5 font-display text-xl font-semibold text-primary">{r.top}</div>
                <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl gradient-hero p-12 text-center text-white shadow-elegant lg:p-20">
          <h3 className="font-display text-4xl text-balance sm:text-5xl">Be part of a community that inspires and transforms.</h3>
          <a href="/admissions" className="mt-8 inline-flex rounded-md bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground hover:-translate-y-0.5 transition-transform">Apply Now</a>
        </div>
      </section>
    </>
  );
}
