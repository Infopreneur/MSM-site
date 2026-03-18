import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Video } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-forms";
import { Badge } from "@/components/ui/badge";

const bullets = [
  "See the exact path to start in life insurance even if you're brand new",
  "Understand the systems, mentorship, and automation behind faster launch",
  "Learn how discovery calls, licensing, and business setup fit together",
  "Get clarity on whether this opportunity fits your goals and schedule",
];

const FreeWebinar = () => {
  return (
    <SiteShell>
      <main className="bg-white">
        <section className="pt-8 sm:pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div className="max-w-2xl">
                  <Badge className="rounded-full border border-emerald-400/20 bg-emerald-500/15 px-4 py-1.5 text-emerald-300 hover:bg-emerald-500/15">
                    Primary conversion event
                  </Badge>
                  <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
                    Watch the Free Webinar and See How to Launch a Modern Life Insurance Business
                  </h1>
                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    A focused overview of the opportunity, support model, and next steps for motivated people ready to build income in a new career path.
                  </p>
                  <div className="mt-8 space-y-4">
                    {bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-white/8 bg-white/5 p-4">
                        <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                        <p className="text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Authority</p>
                      <p className="mt-2 text-xl font-semibold">Established in 2012</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Track record</p>
                      <p className="mt-2 text-xl font-semibold">100,000+ helped enter the industry</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">Automations</p>
                      <p className="mt-2 text-xl font-semibold">SMS + email reminders</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white p-3 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                  <LeadForm
                    variant="webinar"
                    title="Register Now"
                    description="Reserve your webinar spot and route your registration into CRM, reminders, and next-step follow-up."
                    ctaLabel="Register Now"
                    showInterest
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <div className="flex items-center gap-3 text-emerald-600">
                  <Video className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em]">Webinar preview</p>
                </div>
                <div className="mt-6 flex min-h-[320px] items-center justify-center rounded-[1.75rem] bg-slate-50 p-8 text-center text-slate-900">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_40px_rgba(16,185,129,0.24)]">
                      <Video className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold">Modern overview, simple next steps</h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                      This block is ready for your webinar embed or short intro video while preserving the same high-converting content structure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[2rem] bg-emerald-500 p-7 text-white shadow-[0_24px_60px_rgba(16,185,129,0.2)]">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">Urgency</p>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">Seats are limited for the next session.</h3>
                  <p className="mt-3 text-sm leading-7 text-emerald-50">
                    Register now to receive the webinar access link, automated reminders, and follow-up instructions for the next step.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                  <div className="flex items-center gap-3 text-slate-900">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">What happens next</p>
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                    <p>1. Your registration enters the webinar pipeline stage.</p>
                    <p>2. SMS and email reminders are triggered automatically.</p>
                    <p>3. Qualified attendees are invited into the discovery call flow.</p>
                  </div>
                  <a href="#top" className="mt-6 inline-flex items-center text-sm font-medium text-emerald-600">
                    Register above
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
};

export default FreeWebinar;
