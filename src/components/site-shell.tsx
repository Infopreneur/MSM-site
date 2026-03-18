import { Sparkles } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { label: "Agent Opportunity", to: "/agent-opportunity" },
  { label: "About Platform", to: "/about-platform" },
  { label: "Insurance Solutions", to: "/insurance-solutions" },
  { label: "Free Webinar", to: "/free-webinar" },
];

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">MoneySmart Movement</p>
              <p className="text-xs text-slate-500">Recruiting + growth platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden rounded-full border-slate-200 px-5 text-slate-700 md:inline-flex">
              <Link to="/book-a-call">Book a Call</Link>
            </Button>
            <Button asChild className="rounded-full bg-emerald-500 px-5 text-white hover:bg-emerald-600">
              <Link to="/free-webinar">Watch Free Webinar</Link>
            </Button>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">MoneySmart Movement</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Modern platform for launching a life insurance career and connecting consumers to education-driven protection solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link to="/free-webinar" className="hover:text-slate-950">Free Webinar</Link>
            <Link to="/apply-now" className="hover:text-slate-950">Apply Now</Link>
            <Link to="/book-a-call" className="hover:text-slate-950">Book a Call</Link>
            <Link to="/insurance-solutions" className="hover:text-slate-950">Insurance Solutions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
