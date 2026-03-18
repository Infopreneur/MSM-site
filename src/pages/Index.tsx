import { ArrowRight, BadgeCheck, CalendarDays, ChevronRight, CircleDollarSign, LaptopMinimal, MessageSquareText, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const whyJoin = [
  {
    title: "Built For New Agents",
    description:
      "Designed for career changers, first-time entrants, and ambitious professionals ready to launch something meaningful.",
    icon: Users,
  },
  {
    title: "Modern Systems",
    description:
      "Operate with CRM, automation, and lead workflows that give you a more scalable way to build your business.",
    icon: Workflow,
  },
  {
    title: "High Income Opportunity",
    description:
      "Create a performance-based income path with the support, structure, and momentum to grow over time.",
    icon: CircleDollarSign,
  },
  {
    title: "Mentorship & Support",
    description:
      "Get guidance from a platform established in 2012 with a track record of helping people enter the industry.",
    icon: ShieldCheck,
  },
];

const platformFeatures = [
  "Builder CRM powered workflows",
  "Lead generation systems",
  "SMS and email automation",
  "Training systems for launch and growth",
  "Ongoing mentorship and support",
];

const candidateTypes = [
  "Career changers",
  "Entrepreneurs",
  "Financially ambitious individuals",
  "Part-time income seekers",
  "Growth-minded professionals",
];

const steps = [
  "Register for the webinar",
  "Attend a discovery session",
  "Complete licensing",
  "Launch your business",
];

const testimonials = [
  {
    quote:
      "I came in with no industry background and left the first 90 days with a real business plan, support, and momentum.",
    name: "Danielle R.",
    role: "Career Changer",
    milestone: "Licensed and producing in under 4 months",
  },
  {
    quote:
      "The systems made everything clearer. I wasn't guessing what to do next—there was a path and a team behind it.",
    name: "Marcus T.",
    role: "Part-Time Builder",
    milestone: "Built a second income stream alongside full-time work",
  },
  {
    quote:
      "What stood out most was the combination of mentorship, automation, and simple steps to get moving fast.",
    name: "Ashley P.",
    role: "New Entrepreneur",
    milestone: "Scaled from licensing to consistent client activity",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      <section className="border-b border-emerald-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                MoneySmart Movement
              </p>
              <p className="text-xs text-slate-500">Modern insurance growth platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/agent-opportunity" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Agent Opportunity
            </Link>
            <Link to="/about-platform" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              About Platform
            </Link>
            <Link to="/insurance-solutions" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Insurance Solutions
            </Link>
            <Link to="/free-webinar" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Free Webinar
            </Link>
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
      </section>

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Badge className="rounded-full bg-emerald-50 px-4 py-1.5 text-emerald-700 hover:bg-emerald-50">
              Established 2012 • Helped 100,000+ people enter the industry
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Start a Career in Life Insurance
              <span className="block text-emerald-500">Build a High-Income Business With Modern Tools</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We help motivated individuals launch a successful insurance business with training, systems, automation, and mentorship.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-emerald-500 px-7 text-white hover:bg-emerald-600">
                <Link to="/free-webinar">
                  Watch Free Webinar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 px-7 text-slate-800">
                <Link to="/apply-now">Apply to Become an Agent</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["100,000+", "People helped enter the industry"],
                ["2012", "Platform foundation"],
                ["24/7", "Automation and workflow support"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-2xl font-semibold text-slate-950">{value}</p>
                  <p className="mt-1 text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-emerald-50" />
            <div className="grid gap-4 rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Launch dashboard</p>
                    <p className="mt-1 text-xl font-semibold">Weekly growth overview</p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-emerald-300">Live systems</div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["42", "Leads"],
                    ["18", "Follow-ups"],
                    ["7", "Booked calls"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-white/5 p-4">
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_0.95fr]">
                <div className="rounded-[1.75rem] bg-slate-100 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                      <LaptopMinimal className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Tech-enabled workflow</p>
                      <p className="text-sm text-slate-600">CRM, nurture, and booking in one system</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      "Lead capture into Builder CRM",
                      "Automated SMS and email sequences",
                      "Calendar-driven discovery scheduling",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm text-slate-700">
                        <BadgeCheck className="h-4 w-4 text-emerald-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.75rem] bg-emerald-500 p-5 text-white">
                  <p className="text-sm text-emerald-100">Advisor activity</p>
                  <p className="mt-1 text-xl font-semibold">Meet clients with confidence</p>
                  <div className="mt-6 rounded-[1.5rem] bg-white/15 p-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-white/30" />
                      <div>
                        <p className="font-medium">Client consultation</p>
                        <p className="text-sm text-emerald-50">Protection review + long-term planning</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-emerald-50">
                      <CalendarDays className="h-4 w-4" />
                      Discovery and consultation flow connected
                    </div>
                  </div>
                  <div className="mt-4 rounded-[1.5rem] bg-white p-4 text-slate-900">
                    <p className="text-sm text-slate-500">Next step</p>
                    <p className="mt-1 font-semibold">Free webinar registration</p>
                    <Link to="/free-webinar" className="mt-3 inline-flex items-center text-sm font-medium text-emerald-600">
                      See how it works
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Why join</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A Better Way to Enter the Life Insurance Industry
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyJoin.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-[2rem] border-0 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Button asChild className="mt-8 rounded-full bg-emerald-500 px-6 text-white hover:bg-emerald-600">
            <Link to="/free-webinar">Watch Free Webinar</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">The platform</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Everything You Need To Build Your Insurance Business
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              MoneySmart Movement brings together systems, education, and support so your launch is structured from day one.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformFeatures.map((feature, index) => (
              <div key={feature} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <p className="mt-4 text-lg font-medium text-slate-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="rounded-full border-emerald-200 px-6 text-emerald-700">
            <Link to="/free-webinar">See How It Works</Link>
          </Button>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Success stories</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                New Agents Are Building Real Income
              </h2>
            </div>
            <Button asChild className="rounded-full bg-emerald-500 px-6 text-white hover:bg-emerald-600">
              <Link to="/free-webinar">Watch Free Webinar</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="rounded-[2rem] border-0 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <CardContent className="p-6">
                  <MessageSquareText className="h-8 w-8 text-emerald-500" />
                  <p className="mt-5 text-base leading-8 text-slate-700">“{item.quote}”</p>
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                    <p className="mt-3 text-sm font-medium text-emerald-600">{item.milestone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Ideal candidate</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              This Opportunity Is Ideal For
            </h2>
            <div className="mt-8 space-y-4">
              {candidateTypes.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 text-slate-100">
                  <BadgeCheck className="h-5 w-5 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Getting Started Is Simple
            </h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 rounded-full bg-emerald-500 px-6 text-white hover:bg-emerald-600">
              <Link to="/free-webinar">Watch Free Webinar</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              See the model, the support, and the path to launch in the free webinar.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-white px-7 text-emerald-600 hover:bg-emerald-50">
              <Link to="/free-webinar">Watch Free Webinar</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-transparent px-7 text-white hover:bg-white/10">
              <Link to="/apply-now">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
