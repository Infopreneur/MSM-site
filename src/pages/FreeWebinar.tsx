import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { WebinarForm } from "@/components/lead-forms";
import { SiteShell } from "@/components/site-shell";

const painPoints = [
  "You have big dreams, but the path you're on won't get you there.",
  "After years in the workforce, you don't have much to show for it.",
  'You often think, "There HAS to be more to life than this..."',
  "You feel overworked and underpaid for the value you offer.",
  "You desire more flexibility over when, where, and how much you work.",
  "You're working hard at a job that you hate or that won't make you wealthy.",
];

const webinarBenefits = [
  "How complete beginners get started in life insurance",
  "What the MoneySmart Movement platform actually includes",
  "How agents create side income or six-figure careers",
  "The next steps for licensing, training, and mentorship",
];

const FreeWebinar = () => {
  const scrollToForm = () => {
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SiteShell>
      <div className="bg-[#0A0A0B]">
        <div className="bg-[#00FF85] py-2.5 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#0A0A0B]">
            FREE LIVE WEBINAR - Limited Spots Available
          </span>
        </div>

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-16">
          <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-[#00FF85] opacity-[0.04] blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#00FF85] opacity-[0.03] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00FF85]/20 bg-[#00FF85]/10 px-5 py-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#00FF85]" />
              <span className="text-sm font-semibold uppercase tracking-wide text-[#00FF85]">Free Live Training</span>
            </div>
            <h1 className="mb-8 text-5xl font-bold leading-[1] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-white">How To Launch a</span>
              <br />
              <span className="bg-gradient-to-r from-[#00FF85] to-[#00CC6A] bg-clip-text text-transparent">
                Life Insurance Career
              </span>
              <br />
              <span className="text-white">Without Experience,</span>
              <br />
              <span className="text-white">Time, or Much Money</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              Whether you want to build a <span className="font-semibold text-[#00FF85]">side income</span> or a{" "}
              <span className="font-semibold text-[#00FF85]">6-figure business</span>, attend our FREE live webinar to
              discover how simple it really is.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="animate-pulse-green inline-flex items-center gap-3 rounded-2xl bg-[#00FF85] px-10 py-5 text-xl font-bold text-[#0A0A0B] transition-all duration-300 hover:bg-[#00E077] hover:shadow-[0_0_60px_rgba(0,255,133,0.4)]"
            >
              YES! I WANT TO ATTEND
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </section>

        <section className="bg-[#0F2922] px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Can You Relate?</h2>
              <p className="text-lg text-gray-400">If any of these sound familiar, this webinar was made for you.</p>
            </div>
            <div className="space-y-4">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-colors hover:border-[#00FF85]/15"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00FF85]/15">
                    <Check className="h-4 w-4 text-[#00FF85]" />
                  </div>
                  <span className="text-lg leading-relaxed text-white/90">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-14 text-center">
              <p className="mb-4 text-2xl font-bold text-white md:text-3xl">If Any of This Struck a Chord With You...</p>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-400">
                You owe it to yourself to discover how thousands of people just like you have built a life of{" "}
                <span className="font-semibold text-[#00FF85]">income, freedom, and purpose</span> through life
                insurance.
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-2xl bg-[#00FF85] px-10 py-5 text-xl font-bold text-[#0A0A0B] transition-all hover:bg-[#00E077]"
              >
                YES! I WANT TO ATTEND
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// what_you_get</span>
              <h2 className="text-4xl font-bold text-white md:text-5xl">What You'll Learn In The Webinar</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {webinarBenefits.map((item) => (
                <div key={item} className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00FF85]/10">
                    <CheckCircle2 className="h-6 w-6 text-[#00FF85]" />
                  </div>
                  <p className="text-lg leading-relaxed text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F2922] px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// register_now</span>
              <h2 className="text-4xl font-bold text-white md:text-5xl">Reserve Your Seat</h2>
              <p className="mt-4 text-lg text-gray-400">
                Limited spots are available for each live session. Register now to lock in your seat.
              </p>
            </div>
            <WebinarForm />
          </div>
        </section>
      </div>
    </SiteShell>
  );
};

export default FreeWebinar;
