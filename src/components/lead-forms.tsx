import { CalendarDays, CheckCircle2, Clock3, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const fieldClass =
  "h-14 rounded-xl border-white/[0.08] bg-white/[0.04] text-white placeholder:text-gray-600 focus-visible:ring-[#00FF85]/20";
const labelClass = "flex items-center gap-2 text-gray-300";

type SuccessProps = {
  title: string;
  body: string;
};

function SuccessState({ title, body }: SuccessProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 pt-24">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#00FF85]/10">
          <CheckCircle2 className="h-10 w-10 text-[#00FF85]" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-white">{title}</h1>
        <p className="text-lg leading-relaxed text-gray-400">{body}</p>
      </div>
    </div>
  );
}

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    licensed: "",
    availability: "",
    interestReason: "",
  });

  if (submitted) {
    return (
      <SuccessState
        title="Application Submitted"
        body="Thank you for your interest! Our team will review your application and reach out within 24-48 hours to schedule your discovery call."
      />
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <TextField
        icon={<UserRound className="h-4 w-4 text-gray-500" />}
        label="Full Name *"
        placeholder="Your full name"
        value={formData.fullName}
        onChange={(value) => setFormData((current) => ({ ...current, fullName: value }))}
        required
      />
      <TextField
        icon={<Mail className="h-4 w-4 text-gray-500" />}
        label="Email *"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
        required
        type="email"
      />
      <TextField
        icon={<Phone className="h-4 w-4 text-gray-500" />}
        label="Phone *"
        placeholder="(555) 000-0000"
        value={formData.phone}
        onChange={(value) => setFormData((current) => ({ ...current, phone: value }))}
        required
        type="tel"
      />
      <SelectField
        icon={<MapPin className="h-4 w-4 text-gray-500" />}
        label="State"
        placeholder="Select your state"
        value={formData.state}
        onValueChange={(value) => setFormData((current) => ({ ...current, state: value }))}
        options={states}
      />
      <SelectField
        label="Currently Licensed?"
        placeholder="Select one"
        value={formData.licensed}
        onValueChange={(value) => setFormData((current) => ({ ...current, licensed: value }))}
        options={["Yes, I'm licensed", "No, not yet", "In progress"]}
      />
      <SelectField
        label="Interested In"
        placeholder="Full time or part time?"
        value={formData.availability}
        onValueChange={(value) => setFormData((current) => ({ ...current, availability: value }))}
        options={["Full Time", "Part Time"]}
      />
      <TextareaField
        label="Why are you interested?"
        placeholder="Tell us what makes this opportunity exciting to you."
        value={formData.interestReason}
        onChange={(value) => setFormData((current) => ({ ...current, interestReason: value }))}
      />
      <Button className="h-14 w-full rounded-xl bg-[#00FF85] text-base font-bold text-[#0A0A0B] hover:bg-[#00E077]">
        Submit Application
      </Button>
    </form>
  );
}

export function DiscoveryCallForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  if (submitted) {
    return (
      <SuccessState
        title="Call Booked!"
        body="We've received your booking request. A team member will confirm your discovery call time within 24 hours."
      />
    );
  }

  return (
    <form
      className="space-y-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <TextField
        icon={<UserRound className="h-4 w-4 text-gray-500" />}
        label="Full Name *"
        placeholder="Your full name"
        value={formData.fullName}
        onChange={(value) => setFormData((current) => ({ ...current, fullName: value }))}
        required
      />
      <TextField
        icon={<Mail className="h-4 w-4 text-gray-500" />}
        label="Email *"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
        required
        type="email"
      />
      <TextField
        icon={<Phone className="h-4 w-4 text-gray-500" />}
        label="Phone"
        placeholder="(555) 000-0000"
        value={formData.phone}
        onChange={(value) => setFormData((current) => ({ ...current, phone: value }))}
        type="tel"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          icon={<CalendarDays className="h-4 w-4 text-gray-500" />}
          label="Preferred Date"
          value={formData.preferredDate}
          onChange={(value) => setFormData((current) => ({ ...current, preferredDate: value }))}
          type="date"
        />
        <SelectField
          icon={<Clock3 className="h-4 w-4 text-gray-500" />}
          label="Preferred Time"
          placeholder="Time"
          value={formData.preferredTime}
          onValueChange={(value) => setFormData((current) => ({ ...current, preferredTime: value }))}
          options={["Morning (9am-12pm)", "Afternoon (12pm-5pm)", "Evening (5pm-8pm)"]}
        />
      </div>
      <TextareaField
        label="Anything we should know?"
        placeholder="Share any goals or questions you want to cover on the call."
        value={formData.notes}
        onChange={(value) => setFormData((current) => ({ ...current, notes: value }))}
      />
      <Button className="h-14 w-full rounded-xl bg-[#00FF85] text-base font-bold text-[#0A0A0B] hover:bg-[#00E077]">
        Request My Call
      </Button>
    </form>
  );
}

export function WebinarForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
  });

  if (submitted) {
    return (
      <SuccessState
        title="You're Registered"
        body="Your webinar seat is reserved. Watch for an email and text reminder with the next session details."
      />
    );
  }

  return (
    <form
      id="register-form"
      className="space-y-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <TextField
        icon={<UserRound className="h-4 w-4 text-gray-500" />}
        label="Full Name *"
        placeholder="Your full name"
        value={formData.fullName}
        onChange={(value) => setFormData((current) => ({ ...current, fullName: value }))}
        required
      />
      <TextField
        icon={<Mail className="h-4 w-4 text-gray-500" />}
        label="Email *"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
        required
        type="email"
      />
      <TextField
        icon={<Phone className="h-4 w-4 text-gray-500" />}
        label="Phone *"
        placeholder="(555) 000-0000"
        value={formData.phone}
        onChange={(value) => setFormData((current) => ({ ...current, phone: value }))}
        required
        type="tel"
      />
      <SelectField
        icon={<MapPin className="h-4 w-4 text-gray-500" />}
        label="State"
        placeholder="Select your state"
        value={formData.state}
        onValueChange={(value) => setFormData((current) => ({ ...current, state: value }))}
        options={states}
      />
      <Button className="h-14 w-full rounded-xl bg-[#00FF85] text-base font-bold text-[#0A0A0B] hover:bg-[#00E077]">
        YES! I WANT TO ATTEND
      </Button>
    </form>
  );
}

type TextFieldProps = {
  icon?: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function TextField({ icon, label, value, onChange, placeholder, type = "text", required = false }: TextFieldProps) {
  return (
    <div className="space-y-2">
      <Label className={labelClass}>
        {icon}
        <span>{label}</span>
      </Label>
      <Input
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClass}
      />
    </div>
  );
}

type SelectFieldProps = {
  icon?: React.ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
};

function SelectField({ icon, label, placeholder, value, onValueChange, options }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <Label className={labelClass}>
        {icon}
        <span>{label}</span>
      </Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={fieldClass}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-60 border-white/10 bg-[#111214] text-white">
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

type TextareaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

function TextareaField({ label, value, onChange, placeholder }: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-300">{label}</Label>
      <Textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-[140px] rounded-xl border-white/[0.08] bg-white/[0.04] text-white placeholder:text-gray-600 focus-visible:ring-[#00FF85]/20"
      />
    </div>
  );
}
