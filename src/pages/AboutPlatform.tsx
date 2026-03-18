import { HeartHandshake, Lightbulb, ShieldCheck, Users, Workflow, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site-shell";

const values = [
  {
    icon: HeartHandshake,
    title: "Mission-Driven",
    description: "We exist to help new professionals enter the financial services industry and build meaningful careers.",
  },
  {
    icon: Users,
    title: "People First",
    description: "Every decision we make starts with what is best for our agents and their clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We replace outdated methods with modern technology, automation, and scalable systems.",
  },
  {
    icon: Workflow,
    title: "Execution",
    description: "Clear structure and accountability help new people move faster and build momentum.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We care deeply about helping families protect what matters most with the right solutions.",
  },
  {
    icon: Zap,
    title: "Growth",
    description: "We believe ordinary people can create extraordinary outcomes with the right support.",
  },
];

const AboutPlatform = () => {
  return (
    <SiteShell>
      <div className="bg-[#0A0A0B]">
        <section className="px-6 pb-20 pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// about_us</span>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                The{" "}
                <span className="bg-gradient-to-r from-[#00FF85] to-[#00CC6A] bg-clip-text text-transparent">
                  MoneySmart Movement
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-400">
                Since 2012, we've been on a mission to help people take control of their financial future through a
                career in life insurance and help families protect what matters most.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0F2922] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// our_mission</span>
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">A Movement Built on Purpose</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-400">
                  Since 2012, the MoneySmart Movement has helped over 100,000 people enter the life insurance
                  industry. Many have gone on to replace their full-time incomes, retire their parents and spouses,
                  travel the world, and learn to live a life of meaning and purpose.
                </p>
                <p className="text-lg leading-relaxed text-gray-400">
                  We focus entirely on people new to the industry. Through modern technology, proven systems, hands-on
                  training, and dedicated mentorship, we give every new agent the foundation they need to succeed from
                  day one.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100K+", label: "People Helped" },
                  { value: "2012", label: "Year Founded" },
                  { value: "50", label: "States Nationwide" },
                  { value: "24/7", label: "Support Available" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 text-center">
                    <div className="mb-1 text-3xl font-bold text-[#00FF85]">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F4F7F6] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-[#0A0A0B] md:text-5xl">Our Values</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all hover:shadow-lg">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A0A0B] transition-colors group-hover:bg-[#0F2922]">
                      <Icon className="h-6 w-6 text-[#00FF85]" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#0A0A0B]">{value.title}</h3>
                    <p className="leading-relaxed text-gray-500">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Join the MoneySmart Movement</h2>
            <p className="mb-10 text-lg text-gray-400">
              Over 100,000 people have already taken the first step. Be next. Build a life of income, freedom, and
              purpose.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/ApplyNow"
                className="inline-flex items-center justify-center rounded-2xl bg-[#00FF85] px-8 py-4 text-lg font-semibold text-[#0A0A0B] transition-all hover:bg-[#00E077]"
              >
                Apply Now
              </Link>
              <Link
                to="/BookCall"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[#00FF85]/30"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
};

export default AboutPlatform;
