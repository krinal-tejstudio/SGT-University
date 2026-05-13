import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/sgtu-updated.png";

export function SiteFooter() {
  return (
    <footer className=" border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          {/* <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-gold-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold">SGT University</span>
          </div> */}
          <img src={logo} alt="SGT University" className="h-10 w-auto max-w-[250px] object-contain" width={180} height={40} />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Empowering minds through education, research and innovation to create a better tomorrow.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/academics" className="hover:text-gold transition-colors">Academics</Link></li>
            <li><Link to="/research" className="hover:text-gold transition-colors">Research</Link></li>
            <li><Link to="/admissions" className="hover:text-gold transition-colors">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>
              <Link to="/admissions" className="hover:text-gold transition-colors">
                Apply Now
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-gold transition-colors">
                Find a Program
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold transition-colors">
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/research" className="hover:text-gold transition-colors">
                Research Areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Gurgaon–Badli Road, Chandu, Budhera, Gurugram, Haryana 122505
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:18001025661" className="hover:text-gold transition-colors">1800 102 5661</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:info@sgtuniversity.ac.in" className="hover:text-gold transition-colors">info@sgtuniversity.ac.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} SGT University. All rights reserved.
      </div>
    </footer>
  );
}
