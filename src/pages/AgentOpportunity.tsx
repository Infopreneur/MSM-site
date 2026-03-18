import { ArrowRight, BadgeCheck, BriefcaseBusiness, GraduationCap, Handshake, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

const highlights = [
  { title: "Career launch path", icon: BriefcaseBusiness, text: "A modern entry point into the life insurance business for people ready to build something substantial." },
  { title: "Training and mentorship", icon: GraduationCap, text: "Structured guidance from first steps through licensing, launch, and early production." },
  { title: "Supportive growth model", icon: Handshake, text: "Work with systems and people designed to help you stay focused and in motion." },
  { title: "Automation and workflow", icon: Workflow, text: "Builder CRM, reminders, follow-up flows, and booking systems create momentum." },
];

const AgentOpportunity = () => {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Agent opportunity</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                A Better Entry Into the Life Insurance Industry
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Built for motivated people pursuing a new career path, a second income stream, or an entrepreneurial business with modern infrastructure behind it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full bg-emerald-500 px-6 text-white hover:bg-emerald-600">
                  <Link to="/free-webinar">Watch Free Webinar</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-slate-300 px-6 text-slate-800">
                  <Link to="/apply-now">Apply Now</Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {[
              "You do not need prior insurance experience to begin.",
              "You can start with a part-time or full-time plan.",
              "Your next best step is the webinar, then a discovery conversation.",
            ].map((item) => (
              <div key={item} className="rounded-[2rem] bg-slate-950 p-6 text-white">
                <BadgeCheck className="h-6 w-6 text-emerald-300" />
                <p className="mt-4 text-base leading-8">{item}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link to="/free-webinar" className="inline-flex items-center text-sm font-semibold text-emerald-600">
              Move into the webinar funnel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
};

export default AgentOpportunity;
