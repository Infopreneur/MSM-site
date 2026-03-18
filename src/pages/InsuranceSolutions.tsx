import { Link } from "react-router-dom";
import { ArrowRight, ChartNoAxesCombined, HeartHandshake, Landmark, Shield } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Term Life",
    description: "Straightforward protection designed to help families secure income replacement and financial stability.",
    icon: Shield,
  },
  {
    title: "Permanent Life",
    description: "Long-term coverage options for protection, legacy planning, and broader financial goals.",
    icon: HeartHandshake,
  },
  {
    title: "Indexed Universal Life",
    description: "Flexible solutions for those exploring protection paired with tax-advantaged cash value growth potential.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Annuities",
    description: "Retirement-oriented strategies focused on principal awareness, income planning, and long-term confidence.",
    icon: Landmark,
  },
];

const InsuranceSolutions = () => {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Insurance solutions</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Modern Insurance Solutions
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Education-driven conversations around life insurance and annuity options for individuals and families seeking clarity.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
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
                <Link to="/book-a-call">Schedule A Consultation</Link>
              </Button>
              <Link to="/book-a-call" className="inline-flex items-center text-sm font-semibold text-emerald-600">
                Speak with the team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
};

export default InsuranceSolutions;
