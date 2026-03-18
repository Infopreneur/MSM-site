import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-forms";

const BookCall = () => {
  return (
    <SiteShell>
      <main className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Book a call</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Schedule a Discovery or Consultation Conversation
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Opportunity-focused visitors can request a discovery call, while insurance-focused visitors can request a consultation and move into the appropriate pipeline.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
              <p>• Discovery calls support the webinar-to-application journey.</p>
              <p>• Consultation requests support insurance and annuity conversations.</p>
              <p>• All submissions are structured for calendar booking and automated follow-up.</p>
            </div>
          </div>
          <LeadForm
            variant="call"
            title="Request a Call"
            description="Choose your next conversation and prepare your lead for pipeline routing, nurturing, and calendar follow-up."
            ctaLabel="Request Call"
            showInterest
          />
        </div>
      </main>
    </SiteShell>
  );
};

export default BookCall;
