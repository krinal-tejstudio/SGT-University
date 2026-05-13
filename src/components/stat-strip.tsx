import { motion } from "framer-motion";

/** Snapshot metrics reflected on sgtuniversity.ac.in (faculties, libraries, NAAC, programme span, location). */
const STATS = [
  { value: "15+", label: "Schools" },
  { value: "200+", label: "Programs" },
  { value: "20,000+", label: "Students" },
  { value: "1,500+", label: "Faculty" },
  { value: "150+", label: "Global Partners" },
];

export function StatStrip() {
  return (
    <section className="relative -mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-elegant sm:grid-cols-3 lg:grid-cols-5"
      >
        {STATS.map((s) => (
          <div key={s.label} className="bg-card p-6 text-center transition-colors hover:bg-accent">
            <div className="font-display text-2xl font-semibold text-primary sm:text-3xl lg:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
