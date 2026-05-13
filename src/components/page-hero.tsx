import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  ctaPrimary?: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
  align?: "left" | "center";
  height?: "tall" | "regular";
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  ctaPrimary,
  ctaSecondary,
  align = "left",
  height = "regular",
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${height === "tall" ? "min-h-[88vh]" : "min-h-[70vh]"}`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div
        className={`relative mx-auto flex h-full max-w-7xl items-end px-4 pt-32 pb-20 sm:px-6 lg:px-8 ${
          align === "center" ? "justify-center text-center" : ""
        }`}
        style={{ minHeight: height === "tall" ? "88vh" : "70vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
              {subtitle}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className={`mt-8 flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""}`}>
              {ctaPrimary && (
                <Link
                  to={ctaPrimary.to}
                  className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-elegant transition-all hover:translate-y-[-2px] hover:bg-gold/90"
                >
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  to={ctaSecondary.to}
                  className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                >
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
