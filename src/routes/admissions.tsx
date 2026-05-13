import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ClipboardList, FileCheck, BadgeCheck, CalendarClock, Wallet, Phone, Building2, Users, Globe2, Sparkles, ShieldCheck } from "lucide-react";
import heroAdm from "@/assets/hero-admissions.jpg";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 — SGT University (SGTU)" },
      { name: "description", content: "Admission 2026–27 for MD/MS/MDS, MBA, nursing, UG/PG programmes and online registration—complete applications on the official sgtuniversity.ac.in portal." },
      { property: "og:title", content: "Admissions — SGT University" },
      { property: "og:description", content: "Apply online, explore programmes and read procedures on the official SGT University website." },
    ],
  }),
  component: AdmissionsPage,
});

const OFFICIAL = "https://sgtuniversity.ac.in";

const STEPS = [
  { icon: ClipboardList, t: "How to Apply" },
  { icon: FileCheck, t: "Application Process" },
  { icon: BadgeCheck, t: "Eligibility Criteria" },
  { icon: CalendarClock, t: "Important Dates" },
  { icon: Wallet, t: "Tuition & Fees" },
  { icon: Phone, t: "Contact Admissions" },
];

const WHY = [
  { icon: Sparkles, t: "NAAC A+ ecosystem" },
  { icon: Users, t: "19 faculties & hospitals" },
  { icon: Building2, t: "Campus infrastructure" },
  { icon: Globe2, t: "International relations" },
  { icon: ShieldCheck, t: "Placements & CRC" },
];

const DATES = [
  ["Applications Open", "01st November, 2025"],
  ["Last Date to Apply", "30th June, 2026"],
  ["Entrance Test / Interview", "10th – 20th July, 2026"],
  ["Admission Decision", "31st July, 2026"],
  ["Session Begins", "01st August, 2026"],
];

function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title={<>Your future <em className="not-italic text-gold">starts here.</em></>}
        subtitle="Admission 2026–27 is published on the official portal—including online registration, programme lists, scholarships and FAQs. Use this page for a quick orientation, then continue on sgtuniversity.ac.in."
        image={heroAdm}
      />

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading align="center" eyebrow="Get Started" title="Six steps to your application." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="hover-lift group rounded-xl border border-border bg-card p-6 text-center"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="mt-4 text-sm font-semibold">{s.t}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Find program + Why */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-2xl">Find Your Program</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <select className="rounded-md border border-input bg-background px-3 py-3 text-sm">
                <option>Programme level</option>
                <option>Diploma</option>
                <option>Graduate</option>
                <option>Post Graduate</option>
                <option>PhD</option>
              </select>
              <select className="rounded-md border border-input bg-background px-3 py-3 text-sm">
                <option>All disciplines</option>
                <option>MBBS / BAMS / BDS</option>
                <option>MD / MS / MDS</option>
                <option>B.Tech / BBA / BCA</option>
                <option>Law</option>
              </select>
              <input className="rounded-md border border-input bg-background px-3 py-3 text-sm" placeholder="Search programmes…" />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Popular on sgtuniversity.ac.in:</span>
              {["CUET", "MBA", "MBBS", "B.Tech", "Nursing", "Law"].map((t) => (
                <button key={t} className="rounded-full border border-border px-3 py-1 hover:border-primary hover:text-primary">{t}</button>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Why SGT University?" title="Where programmes, patients and industry meet." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {WHY.map((w, i) => (
                <motion.div
                  key={w.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="hover-lift rounded-xl border border-border bg-card p-6 text-center"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-sm font-semibold">{w.t}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application open + dates */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-elegant">
          <div className="grid h-full grid-cols-[1fr_auto]">
            <div className="p-10 lg:p-12">
              <h3 className="font-display text-3xl text-balance">Application Open for 2026 Intake</h3>
              <p className="mt-3 text-primary-foreground/80">Apply early to secure your place and unlock scholarships.</p>
              <a href="#" className="mt-6 inline-flex rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:-translate-y-0.5 transition-transform">Apply Now</a>
            </div>
            {/* <img src={heroAdm} alt="" className="hidden h-full w-48 object-cover sm:block" loading="lazy" /> */}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-card lg:p-10">
          <h3 className="font-display text-2xl">Important Dates</h3>
          <ul className="mt-6 divide-y divide-border">
            {DATES.map(([k, v]) => (
              <li key={k} className="flex items-center justify-between py-3.5 text-sm">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-semibold text-foreground">{v}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">View All Dates</button>
        </div>
      </section>

      {/* Help band */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl gradient-hero p-10 text-white shadow-elegant lg:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h3 className="font-display text-4xl text-balance">Have questions? We're here to help.</h3>
              <p className="mt-3 max-w-md text-white/80">Contact our admissions team for personalized guidance, scholarship information and program advice.</p>
              <a href="#" className="mt-7 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary hover:-translate-y-0.5 transition-transform">Contact Us</a>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-xs font-medium uppercase tracking-widest text-gold">Admissions Helpdesk</div>
              <div className="mt-3 text-2xl font-display">
                <a href="tel:18001025661" className="hover:underline">
                  1800 102 5661
                </a>
              </div>
              <div className="mt-1 text-sm text-white/70">
                <a href="mailto:info@sgtuniversity.ac.in" className="hover:underline">
                  info@sgtuniversity.ac.in
                </a>
              </div>
              <div className="mt-4 text-sm text-white/70">Mon – Sat • 9:00 AM – 6:00 PM IST</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
