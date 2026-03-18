import { CheckCircle2 } from "lucide-react";
import { DiscoveryCallForm } from "@/components/lead-forms";
import { SiteShell } from "@/components/site-shell";

const talkingPoints = [
  {
    title: "Learn about the opportunity",
    description: "Understand the income potential and career path.",
  },
  {
    title: "See the platform in action",
    description: "Get a walkthrough of our modern tools and systems.",
  },
  {
    title: "Ask questions",
    description: "Get answers from an experienced team member.",
  },
  {
    title: "No obligation",
    description: "Simply explore if this is the right fit for you.",
  },
];

const BookCall = () => {
  return (
    <SiteShell>
      <div className="min-h-screen bg-[#0A0A0B] px-6 pb-20 pt-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 block font-mono text-sm uppercase tracking-widest text-[#00FF85]">// discovery_call</span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Book a Discovery Call</h1>
              <p className="mb-10 text-lg leading-relaxed text-gray-400">
                Learn more about building a career in life insurance. This is a no-pressure conversation to explore if
                our platform is the right fit for your goals.
              </p>
              <div className="space-y-6">
                {talkingPoints.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00FF85]/10">
                      <CheckCircle2 className="h-4 w-4 text-[#00FF85]" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="mt-0.5 text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <DiscoveryCallForm />
          </div>
        </div>
      </div>
    </SiteShell>
  );
};

export default BookCall;
