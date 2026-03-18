import { Menu, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const logo = "/favicon-msm.png";

type SiteShellProps = {
  children: ReactNode;
};

const navItems = [
  { label: "Free Webinar", to: "/FreeWebinar" },
  { label: "Agent Opportunity", to: "/AgentOpportunity" },
  { label: "About", to: "/AboutPlatform" },
  { label: "Insurance Solutions", to: "/InsuranceSolutions" },
];

const footerGroups = {
  Platform: [
    { label: "Agent Opportunity", to: "/AgentOpportunity" },
    { label: "About Us", to: "/AboutPlatform" },
    { label: "Apply Now", to: "/ApplyNow" },
    { label: "Book a Call", to: "/BookCall" },
  ],
  Insurance: [
    { label: "Term Life", to: "/InsuranceSolutions" },
    { label: "Permanent Life", to: "/InsuranceSolutions" },
    { label: "Indexed Universal Life", to: "/InsuranceSolutions" },
    { label: "Annuities", to: "/InsuranceSolutions" },
  ],
};

export function SiteShell({ children }: SiteShellProps) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <nav
        className={`fixed left-1/2 top-4 z-50 w-[95%] -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "max-w-3xl" : "max-w-5xl"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "border border-white/[0.06] bg-[#0A0A0B]/90 shadow-2xl backdrop-blur-xl"
              : "border border-white/[0.04] bg-[#0A0A0B]/60 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="MoneySmart Movement" className="h-9 w-9 rounded-full" />
            <span className="hidden text-lg font-bold sm:block">MoneySmart Movement</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-4 py-2 text-sm text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/ApplyNow"
              className="hidden rounded-xl bg-[#00FF85] px-5 py-2.5 text-sm font-semibold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] sm:inline-flex"
            >
              Apply Now
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/5 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0B]/98 px-6 pt-24 backdrop-blur-xl lg:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-2xl px-6 py-4 text-xl text-gray-300 transition-all hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-3 pt-4">
              <Link
                to="/ApplyNow"
                className="block w-full rounded-2xl bg-[#00FF85] px-6 py-4 text-center text-lg font-semibold text-[#0A0A0B]"
              >
                Apply Now
              </Link>
              <Link
                to="/BookCall"
                className="block w-full rounded-2xl border border-white/10 px-6 py-4 text-center text-lg font-semibold text-white"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      )}

      <main>{children}</main>

      <footer className="border-t border-white/[0.04] bg-[#0A0A0B]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <img src={logo} alt="MoneySmart Movement" className="h-12 w-12 rounded-full" />
                <span className="text-xl font-bold text-white">MoneySmart Movement</span>
              </div>
              <p className="mb-8 max-w-sm leading-relaxed text-gray-500">
                Established in 2012, the MoneySmart Movement has helped over 100,000 people enter the
                life insurance industry and build lives of meaning, purpose, and financial freedom.
              </p>
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} MoneySmart Movement. Est. 2012. All rights reserved.
              </p>
            </div>

            {Object.entries(footerGroups).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={`${title}-${link.label}`}>
                      <Link to={link.to} className="text-sm text-gray-500 transition-colors hover:text-[#00FF85]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
