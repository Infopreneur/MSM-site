import { ArrowRight, BadgeCheck, CalendarDays, ChevronRight, CirclePlay, MenuSquare, RadioTower, ShieldCheck, Users2, Workflow } from "lucide-react";
import logo from "@/assets/favicon-msm.png";
import { LeadForm } from "@/components/lead-forms";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

const authorityStats = [
  { value: "100K+", label: "People Helped" },
  { value: "2012", label: "Year Established" },
  { value: "50", label: "States Nationwide" },
];

const platformCards = [
  {
    title: "Builder CRM",
    body: "Lead capture, nurture, pipelines, and follow-up routing built into a single operating system.",
    icon: Workflow,
  },
  {
    title: "Lead Generation",
    body: "Modern lead flow and appointment activity to keep new agents focused on conversations that move forward.",
    icon: RadioTower,
  },
  {
    title: "Automation",
    body: "Text and email sequences support quick response time and consistent follow-up from day one.",
    icon: MenuSquare,
  },
  {
    title: "Training & Mentorship",
    body: "Simple onboarding, field guidance, and support for people entering the industry without prior experience.",
    icon: Users2,
  },
];

const testimonials = [
  {
    name: "Danielle R.",
    role: "Career Changer",
    result: "Licensed and writing business in under 4 months",
    quote: "I came in with no experience and finally felt like there was a real system. The training and follow-up tools made the path clear.",
  },
  {
    name: "Marcus T.",
    role: "Part-Time Builder",
    result: "Built a second income stream while working full-time",
    quote: "The platform gave me structure, mentorship, and a better way to move from interest to appointments without guessing.",
  },
  {
    name: "Ashley P.",
    role: "Entrepreneur",
    result: "Scaled quickly with support and automation",
    quote: "What stood out was how modern everything felt. There was training, support, systems, and a clear next step at every point.",
  },
];

const audience = ["Career changers", "Entrepreneurs", "Part-time income seekers", "People new to life insurance"];
const steps = ["Watch the free webinar", "Speak with the team", "Get licensed and trained", "Launch with mentorship and systems"];
const insuranceCards = ["Term Life Insurance", "Permanent Life Insurance", "Indexed Universal Life", "Modern Annuities"];

