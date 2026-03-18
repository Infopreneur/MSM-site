import { useMemo, useState } from "react";
import { CalendarRange, CheckCircle2, Globe2, Mail, MessageSquare, Phone, Send, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export function LeadForm({ variant, title, description, ctaLabel, showInterest = false }: LeadFormProps) {
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

  return (
    <Card className="rounded-[2rem] border-0 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
      <CardHeader className="space-y-3 p-6 sm:p-8">
        <div className="inline-flex w-fit items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
          {pipelineStage}
        </div>
        <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">{title}</CardTitle>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      </CardHeader>
      <CardContent className="p-6 pt-0 sm:p-8 sm:pt-0">
        {submitted ? (
          <div className="rounded-[1.5rem] bg-emerald-50 p-6 text-left">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">You're in.</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Your information is ready for CRM routing, pipeline placement, and automated follow-up.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4">
                <p className="font-medium">CRM provider</p>
                <p className="mt-1 text-slate-500">{baseConfig.crmProvider}</p>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="font-medium">Tenant ready</p>
                <p className="mt-1 text-slate-500">Clone with a new tenantId + webhook URL</p>
              </div>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`${variant}-name`}>Name</Label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id={`${variant}-name`}
                    required
                    value={formState.name}
                    onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                    className="rounded-2xl border-slate-200 pl-10"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${variant}-email`}>Email</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id={`${variant}-email`}
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                    className="rounded-2xl border-slate-200 pl-10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`${variant}-phone`}>Phone</Label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id={`${variant}-phone`}
                    required
                    value={formState.phone}
                    onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                    className="rounded-2xl border-slate-200 pl-10"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${variant}-state`}>State</Label>
                <div className="relative">
                  <Globe2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id={`${variant}-state`}
                    required
                    value={formState.state}
                    onChange={(event) => setFormState((current) => ({ ...current, state: event.target.value }))}
                    className="rounded-2xl border-slate-200 pl-10"
                    placeholder="Your state"
                  />
                </div>
              </div>
            </div>

            {(variant === "application" || variant === "webinar" || variant === "call") && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Licensed?</Label>
                  <Select value={formState.licensed} onValueChange={(value) => setFormState((current) => ({ ...current, licensed: value }))}>
                    <SelectTrigger className="rounded-2xl border-slate-200">
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
                  <Label>Full-time or Part-time</Label>
                  <Select value={formState.schedule} onValueChange={(value) => setFormState((current) => ({ ...current, schedule: value }))}>
                    <SelectTrigger className="rounded-2xl border-slate-200">
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
                <Label htmlFor={`${variant}-interest`}>Why are you interested?</Label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3 top-4 h-4 w-4 text-slate-400" />
                  <Textarea
                    id={`${variant}-interest`}
                    required
                    value={formState.interest}
                    onChange={(event) => setFormState((current) => ({ ...current, interest: event.target.value }))}
                    className="min-h-[120px] rounded-[1.5rem] border-slate-200 pl-10"
                    placeholder="Tell us what opportunity or solution you're looking for"
                  />
                </div>
              </div>
            )}

            <div className="rounded-[1.5rem] bg-slate-50 p-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <Send className="mt-0.5 h-4 w-4 text-emerald-600" />
                <p>Submission is structured for CRM routing, pipeline stages, SMS follow-up, email nurturing, and calendar booking.</p>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <CalendarRange className="mt-0.5 h-4 w-4 text-emerald-600" />
                <p>Multi-tenant ready: each cloned site only needs its own tenantId, webhook URL, calendar URL, and webinar URL.</p>
              </div>
            </div>

            <Button type="submit" className="w-full rounded-full bg-emerald-500 py-6 text-base text-white hover:bg-emerald-600">
              {ctaLabel}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
