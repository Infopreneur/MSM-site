import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-forms";

const ApplyNow = () => {
  return (
    <SiteShell>
      <main className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Apply now</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Start Your Agent Application
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Submit your information to enter the application flow, route into CRM, and receive next-step communication.
            </p>
          </div>
          <LeadForm
            variant="application"
            title="Agent Application"
            description="Complete the short application and we will route your submission for review, follow-up, and next steps."
            ctaLabel="Submit Application"
            showInterest
          />
        </div>
      </main>
    </SiteShell>
  );
};

export default ApplyNow;
