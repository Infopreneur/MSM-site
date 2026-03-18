import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  HandCoins,
  HeartHandshake,
  Landmark,
  Quote,
  Shield,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site-shell";

const opportunityCards = [
  {
    icon: BriefcaseBusiness,
    title: "Built For New Agents",
    description:
      "No experience required. We train you from the ground up with comprehensive onboarding and step-by-step guidance.",
    metric: "Zero to Licensed",
  },
  {
    icon: Workflow,
    title: "Modern Systems",
    description:
      "Instead of outdated prospecting, agents use technology, automation, and marketing systems to grow their book of business.",
    metric: "Tech-First Approach",
  },
  {
    icon: HandCoins,
    title: "High Income Opportunity",
    description:
      "Life insurance provides one of the most powerful commission structures in financial services with uncapped earning potential.",
    metric: "Uncapped Earnings",
  },
  {
    icon: Users,
    title: "Mentorship & Support",
    description:
      "Work alongside experienced professionals who guide you through every stage of building your insurance business.",
    metric: "1-on-1 Coaching",
  },
];

const platformCards = [
  {
    icon: Workflow,
    title: "Builder CRM",
    description: "A powerful system designed to manage leads, appointments, and follow-ups all in one place.",
    tag: "Core System",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Marketing campaigns designed to generate new client opportunities on autopilot.",
    tag: "Growth",
  },
  {
    icon: ArrowRight,
    title: "Automation",
    description: "Email and SMS systems that nurture prospects automatically so you can focus on closing.",
    tag: "Efficiency",
  },
  {
    icon: BriefcaseBusiness,
    title: "Training",
    description: "Step-by-step onboarding and sales training that turns beginners into top performers.",
    tag: "Education",
  },
  {
    icon: Users,
    title: "Support",
    description: "Access to mentors and team support whenever you need guidance or have questions.",
    tag: "Community",
  },
];

const testimonials = [
  {
    name: "Maya Richardson",
    role: "Former Teacher -> Licensed Agent",
    quote:
      "I went from making $45K a year to earning six figures in my first 14 months. The training and systems made the transition seamless.",
    milestone: "$127K first year",
    image:
      "https://media.base44.com/images/public/69b1ddf216ec5b01a3d569cb/c4a12a964_generated_d8d2e898.png",
  },
  {
    name: "Carlos Mendez",
    role: "Former Restaurant Manager -> Agency Owner",
    quote:
      "The modern tools and automation let me build my book of business faster than I ever imagined. No cold calling, no door knocking.",
    milestone: "200+ clients in 18 months",
    image:
      "https://media.base44.com/images/public/69b1ddf216ec5b01a3d569cb/15da78a39_generated_584078c0.png",
  },
  {
    name: "Jennifer Park",
    role: "Part-Time -> Full-Time Agent",
    quote:
      "I started part-time while keeping my corporate job. Within 8 months, my insurance income exceeded my salary. I never looked back.",
    milestone: "Full-time in 8 months",
    image:
      "https://media.base44.com/images/public/69b1ddf216ec5b01a3d569cb/e47e73b8a_generated_c26825f9.png",
  },
];

const candidates = [
  "Professionals seeking a career change into financial services",
  "Entrepreneurs wanting unlimited income potential",
  "Individuals interested in the financial services industry",
  "People seeking a high-income part-time opportunity",
  "Motivated individuals willing to learn and grow",
  "Career-driven people looking for uncapped earnings",
];

const gettingStarted = [
  {
    number: "01",
    title: "Submit Your Application",
    description: "Fill out a quick application to tell us about yourself and your goals.",
  },
  {
    number: "02",
    title: "Attend a Discovery Call",
    description: "Meet with our team to learn about the opportunity and see if it's the right fit.",
  },
  {
    number: "03",
    title: "Complete Licensing",
    description: "We guide you through the licensing process with study materials and support.",
  },
  {
    number: "04",
    title: "Launch Your Business",
    description: "Start building your insurance business with our modern platform and mentorship.",
  },
];

