import { BriefcaseBusiness, CalendarClock, GraduationCap, HandCoins, Rocket, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site-shell";

const careerCards = [
  {
    icon: HandCoins,
    title: "High-Income Potential",
    description: "New entrants can earn six figures in their first year with the right training and systems.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Flexible Career Path",
    description: "Build part-time or full-time while creating a business that can scale with your goals.",
  },
  {
    icon: Workflow,
    title: "Modern Infrastructure",
    description: "Automation, CRM workflows, and lead systems replace outdated prospecting methods.",
  },
  {
    icon: GraduationCap,
    title: "Hands-On Training",
    description: "Get a step-by-step path from getting started to writing business confidently.",
  },
  {
    icon: Rocket,
    title: "Fast Start Support",
    description: "Launch with mentorship, accountability, and clear next steps from day one.",
  },
  {
    icon: CalendarClock,
    title: "Lifestyle Freedom",
    description: "Create a schedule and income path that gives you more ownership over your life.",
  },
];

const dayTimeline = [
  { time: "9:00 AM", activity: "Check leads, follow-ups, and appointments for the day.", color: "bg-[#00FF85]" },
  { time: "11:00 AM", activity: "Connect with prospects and schedule consultations.", color: "bg-emerald-400" },
  { time: "2:00 PM", activity: "Attend training, coaching, or product education.", color: "bg-lime-400" },
  { time: "5:00 PM", activity: "Meet with clients and help families protect what matters.", color: "bg-green-300" },
];

const AgentOpportunity = () => {
  return (
    <SiteShell>
      <div className="bg-[#0A0A0B]">
        <section className="px-6 pb-20 pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// agent_opportunity</span>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                Build a Career That{" "}
                <span className="bg-gradient-to-r from-[#00FF85] to-[#00CC6A] bg-clip-text text-transparent">
                  Pays You What You're Worth
                </span>
              </h1>
              <p className="mb-10 text-xl leading-relaxed text-gray-400">
                Life insurance is a trillion-dollar industry and one of the few career paths where new entrants can
                earn six figures in their first year with the right training and systems.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/FreeWebinar"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#00FF85] px-8 py-4 text-lg font-semibold text-[#0A0A0B] transition-all hover:bg-[#00E077]"
                >
                  Watch the Free Webinar
                </Link>
                <Link
                  to="/ApplyNow"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[#00FF85]/30"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F7F6] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-[#0A0A0B] md:text-5xl">
                Why Life Insurance Is a{" "}
                <span className="bg-gradient-to-r from-[#0F2922] to-[#00CC6A] bg-clip-text text-transparent">
                  Powerful Career
                </span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careerCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:shadow-lg">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A0A0B] transition-colors group-hover:bg-[#0F2922]">
                      <Icon className="h-6 w-6 text-[#00FF85]" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#0A0A0B]">{card.title}</h3>
                    <p className="leading-relaxed text-gray-500">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// a_day_in_the_life</span>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">What a Typical Day Looks Like</h2>
            </div>
            <div className="space-y-4">
              {dayTimeline.map((item) => (
                <div
                  key={`${item.time}-${item.activity}`}
                  className="flex items-center gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-[#00FF85]/15"
                >
                  <div className={`h-3 w-3 shrink-0 rounded-full ${item.color}`} />
                  <span className="w-20 shrink-0 font-mono text-sm text-gray-500">{item.time}</span>
                  <span className="text-lg text-white">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F2922] px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Ready to Take the First Step?</h2>
            <p className="mb-10 text-lg text-gray-400">
              No experience needed. We provide everything you need to start building a profitable insurance business.
            </p>
            <Link
              to="/FreeWebinar"
              className="inline-flex items-center rounded-2xl bg-[#00FF85] px-10 py-5 text-lg font-semibold text-[#0A0A0B] transition-all hover:bg-[#00E077]"
            >
              Watch the Free Webinar
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
};

export default AgentOpportunity;
