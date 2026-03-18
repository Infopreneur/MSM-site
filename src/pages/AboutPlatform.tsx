import { Layers3, Rocket, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Modern platform",
    description: "A fintech-inspired operating model for recruiting, development, client communication, and growth.",
    icon: Layers3,
  },
  {
    title: "Launch support",
    description: "Clear structure for webinar registration, discovery, licensing, and early business building.",
    icon: Rocket,
  },
  {
    title: "Conversion flow",
    description: "Every page and CTA is designed to move visitors toward webinar registration, calls, and applications.",
    icon: Target,
  },
  {
    title: "Human mentorship",
    description: "Technology supports the process, but guidance and accountability remain central to growth.",
    icon: Users,
  },
];

const AboutPlatform = () => {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">About platform</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Built to Combine Opportunity, Education, and Modern Growth Systems
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                MoneySmart Movement is positioned as a modern recruiting and growth platform for people entering life insurance and for consumers exploring protection and annuity solutions.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-emerald-500 px-6 text-white hover:bg-emerald-600">
                <Link to="/free-webinar">See How It Works</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-slate-300 px-6 text-slate-800">
                <Link to="/book-a-call">Book a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
};

export default AboutPlatform;