const Index = () => {
  return (
    <SiteShell>
      <main id="top" className="overflow-hidden bg-[#050607] text-white">
        <section className="relative pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,95,52,0.26),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="relative mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
              <div className="max-w-[640px]">
                <div className="inline-flex rounded-full border border-[#1f5d36] bg-[#0b1b12] px-5 py-2 text-sm font-semibold text-[#41f07a]">
                  <span className="mr-3 mt-[2px] inline-block h-2.5 w-2.5 rounded-full bg-[#41f07a]" />
                  Now Accepting Applications
                </div>
                <h1 className="mt-8 text-[54px] font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-[76px] lg:text-[92px]">
                  Start a Career in
                  <span className="mt-2 block text-[#32ef72]">Life Insurance</span>
                </h1>
                <p className="mt-8 max-w-[620px] text-[22px] leading-[1.45] text-white/62 sm:text-[23px]">
                  Since 2012, the MoneySmart Movement has helped over 100,000 people build careers in life insurance — replacing incomes, retiring loved ones, and living with purpose.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="h-[110px] justify-between rounded-[22px] bg-[#39f277] px-10 text-left text-[24px] font-semibold leading-[1.25] text-[#04110a] shadow-none hover:bg-[#4cf688] sm:min-w-[364px]">
                    <a href="#webinar">
                      <span>Watch Free Webinar</span>
                      <ArrowRight className="h-7 w-7" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-[110px] justify-start rounded-[22px] border border-white/12 bg-transparent px-10 text-left text-[24px] font-semibold leading-[1.25] text-white hover:bg-white/5 sm:min-w-[320px]">
                    <a href="#apply">
                      <CirclePlay className="mr-4 h-7 w-7" />
                      <span>Apply Now</span>
                    </a>
                  </Button>
                </div>
                <div className="mt-16 border-t border-white/8 pt-10">
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-10">
                    {authorityStats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-[54px] font-semibold leading-none tracking-[-0.05em] text-white">{stat.value}</div>
                        <div className="mt-3 text-[18px] text-white/42">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[34px] border border-white/6 bg-[linear-gradient(180deg,rgba(9,14,12,0.96),rgba(8,12,10,0.92))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-7">
                <div className="rounded-[28px] bg-[#08110c] p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-[#ff6b6b]" />
                      <span className="h-4 w-4 rounded-full bg-[#f9c74f]" />
                      <span className="h-4 w-4 rounded-full bg-[#39f277]" />
                    </div>
                    <span className="text-[15px] text-white/35">Agent Dashboard</span>
                  </div>
                  <div className="mt-12 flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[17px] text-white/42">Monthly Earnings</p>
                      <p className="mt-2 text-[64px] font-semibold leading-none tracking-[-0.05em] text-white">$14,820</p>
                    </div>
                    <p className="pb-3 text-[18px] font-semibold text-[#39f277]">+23.5%</p>
                  </div>
                  <div className="mt-10 flex h-[210px] items-end gap-3 sm:gap-4">
                    {[28, 36, 24, 44, 32, 52, 40, 60, 48, 76, 56, 88].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-[8px] bg-[linear-gradient(180deg,rgba(63,207,110,0.88),rgba(18,72,43,0.9))]" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                      ["47", "Active Leads"],
                      ["12", "Appointments"],
                      ["8", "Policies Sold"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-[20px] bg-white/5 px-5 py-4 text-center">
                        <div className="text-[40px] font-semibold tracking-[-0.04em] text-white">{value}</div>
                        <div className="mt-1 text-[16px] text-white/38">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-[26px] border border-white/7 bg-white/[0.03] p-4 sm:p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#13331f] text-[#39f277]">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-white">New Lead</p>
                    <p className="text-[15px] leading-6 text-white/46">Sarah M. requested a consultation for term life insurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="opportunity" className="bg-[#050607] py-14 sm:py-20">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {platformCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[28px] border border-white/6 bg-[#0a0d0e] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#102117] text-[#39f277]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-[27px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">{card.title}</h2>
                    <p className="mt-4 text-[17px] leading-8 text-white/60">{card.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-[28px] border border-white/6 bg-[#0a0d0e] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#39f277]">Agent opportunity</p>
                <p className="mt-2 text-[25px] font-semibold tracking-[-0.03em] text-white">Modern systems, support, and a simple path for people entering the industry</p>
              </div>
              <Button asChild className="h-12 rounded-[16px] bg-[#39f277] px-6 text-sm font-semibold text-[#04110a] hover:bg-[#4cf688]">
                <a href="#webinar">Register for Webinar</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f5f7f6] py-16 text-[#141917] sm:py-24">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="rounded-[34px] bg-white p-7 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:p-10">
                <div className="inline-flex rounded-full bg-[#effaf2] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#15803d]">
                  About the platform
                </div>
                <h2 className="mt-6 text-[38px] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[54px]">
                  Built for new people entering life insurance with modern tools and mentorship
                </h2>
                <p className="mt-6 max-w-[700px] text-[18px] leading-8 text-[#4d5a55]">
                  MoneySmart Movement is a recruiting and growth platform focused on helping career changers, entrepreneurs, and part-time income seekers launch a real business in life insurance with training, systems, automation, and support.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Established in 2012",
                    "Helped 100,000+ people enter the industry",
                    "Builder CRM and workflow automation",
                    "Support, mentorship, and training",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-[#f8faf9] px-4 py-4 text-[16px] text-[#24312c]">
                      <BadgeCheck className="h-5 w-5 text-[#15a34a]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-8 h-12 rounded-[16px] bg-[#39f277] px-6 text-sm font-semibold text-[#04110a] hover:bg-[#4cf688]">
                  <a href="#webinar">Watch Free Webinar</a>
                </Button>
              </div>
              <div className="rounded-[34px] bg-[#08110c] p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-10">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="MoneySmart Movement" className="h-14 w-14 rounded-full border border-white/10 bg-white object-cover" />
                  <div>
                    <p className="text-[18px] font-semibold">MoneySmart Movement</p>
                    <p className="text-sm text-white/50">Modern recruiting and growth platform</p>
                  </div>
                </div>
                <div className="mt-10 space-y-4">
                  {[
                    {
                      title: "Launch support",
                      body: "Guidance for people starting from scratch and looking for a structured path into the industry.",
                    },
                    {
                      title: "Automation",
                      body: "Lead routing, nurture, and appointment flow aligned to the webinar-first conversion path.",
                    },
                    {
                      title: "Opportunity",
                      body: "A modern business model built for income growth, flexibility, and long-term purpose.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-[22px] font-semibold tracking-[-0.03em] text-white">{item.title}</p>
                      <p className="mt-2 text-[16px] leading-7 text-white/58">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050607] py-16 sm:py-24">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[760px]">
                <div className="inline-flex rounded-full border border-[#1f5d36] bg-[#0b1b12] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#39f277]">
                  Proof and testimonials
                </div>
                <h2 className="mt-6 text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[60px]">
                  Real people launching real income opportunities
                </h2>
              </div>
              <Button asChild className="h-12 rounded-[16px] bg-[#39f277] px-6 text-sm font-semibold text-[#04110a] hover:bg-[#4cf688]">
                <a href="#webinar">Watch Free Webinar</a>
              </Button>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[30px] border border-white/6 bg-[#0a0d0e] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-[linear-gradient(180deg,#3cf37b,#116b33)]" />
                    <div>
                      <p className="text-[19px] font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-white/50">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-[18px] leading-8 text-white/70">“{item.quote}”</p>
                  <div className="mt-7 rounded-[22px] bg-white/5 px-4 py-4 text-[15px] font-medium text-[#74f59c]">{item.result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7f6] py-16 text-[#141917] sm:py-24">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[34px] bg-[#08110c] p-7 text-white sm:p-10">
                <div className="inline-flex rounded-full border border-[#1f5d36] bg-[#0b1b12] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#39f277]">
                  Who this is for
                </div>
                <h2 className="mt-6 text-[38px] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[54px]">Designed for people who want a new path</h2>
                <div className="mt-8 space-y-4">
                  {audience.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-[22px] bg-white/5 px-4 py-4 text-[17px] text-white/88">
                      <ShieldCheck className="h-5 w-5 text-[#39f277]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[34px] bg-white p-7 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:p-10">
                <div className="inline-flex rounded-full bg-[#effaf2] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#15803d]">
                  How it works
                </div>
                <h2 className="mt-6 text-[38px] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-[54px]">A simple process to get started</h2>
                <div className="mt-8 space-y-4">
                  {steps.map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-[24px] border border-slate-200 bg-[#f8faf9] p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#39f277] text-lg font-semibold text-[#04110a]">{index + 1}</div>
                      <div className="pt-1 text-[18px] leading-7 text-[#24312c]">{step}</div>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-8 h-12 rounded-[16px] bg-[#39f277] px-6 text-sm font-semibold text-[#04110a] hover:bg-[#4cf688]">
                  <a href="#webinar">Register for Webinar</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="webinar" className="bg-[#050607] py-16 sm:py-24">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="pt-2">
                <div className="inline-flex rounded-full border border-[#1f5d36] bg-[#0b1b12] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#39f277]">
                  Free live webinar
                </div>
                <h2 className="mt-6 text-[42px] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[72px]">
                  How To Launch a
                  <span className="block text-[#32ef72]">Life Insurance Career</span>
                  Without Experience, Time, or Much Money
                </h2>
                <p className="mt-6 max-w-[700px] text-[19px] leading-8 text-white/62">
                  Whether you want to build a side income or a 6-figure business, attend our free live webinar to discover how simple it really is.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "See the webinar-first path for entering the industry",
                    "Understand the systems, automation, and mentorship available",
                    "Learn how the model supports career changers and part-time builders",
                    "Get the next steps for licensing, onboarding, and growth",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[22px] border border-white/6 bg-white/[0.03] px-4 py-4 text-[17px] leading-7 text-white/78">
                      <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#39f277]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 rounded-[24px] border border-[#1f5d36] bg-[#0b1b12] px-5 py-4 text-[#97fbb8]">
                  <CalendarDays className="h-5 w-5" />
                  <span className="text-[15px] font-medium">Seats are limited for each session. Register now to reserve your spot.</span>
                </div>
              </div>
              <LeadForm
                variant="webinar"
                dark
                title="Register For The Free Webinar"
                description="Reserve your seat and route the lead into the right Builder CRM or GoHighLevel workflow for follow-up, nurture, and booking."
                ctaLabel="Yes! I Want To Attend"
              />
            </div>
          </div>
        </section>

        <section id="insurance" className="bg-[#f5f7f6] py-16 text-[#141917] sm:py-24">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div>
                <div className="inline-flex rounded-full bg-[#effaf2] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#15803d]">
                  Insurance solutions
                </div>
                <h2 className="mt-6 text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[58px]">
                  Protection and retirement solutions for families and individuals
                </h2>
                <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-[#4d5a55]">
                  For product guidance, the consultation path stays separate from the opportunity funnel. Explore the right coverage and planning options with a licensed professional.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {insuranceCards.map((item) => (
                    <div key={item} className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 text-[19px] font-semibold tracking-[-0.02em] text-[#24312c] shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                      {item}
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-8 h-12 rounded-[16px] bg-[#39f277] px-6 text-sm font-semibold text-[#04110a] hover:bg-[#4cf688]">
                  <a href="#consultation">Schedule A Consultation</a>
                </Button>
              </div>
              <LeadForm
                variant="consultation"
                title="Schedule A Consultation"
                description="Use this path for insurance and annuity conversations. Lead records can route to product-specific pipelines, follow-up automation, and calendar booking flows."
                ctaLabel="Schedule A Consultation"
                showInterest
              />
            </div>
          </div>
        </section>

        <section id="apply" className="bg-[#050607] py-16 sm:py-24">
          <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-[38px] border border-white/6 bg-[linear-gradient(180deg,rgba(9,14,12,0.96),rgba(8,12,10,0.92))] px-6 py-8 sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between">
              <div className="max-w-[760px]">
                <div className="inline-flex rounded-full border border-[#1f5d36] bg-[#0b1b12] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#39f277]">
                  Final step
                </div>
                <h2 className="mt-6 text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[58px]">
                  Ready to see the opportunity, the systems, and the support for yourself?
                </h2>
                <p className="mt-5 max-w-[680px] text-[18px] leading-8 text-white/62">
                  Watch the free webinar first if you want the full breakdown. If you are already ready to move, apply now and we will guide you to the next step.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
                <Button asChild className="h-12 rounded-[16px] bg-[#39f277] px-6 text-sm font-semibold text-[#04110a] hover:bg-[#4cf688]">
                  <a href="#webinar">Watch Free Webinar</a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-[16px] border border-white/12 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/5">
                  <a href="#application-form">Apply Now</a>
                </Button>
              </div>
            </div>
            <div id="application-form" className="mt-8 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="rounded-[34px] border border-white/6 bg-[#0a0d0e] p-7 text-white sm:p-8">
                <h3 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em]">Apply to become an agent</h3>
                <p className="mt-4 text-[17px] leading-8 text-white/60">
                  This application path supports opportunity conversations only and does not replace the webinar-first journey. It is best for people who are ready to speak with the team now.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Career launch support",
                    "Builder CRM workflow access",
                    "Mentorship and training",
                    "Discovery call and next-step routing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-[22px] bg-white/5 px-4 py-4 text-[16px] text-white/80">
                      <BadgeCheck className="h-5 w-5 text-[#39f277]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LeadForm
                variant="application"
                dark
                title="Agent Application"
                description="Collect applicant details, assign the right opportunity pipeline stage, and trigger SMS, email nurture, and discovery-call follow-up in the connected CRM account."
                ctaLabel="Apply Now"
                showInterest
              />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
};

export default Index;
