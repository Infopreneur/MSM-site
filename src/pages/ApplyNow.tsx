import { SiteShell } from "@/components/site-shell";
import { ApplicationForm } from "@/components/lead-forms";

const ApplyNow = () => {
  return (
    <SiteShell>
      <div className="min-h-screen bg-[#0A0A0B] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// apply_now</span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Start Your Application</h1>
            <p className="text-lg leading-relaxed text-gray-400">
              Take the first step toward building your life insurance career. Fill out the form below and we'll be in
              touch.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </div>
    </SiteShell>
  );
};

export default ApplyNow;
