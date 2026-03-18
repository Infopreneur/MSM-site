import { ChartNoAxesCombined, Check, HeartHandshake, Landmark, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site-shell";

const solutions = [
  {
    icon: Shield,
    title: "Term Life Insurance",
    tagline: "Affordable Protection",
    description:
      "Term life insurance provides coverage for a specific period and is one of the most affordable ways to protect your family and income.",
    benefits: [
      "Lower monthly premiums",
      "Simple income replacement protection",
      "Ideal for young families and growing households",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Permanent Life Insurance",
    tagline: "Lifetime Coverage",
    description:
      "Permanent life insurance can provide lifelong coverage while building cash value over time for long-term financial flexibility.",
    benefits: [
      "Coverage that does not expire",
      "Cash value accumulation",
      "Useful for legacy and estate planning",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Indexed Universal Life",
    tagline: "Flexible Growth",
    description:
      "IUL policies combine life insurance protection with flexible premium structures and indexed growth potential.",
    benefits: [
      "Tax-advantaged growth potential",
      "Flexible premium options",
      "Protection plus long-term planning benefits",
    ],
  },
  {
    icon: Landmark,
    title: "Modern Annuities",
    tagline: "Retirement Income",
    description:
      "Modern annuity options can help create predictable retirement income and support long-term financial confidence.",
    benefits: [
      "Guaranteed income options",
      "Principal-conscious retirement planning",
      "Designed for stability and peace of mind",
    ],
  },
];

const InsuranceSolutions = () => {
  return (
    <SiteShell>
      <div className="bg-[#0A0A0B]">
        <section className="px-6 pb-20 pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// solutions</span>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Modern Insurance{" "}
                <span className="bg-gradient-to-r from-[#00FF85] to-[#00CC6A] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-400">
                We offer a full suite of modern life insurance and retirement solutions designed to protect your family
                and build your financial future.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl space-y-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#00FF85]/15 md:p-12"
                >
                  <div className="grid items-start gap-10 md:grid-cols-2">
                    <div>
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF85]/10">
                          <Icon className="h-7 w-7 text-[#00FF85]" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white md:text-3xl">{solution.title}</h2>
                          <span className="text-sm font-mono text-[#00FF85]">{solution.tagline}</span>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed text-gray-400">{solution.description}</p>
                    </div>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#00FF85]/10">
                            <Check className="h-3.5 w-3.5 text-[#00FF85]" />
                          </div>
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-[#0F2922] px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Find the Right Coverage</h2>
            <p className="mb-10 text-lg text-gray-400">
              Schedule a free consultation with one of our licensed advisors to find the best solution for your needs.
            </p>
            <Link
              to="/BookCall"
              className="inline-flex items-center rounded-2xl bg-[#00FF85] px-10 py-5 text-lg font-semibold text-[#0A0A0B] transition-all hover:bg-[#00E077]"
            >
              Schedule A Consultation
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
};

export default InsuranceSolutions;