const insuranceCards = [
  {
    icon: Shield,
    title: "Term Life Insurance",
    description: "Affordable protection designed to protect families and income during the years that matter most.",
  },
  {
    icon: HeartHandshake,
    title: "Permanent Life Insurance",
    description: "Lifetime coverage with long-term financial advantages and cash value accumulation.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Indexed Universal Life",
    description: "Flexible protection with tax-advantaged growth potential tied to market indexes.",
  },
  {
    icon: Landmark,
    title: "Modern Annuities",
    description: "Retirement income solutions designed for stability and guaranteed lifetime income.",
  },
];

const stats = [
  { value: "100K+", label: "People Helped" },
  { value: "2012", label: "Year Established" },
  { value: "50", label: "States Nationwide" },
];

const Index = () => {
  return (
    <SiteShell>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0B]">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-[#00FF85] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#00FF85] opacity-[0.05] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00FF85]/20 bg-[#00FF85]/5 px-4 py-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#00FF85]" />
                <span className="text-sm font-medium tracking-wide text-[#00FF85]">Now Accepting Applications</span>
              </div>
              <h1 className="mb-8 text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-white">Start a Career in</span>
                <br />
                <span className="bg-gradient-to-r from-[#00FF85] to-[#00CC6A] bg-clip-text text-transparent">
                  Life Insurance
                </span>
              </h1>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400 md:text-xl">
                Since 2012, the MoneySmart Movement has helped over 100,000 people build careers in life insurance
                replacing incomes, retiring loved ones, and living with purpose.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/ApplyNow"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#00FF85] px-8 py-4 text-lg font-semibold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] hover:shadow-[0_0_40px_rgba(0,255,133,0.3)]"
                >
                  Apply to Become an Agent
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/BookCall"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-[#00FF85]/30 hover:bg-white/5"
                >
                  Book a Discovery Call
                </Link>
              </div>
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass animate-float rounded-3xl p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-[#00FF85]" />
                    <span className="ml-2 text-sm text-white/30">Agent Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Monthly Earnings</div>
                        <div className="text-3xl font-bold text-white">$14,820</div>
                      </div>
                      <div className="text-sm font-medium text-[#00FF85]">+23.5%</div>
                    </div>
                    <div className="flex h-32 items-end gap-2">
                      {[35, 45, 30, 55, 40, 65, 50, 75, 60, 85, 70, 95].map((height) => (
                        <div
                          key={height}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#00FF85]/20 to-[#00FF85]/60"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { value: "47", label: "Active Leads" },
                      { value: "12", label: "Appointments" },
                      { value: "8", label: "Policies Sold" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <div className="text-xl font-bold text-white">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass absolute -right-4 top-1/3 max-w-[200px] rounded-2xl p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00FF85]/20">
                      <div className="h-3 w-3 rounded-full bg-[#00FF85]" />
                    </div>
                    <span className="text-sm font-medium text-white">New Lead</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Sarah M. requested a consultation for term life insurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
      </section>

      <section className="bg-[#0A0A0B] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// why_join</span>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              A Better Way to Enter the Life Insurance Industry
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#00FF85]/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00FF85]/10 transition-colors group-hover:bg-[#00FF85]/15">
                      <Icon className="h-7 w-7 text-[#00FF85]" />
                    </div>
                    <span className="text-xs tracking-wider text-gray-600">{card.metric}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{card.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-400">{card.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/FreeWebinar"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#00FF85] px-8 py-4 text-lg font-semibold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] hover:shadow-[0_0_40px_rgba(0,255,133,0.3)]"
            >
              Watch the Free Webinar
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F4F7F6] px-6 py-32">
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#0F2922]">// the_platform</span>
            <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-[#0A0A0B] md:text-5xl lg:text-6xl">
              Everything You Need To Build Your Insurance Business
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {platformCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-[#00FF85]/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A0A0B] transition-colors group-hover:bg-[#0F2922]">
                      <Icon className="h-6 w-6 text-[#00FF85]" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-gray-400">{card.tag}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0A0A0B]">{card.title}</h3>
                  <p className="leading-relaxed text-gray-500">{card.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/AgentOpportunity"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#0A0A0B] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#1A1A1B]"
            >
              See How It Works
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A0A0B] px-6 py-32">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#00FF85] opacity-[0.02] blur-[150px]" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// success_stories</span>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              New Agents Are Building Real Income
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((story) => (
              <div
                key={story.name}
                className="group overflow-hidden rounded-3xl border border-white/[0.06] transition-all duration-500 hover:border-[#00FF85]/20"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={story.image} alt={story.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full border border-[#00FF85]/20 bg-[#00FF85]/10 px-4 py-2">
                    <span className="text-sm font-semibold text-[#00FF85]">{story.milestone}</span>
                  </div>
                </div>
                <div className="bg-white/[0.02] p-8">
                  <Quote className="mb-4 h-8 w-8 text-[#00FF85]/30" />
                  <p className="mb-6 text-lg leading-relaxed text-gray-300">"{story.quote}"</p>
                  <div className="text-lg font-semibold text-white">{story.name}</div>
                  <div className="mt-1 text-sm text-gray-500">{story.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/ApplyNow"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#00FF85] px-8 py-4 text-lg font-semibold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] hover:shadow-[0_0_40px_rgba(0,255,133,0.3)]"
            >
              Start Your Application
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F2922] px-6 py-32">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#00FF85] opacity-[0.04] blur-[120px]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// ideal_candidates</span>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                This Opportunity Is{" "}
                <span className="bg-gradient-to-r from-[#00FF85] to-[#00CC6A] bg-clip-text text-transparent">
                  Ideal For
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-400">
                Whether you're looking to make a complete career transition or build a powerful second income stream,
                our platform is designed for ambitious individuals ready to take control of their financial future.
              </p>
            </div>
            <div className="space-y-5">
              {candidates.map((candidate) => (
                <div key={candidate} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00FF85]/10">
                    <Check className="h-4 w-4 text-[#00FF85]" />
                  </div>
                  <span className="text-lg leading-relaxed text-white/90">{candidate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#0F2922]">// get_started</span>
            <h2 className="text-4xl font-bold tracking-tight text-[#0A0A0B] md:text-5xl lg:text-6xl">
              Getting Started Is Simple
            </h2>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-16 hidden h-px bg-gradient-to-r from-[#00FF85]/20 via-[#00FF85]/40 to-[#00FF85]/20 md:block" />
            {gettingStarted.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative mx-auto mb-8 h-32 w-32">
                  <div className="absolute inset-0 rounded-3xl bg-[#F4F7F6] transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="mb-2 text-3xl font-bold text-[#0A0A0B]">{step.number}</div>
                    <span className="text-xs text-gray-400">STEP</span>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A0A0B]">{step.title}</h3>
                <p className="leading-relaxed text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/ApplyNow"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#00FF85] px-8 py-4 text-lg font-semibold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] hover:shadow-[0_0_40px_rgba(0,255,133,0.2)]"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7F6] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-3xl">
            <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#0F2922]">// insurance_preview</span>
            <h2 className="text-4xl font-bold tracking-tight text-[#0A0A0B] md:text-5xl lg:text-6xl">
              Modern Insurance Solutions
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              We offer a full suite of modern life insurance and retirement solutions designed to protect your family
              and build your financial future.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {insuranceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-gray-100 bg-white p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A0A0B]">
                    <Icon className="h-7 w-7 text-[#00FF85]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0A0A0B]">{card.title}</h3>
                  <p className="leading-relaxed text-gray-500">{card.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/InsuranceSolutions"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#0A0A0B] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#1A1A1B]"
            >
              Explore Insurance Solutions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0B] px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// next_step</span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Build Income, Freedom, and Purpose?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-400">
            Attend the free live webinar to see how the MoneySmart Movement helps brand-new agents launch and grow.
          </p>
          <Link
            to="/FreeWebinar"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#00FF85] px-10 py-5 text-lg font-semibold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] hover:shadow-[0_0_60px_rgba(0,255,133,0.35)]"
          >
            Watch the Free Webinar
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
};

export default Index;
