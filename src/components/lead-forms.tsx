import { useMemo, useState } from "react";
import { CalendarRange, CheckCircle2, Mail, MessageSquare, Phone, Send, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormVariant = "webinar" | "application" | "consultation" | "call";

type LeadFormProps = {
  variant: FormVariant;
  title: string;
  description: string;
  ctaLabel: string;
  showInterest?: boolean;
  dark?: boolean;
};

const baseConfig = {
  tenantId: "default-money-smart",
  crmProvider: "GoHighLevel / Builder CRM",
  crmWebhookUrl: "https://example.com/api/ghl-webhook",
  calendarUrl: "https://calendar.example.com/moneysmart",
  webinarUrl: "https://webinar.example.com/moneysmart",
  automation: {
    pipelineStage: {
      webinar: "Webinar Registered",
      application: "Agent Application Submitted",
      consultation: "Insurance Consultation Requested",
      call: "Discovery Call Requested",
    },
    smsFollowUp: true,
    emailNurture: true,
    calendarBooking: true,
  },
};

export function LeadForm({ variant, title, description, ctaLabel, showInterest = false, dark = false }: LeadFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    licensed: "No",
    schedule: "Full-time",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const pipelineStage = useMemo(() => baseConfig.automation.pipelineStage[variant], [variant]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      tenantId: baseConfig.tenantId,
      crmProvider: baseConfig.crmProvider,
      crmWebhookUrl: baseConfig.crmWebhookUrl,
      destinationCalendarUrl: baseConfig.calendarUrl,
      destinationWebinarUrl: baseConfig.webinarUrl,
      pipelineStage,
      automation: baseConfig.automation,
      formType: variant,
      submittedAt: new Date().toISOString(),
      lead: formState,
    };

    console.log("MoneySmart Movement lead payload", payload);
    setSubmitted(true);
  };

  const cardClass = dark
    ? "rounded-[28px] border border-white/10 bg-[#0b0d0f] text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
    : "rounded-[28px] border border-slate-200 bg-white text-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.08)]";

  const inputClass = dark
    ? "rounded-[18px] border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35"
    : "rounded-[18px] border-slate-200 pl-10";

  return (
    <Card className={cardClass}>
      <CardContent className="p-5 sm:p-7">
        {submitted ? (
          <div className={`rounded-[24px] p-6 ${dark ? "bg-[#101416]" : "bg-emerald-50"}`}>
            <CheckCircle2 className="h-10 w-10 text-[#39f277]" />
            <h3 className={`mt-4 text-2xl font-semibold ${dark ? "text-white" : "text-slate-950"}`}>You&apos;re in.</h3>
            <p className={`mt-2 text-sm leading-7 ${dark ? "text-white/70" : "text-slate-600"}`}>
              Your information is ready for lead creation, pipeline assignment, SMS follow-up, email nurture, and calendar booking.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className={`rounded-[20px] p-4 ${dark ? "bg-white/5" : "bg-white"}`}>
                <p className={`font-medium ${dark ? "text-white" : "text-slate-950"}`}>CRM provider</p>
                <p className={`mt-1 text-sm ${dark ? "text-white/55" : "text-slate-500"}`}>{baseConfig.crmProvider}</p>
              </div>
              <div className={`rounded-[20px] p-4 ${dark ? "bg-white/5" : "bg-white"}`}>
                <p className={`font-medium ${dark ? "text-white" : "text-slate-950"}`}>Multi-tenant ready</p>
                <p className={`mt-1 text-sm ${dark ? "text-white/55" : "text-slate-500"}`}>Clone and swap tenantId, webhook URL, and workflow mapping.</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <div className={`inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "bg-[#102117] text-[#7ef9a7]" : "bg-emerald-50 text-emerald-700"}`}>
                {pipelineStage}
              </div>
              <h3 className={`mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] ${dark ? "text-white" : "text-slate-950"}`}>{title}</h3>
              <p className={`mt-3 text-sm leading-7 ${dark ? "text-white/68" : "text-slate-600"}`}>{description}</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${variant}-name`} className={dark ? "text-white/80" : ""}>Name</Label>
                  <div className="relative">
                    <UserRound className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${dark ? "text-white/35" : "text-slate-400"}`} />
                    <Input id={`${variant}-name`} required value={formState.name} onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))} className={inputClass} placeholder="Your full name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${variant}-email`} className={dark ? "text-white/80" : ""}>Email</Label>
                  <div className="relative">
                    <Mail className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${dark ? "text-white/35" : "text-slate-400"}`} />
                    <Input id={`${variant}-email`} type="email" required value={formState.email} onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))} className={inputClass} placeholder="you@example.com" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor={`${variant}-phone`} className={dark ? "text-white/80" : ""}>Phone</Label>
                  <div className="relative">
                    <Phone className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${dark ? "text-white/35" : "text-slate-400"}`} />
                    <Input id={`${variant}-phone`} required value={formState.phone} onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))} className={inputClass} placeholder="(555) 555-5555" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${variant}-state`} className={dark ? "text-white/80" : ""}>State</Label>
                  <Input id={`${variant}-state`} required value={formState.state} onChange={(event) => setFormState((current) => ({ ...current, state: event.target.value }))} className={dark ? "rounded-[18px] border-white/10 bg-white/5 text-white placeholder:text-white/35" : "rounded-[18px] border-slate-200"} placeholder="Your state" />
                </div>
              </div>

              {(variant === "application" || variant === "webinar" || variant === "call") && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className={dark ? "text-white/80" : ""}>Licensed?</Label>
                    <Select value={formState.licensed} onValueChange={(value) => setFormState((current) => ({ ...current, licensed: value }))}>
                      <SelectTrigger className={dark ? "rounded-[18px] border-white/10 bg-white/5 text-white" : "rounded-[18px] border-slate-200"}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className={dark ? "text-white/80" : ""}>Full-time or Part-time</Label>
                    <Select value={formState.schedule} onValueChange={(value) => setFormState((current) => ({ ...current, schedule: value }))}>
                      <SelectTrigger className={dark ? "rounded-[18px] border-white/10 bg-white/5 text-white" : "rounded-[18px] border-slate-200"}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Exploring">Exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {showInterest && (
                <div className="space-y-2">
                  <Label htmlFor={`${variant}-interest`} className={dark ? "text-white/80" : ""}>Why are you interested?</Label>
                  <div className="relative">
                    <MessageSquare className={`pointer-events-none absolute left-3 top-4 h-4 w-4 ${dark ? "text-white/35" : "text-slate-400"}`} />
                    <Textarea id={`${variant}-interest`} required value={formState.interest} onChange={(event) => setFormState((current) => ({ ...current, interest: event.target.value }))} className={dark ? "min-h-[120px] rounded-[20px] border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/35" : "min-h-[120px] rounded-[20px] border-slate-200 pl-10"} placeholder="Tell us what you are looking for" />
                  </div>
                </div>
              )}

              <div className={`rounded-[22px] p-4 text-sm ${dark ? "bg-white/5 text-white/70" : "bg-slate-50 text-slate-600"}`}>
                <div className="flex items-start gap-3">
                  <Send className="mt-0.5 h-4 w-4 text-[#39f277]" />
                  <p>Create or update lead records, assign the right pipeline stage, and trigger SMS + email follow-up automatically.</p>
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <CalendarRange className="mt-0.5 h-4 w-4 text-[#39f277]" />
                  <p>Each cloned site can point to a different GoHighLevel or Builder CRM account by swapping tenant-level configuration.</p>
                </div>
              </div>

              <Button type="submit" className="h-12 w-full rounded-[16px] bg-[#39f277] text-base font-semibold text-[#04110a] hover:bg-[#4cf688]">
                {ctaLabel}
              </Button>
            </form>
          </>
        )}
      </CardContent>
    </Card>
  );
}
