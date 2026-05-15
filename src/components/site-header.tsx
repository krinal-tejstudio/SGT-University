import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/sgtu-updated.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/research", label: "Research" },
  { to: "/admissions", label: "Admissions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        // "sticky top-0 z-50 w-full transition-all duration-300",
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-card"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex justify-between lg:grid h-auto max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="group flex min-w-0 items-center justify-self-start gap-2.5">
          <img 
          src={logo} 
          alt="SGT University" 
          className="h-14 w-auto max-w-[250px] object-contain" 
          width={180} 
          height={40} 
          style={{ filter: scrolled ? "invert(1)" : "invert(0)" }}
          />
        </Link>

        <nav className="hidden items-center justify-center gap-1 justify-self-center lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`relative rounded-md px-3 py-2 text-lg font-medium transition-colors ${!scrolled ? "text-white hover:text-white/80" : "text-foreground/75 hover:text-foreground"}`}
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end justify-self-end gap-2">
          <Link
            to="/admissions"
            className={`hidden rounded-md px-4 py-2 text-sm font-medium transition-colors ${!scrolled ? "bg-white text-primary shadow-card hover:bg-white/80 hover:shadow-elegant" : "bg-primary text-primary-foreground shadow-card hover:bg-primary-glow hover:shadow-elegant"} lg:inline-flex`}
          >
            Apply Now
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden bg-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-accent"
                  activeProps={{ className: "bg-accent text-primary" }}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
