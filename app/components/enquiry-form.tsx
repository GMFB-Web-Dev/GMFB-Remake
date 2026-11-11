"use client";

import { useState, type FormEvent } from "react";

export function EnquiryForm({ application = false }: { application?: boolean }) {
  const [status, setStatus] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const resume = data.get("resume");
    const lines = application ? [
      `Name: ${data.get("name")}`, `Phone: ${data.get("phone")}`, `Email: ${data.get("email")}`,
      "", String(data.get("message") ?? ""), "", resume instanceof File && resume.name ? `CV to attach: ${resume.name}` : "",
    ] : [
      `Name: ${data.get("name")}`, `Business: ${data.get("business") ?? ""}`, `Email: ${data.get("email")}`, `Phone: ${data.get("phone") ?? ""}`, "", String(data.get("message") ?? ""),
    ];
    const subject = application ? `GMFB application — ${data.get("name")}` : `GMFB enquiry — ${data.get("business") || data.get("name")}`;
    window.location.href = `mailto:team@gmfb.co.nz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus(application ? "Your email draft is ready. Attach your CV in your email app, then send your application to team@gmfb.co.nz." : "Your email draft is ready. Please send it from your email app to complete your enquiry. You can also email team@gmfb.co.nz directly.");
  };

  return (
    <form id={application ? "application-form" : "enquiry-form"} className="enquiry-form" onSubmit={submit}>
      <h2>Tell us a bit about you.</h2>
      <div className="enquiry-form__row">
        <label><span>{application ? "Full name *" : "Name *"}</span><input name="name" autoComplete="name" placeholder={application ? "John Doe" : "Your name"} required maxLength={160} /></label>
        {application ? <label><span>Phone number *</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required maxLength={40} /></label> : <label><span>Business name</span><input name="business" autoComplete="organization" placeholder="Your business" maxLength={160} /></label>}
      </div>
      <div className="enquiry-form__row">
        <label><span>Email *</span><input name="email" type="email" autoComplete="email" placeholder="you@business.co.nz" required maxLength={254} /></label>
        {application ? <label className="enquiry-form__upload"><span>CV / Resume *</span><input name="resume" type="file" accept=".pdf,.doc,.docx" required /></label> : <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" maxLength={40} /></label>}
      </div>
      <label className="enquiry-form__message"><span>{application ? "Additional notes" : "What can we help you with? *"}</span><textarea name="message" rows={4} placeholder={application ? "Tell us a little about yourself and the kind of role you’re looking for." : "Tell us about your business and what you want to achieve."} required={!application} maxLength={4000} /></label>
      <div className="enquiry-form__action"><p>{application ? "Opens an email draft. Attach your CV in your email app before sending." : "By submitting, you agree that we can contact you about your enquiry. No spam. Ever. Opens your email app to send."}</p><button className="gmfb-button" type="submit">{application ? "Send application" : "Let’s talk"}</button></div>
      {status && <p className="enquiry-form__status" role="status">{status}</p>}
    </form>
  );
}
