import { Menu } from "lucide-react";
import { ReactNode, useState } from "react";
import logo from "@/assets/favicon-msm.png";
import { Button } from "@/components/ui/button";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { label: "Free Webinar", to: "#webinar" },
  { label: "Agent Opportunity", to: "#opportunity" },
  { label: "About", to: "#about" },
  { label: "Insurance Solutions", to: "#insurance" },
];

export function SiteShell({ children }: SiteShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050607] text-white">
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <div className="mx-auto max-w-[1260px]">
          <div className="rounded-[24px] border border-white/6 bg-[#090b0d]/95 px-4 py-3 shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur md:px-6">
            <div className="flex items-center justify-between gap-3">
              <a href="#top" className="flex min-w-0 items-center gap-3">
                <img src={logo} alt="MoneySmart Movement" className="h-10 w-10 rounded-full border border-white/10 bg-white object-cover" />
                <span className="truncate text-sm font-semibold tracking-[-0.02em] text-white sm:text-[18px]">MoneySmart Movement</span>
              </a>

              <nav className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => (
                  <a key={item.label} href={item.to} className="text-[15px] font-medium text-white/70 transition hover:text-white">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <Button asChild className="hidden h-12 rounded-[16px] bg-[#39f277] px-6 text-[15px] font-semibold text-[#04110a] shadow-none hover:bg-[#4cf688] sm:inline-flex">
                  <a href="#apply">Apply Now</a>
                </Button>
                <button
                  type="button"
                  aria-label="Toggle navigation"
                  onClick={() => setMobileOpen((current) => !current)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 text-white lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>

            {mobileOpen && (
              <div className="mt-4 space-y-2 border-t border-white/8 pt-4 lg:hidden">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-[14px] px-3 py-3 text-sm font-medium text-white/78 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#apply"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-[14px] bg-[#39f277] px-4 py-3 text-center text-sm font-semibold text-[#04110a]"
                >
                  Apply Now
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/6 bg-[#050607]">
        <div className="mx-auto max-w-[1260px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-[28px] border border-white/6 bg-[#090b0d] px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="MoneySmart Movement" className="h-10 w-10 rounded-full border border-white/10 bg-white object-cover" />
              <div>
                <p className="text-base font-semibold text-white">MoneySmart Movement</p>
                <p className="text-sm text-white/50">Established 2012 • 100,000+ people helped enter the industry</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/60">
              <a href="#webinar" className="transition hover:text-white">Free Webinar</a>
              <a href="#insurance" className="transition hover:text-white">Insurance Solutions</a>
              <a href="#apply" className="transition hover:text-white">Apply Now</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
