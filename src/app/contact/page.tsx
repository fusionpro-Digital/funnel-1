"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  ChevronDown,
  Clock,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import gsap from "gsap";

import { SiteFooter } from "@/components/site/footer";
import { Container, Logo, Rule } from "@/components/site/primitives";

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ShieldCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const SERVICE_OPTIONS = [
  "Positioning & Messaging",
  "Websites & Landing Pages",
  "Sales Funnels",
  "CRM & Lead Management",
  "Automated Follow-Up",
  "AI-Powered Sales Support",
  "Full Growth System (All of the above)",
];

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "20-Min Growth Discovery",
    desc: "We analyze your current positioning, website conversion, and CRM follow-up process.",
  },
  {
    step: "02",
    title: "System Architecture Proposal",
    desc: "You get a custom blueprint connecting your marketing, sales team, and automation stack.",
  },
  {
    step: "03",
    title: "Turnkey Execution",
    desc: "One accountable team builds, tests, and launches the entire system end-to-end.",
  },
];

const REASSURANCES = [
  "No pressure and no generic sales presentations.",
  "Direct strategy session with system architects.",
  "Clear deliverables with guaranteed response times.",
];

export default function ContactPage() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const formCardRef = React.useRef<HTMLDivElement>(null);
  const successCardRef = React.useRef<HTMLDivElement>(null);

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Websites & Landing Pages",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  // GSAP entrance animations
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".gsap-header", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Left panel elements
      gsap.from(".gsap-left-item", {
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Right form container
      gsap.from(".gsap-right-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Form items staggered entrance
      gsap.from(".gsap-form-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        delay: 0.45,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Animate submit button
    gsap.to(".gsap-submit-btn", {
      scale: 0.97,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit form. Please try again.");
      }

      if (formCardRef.current) {
        gsap.to(formCardRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            requestAnimationFrame(() => {
              if (successCardRef.current) {
                gsap.fromTo(
                  successCardRef.current,
                  { scale: 0.9, opacity: 0, y: 30 },
                  {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "back.out(1.5)",
                  },
                );
              }
            });
          },
        });
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#07030c] text-white selection:bg-violet-500 selection:text-white"
    >
      {/* Dynamic ambient gradient spheres */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[15%] left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-950/25 blur-[160px]" />
        <div className="absolute top-[35%] -left-[10%] h-[500px] w-[600px] rounded-full bg-purple-900/15 blur-[140px]" />
        <div className="absolute top-[60%] -right-[10%] h-[550px] w-[650px] rounded-full bg-indigo-950/20 blur-[150px]" />
      </div>

      {/* Header */}
      <header className="gsap-header relative z-30 pt-7 sm:pt-9">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[14px] font-medium text-white/80 transition-all hover:border-violet-500/40 hover:bg-white/[0.08] hover:text-white"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Overview</span>
            </Link>

            <Link href="/" aria-label="FusionPro home">
              <Logo />
            </Link>
          </div>
          <Rule className="mt-7 sm:mt-9" />
        </Container>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 py-12 sm:py-16 lg:py-20">
        <Container className="max-w-[1240px]">
          {/* Top Title Banner */}
          <div className="text-center">
            <div className="gsap-left-item inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-[13px] font-semibold uppercase tracking-wider text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <Sparkles className="size-3.5 text-violet-400" />
              <span>Get Your Growth System</span>
            </div>

            <h1 className="gsap-left-item mx-auto mt-6 max-w-[920px] text-balance font-sans text-[36px] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[54px] lg:text-[62px]">
              Turn More Interest Into{" "}
              <span className="text-gradient-violet block font-display italic font-semibold">
                Qualified Sales Conversations.
              </span>
            </h1>

            <p className="gsap-left-item mx-auto mt-5 max-w-[720px] text-pretty text-[16px] leading-relaxed text-muted-foreground sm:text-[19px]">
              Discuss your growth goals with our specialists. We’ll analyze your lead generation, CRM, and follow-up bottlenecks in a focused 20-minute strategy call.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Expectations & Reassurances */}
            <div className="space-y-8 lg:col-span-5">
              {/* Process Card */}
              <div className="gsap-left-item rounded-[24px] border border-violet-500/20 bg-white/[0.025] p-6 backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                    <Zap className="size-5" />
                  </div>
                  <h2 className="text-[20px] font-bold text-white">
                    What happens next?
                  </h2>
                </div>

                <div className="mt-6 space-y-6">
                  {TIMELINE_STEPS.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-[13px] font-bold text-violet-300">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-white/65">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee / Reassurance Pill Card */}
              <div className="gsap-left-item rounded-[24px] border border-violet-500/20 bg-white/[0.025] p-6 backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h2 className="text-[20px] font-bold text-white">
                    Our Promise To You
                  </h2>
                </div>

                <ul className="mt-5 space-y-3">
                  {REASSURANCES.map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-white/85">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Info Badge */}
              <div className="gsap-left-item rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider text-violet-300">
                  Direct Inquiries
                </h3>
                <div className="mt-4 space-y-3 text-[14.5px]">
                  <div className="flex items-center gap-3 text-white/80">
                    <Mail className="size-4 text-violet-400" />
                    <a
                      href="mailto:hello@fusionprodigital.com"
                      className="transition-colors hover:text-violet-300 hover:underline"
                    >
                      hello@fusionprodigital.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="size-4 text-violet-400" />
                    <span>Toronto, Ontario • Canada</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock className="size-4 text-violet-400" />
                    <span>Avg. Response Time: &lt; 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="lg:col-span-7">
              <div className="gsap-right-card relative">
                {/* Glow backdrop frame */}
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-violet-600/30 via-purple-500/20 to-indigo-600/30 blur-xl opacity-70" />

                {!isSubmitted ? (
                  <div
                    ref={formCardRef}
                    className="relative rounded-[28px] border border-violet-500/30 bg-[#120a1f]/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-9 lg:p-11"
                  >
                    <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                      <div>
                        <h2 className="text-[22px] font-bold text-white sm:text-[26px]">
                          Tell us about your project
                        </h2>
                        <p className="mt-1 text-[14px] text-white/60">
                          Fill out the form below to receive a personalized growth plan.
                        </p>
                      </div>
                      <div className="hidden sm:flex size-12 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                        <MessageSquare className="size-6" />
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-7">
                      {/* Name & Email */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="gsap-form-item">
                          <label
                            htmlFor="fullName"
                            className="block text-[13.5px] font-medium text-white/90"
                          >
                            Full Name <span className="text-violet-400">*</span>
                          </label>
                          <div className="group relative mt-2 flex items-center">
                            <User className="pointer-events-none absolute left-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                            <input
                              type="text"
                              id="fullName"
                              required
                              placeholder="Alex Morgan"
                              value={formData.fullName}
                              onChange={(e) =>
                                setFormData({ ...formData, fullName: e.target.value })
                              }
                              className="w-full rounded-2xl border border-violet-500/20 bg-white/[0.03] pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-white/30 transition-all hover:border-violet-500/40 hover:bg-white/[0.05] focus:border-violet-400 focus:bg-[#160a28] focus:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                            />
                          </div>
                        </div>

                        <div className="gsap-form-item">
                          <label
                            htmlFor="email"
                            className="block text-[13.5px] font-medium text-white/90"
                          >
                            Work Email <span className="text-violet-400">*</span>
                          </label>
                          <div className="group relative mt-2 flex items-center">
                            <Mail className="pointer-events-none absolute left-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                            <input
                              type="email"
                              id="email"
                              required
                              placeholder="alex@company.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="w-full rounded-2xl border border-violet-500/20 bg-white/[0.03] pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-white/30 transition-all hover:border-violet-500/40 hover:bg-white/[0.05] focus:border-violet-400 focus:bg-[#160a28] focus:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone & Company */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="gsap-form-item">
                          <label
                            htmlFor="phone"
                            className="block text-[13.5px] font-medium text-white/90"
                          >
                            Phone Number <span className="text-violet-400">*</span>
                          </label>
                          <div className="group relative mt-2 flex items-center">
                            <Phone className="pointer-events-none absolute left-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                            <input
                              type="tel"
                              id="phone"
                              required
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="w-full rounded-2xl border border-violet-500/20 bg-white/[0.03] pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-white/30 transition-all hover:border-violet-500/40 hover:bg-white/[0.05] focus:border-violet-400 focus:bg-[#160a28] focus:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                            />
                          </div>
                        </div>

                        <div className="gsap-form-item">
                          <label
                            htmlFor="company"
                            className="block text-[13.5px] font-medium text-white/90"
                          >
                            Company Name / Website URL
                          </label>
                          <div className="group relative mt-2 flex items-center">
                            <Building2 className="pointer-events-none absolute left-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                            <input
                              type="text"
                              id="company"
                              placeholder="Acme Corp (acme.com)"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({ ...formData, company: e.target.value })
                              }
                              className="w-full rounded-2xl border border-violet-500/20 bg-white/[0.03] pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-white/30 transition-all hover:border-violet-500/40 hover:bg-white/[0.05] focus:border-violet-400 focus:bg-[#160a28] focus:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Dropdown Select Option for Area to Optimize */}
                      <div className="gsap-form-item">
                        <label
                          htmlFor="service"
                          className="block text-[13.5px] font-medium text-white/90"
                        >
                          Which area do you want to optimize? <span className="text-violet-400">*</span>
                        </label>
                        <div className="group relative mt-2 flex items-center">
                          <Layers className="pointer-events-none absolute left-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                          <select
                            id="service"
                            required
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full appearance-none rounded-2xl border border-violet-500/20 bg-white/[0.03] pl-11 pr-10 py-3.5 text-[15px] text-white transition-all hover:border-violet-500/40 hover:bg-white/[0.05] focus:border-violet-400 focus:bg-[#160a28] focus:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-violet-500/30 cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#120a1f] text-white/50">
                              Select an area to optimize...
                            </option>
                            {SERVICE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#120a1f] text-white py-2">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                        </div>
                      </div>

                      {/* Message / Goals */}
                      <div className="gsap-form-item">
                        <label
                          htmlFor="message"
                          className="block text-[13.5px] font-medium text-white/90"
                        >
                          Describe your current bottlenecks or goals
                        </label>
                        <div className="group relative mt-2">
                          <MessageSquare className="pointer-events-none absolute left-4 top-4 size-4.5 text-white/40 transition-colors group-focus-within:text-violet-400" />
                          <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us about your conversion rates, lead follow-up challenges, or systems you want to connect..."
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full resize-none rounded-2xl border border-violet-500/20 bg-white/[0.03] pl-11 pr-4 py-3.5 text-[15px] text-white placeholder-white/30 transition-all hover:border-violet-500/40 hover:bg-white/[0.05] focus:border-violet-400 focus:bg-[#160a28] focus:shadow-[0_0_25px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                          />
                        </div>
                      </div>

                      {/* Error Banner */}
                      {errorMessage && (
                        <div className="gsap-form-item rounded-2xl border border-red-500/40 bg-red-950/30 p-4 text-[14px] text-red-200">
                          <p className="font-semibold">Unable to send message:</p>
                          <p className="mt-1 opacity-90">{errorMessage}</p>
                        </div>
                      )}

                      {/* Submit CTA */}
                      <div className="gsap-form-item pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="gsap-submit-btn group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(100deg,#7c3aed_0%,#8b5cf6_50%,#7c3aed_100%)] px-8 py-4.5 text-[16px] font-semibold text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.85)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_50px_-10px_rgba(139,92,246,0.95)] disabled:opacity-75 sm:text-[17px]"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              <span>Sending Details...</span>
                            </>
                          ) : (
                            <>
                              <span>Discuss My Growth Goals</span>
                              <Send className="size-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                        <p className="mt-3.5 text-center text-[13px] text-white/50">
                          100% confidential. No obligations. Response within 24 hours.
                        </p>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Success Card */
                  <div
                    ref={successCardRef}
                    className="relative rounded-[28px] border border-emerald-500/40 bg-[#120a1f]/95 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-14"
                  >
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="size-11" />
                    </div>

                    <h2 className="mt-6 text-balance font-sans text-[28px] font-bold text-white sm:text-[38px]">
                      Growth Request Submitted!
                    </h2>

                    <p className="mx-auto mt-4 max-w-[540px] text-pretty text-[16px] leading-relaxed text-white/80 sm:text-[18px]">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. We’ve received your request and our team will get back to you within 24 hours.
                    </p>

                    <div className="mx-auto mt-8 max-w-[480px] rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left text-[14px]">
                      <p className="text-violet-300 font-semibold uppercase tracking-wider text-[12px]">
                        Request Summary:
                      </p>
                      <ul className="mt-3 space-y-1.5 text-white/85">
                        <li>• <strong className="text-white">Email:</strong> {formData.email}</li>
                        <li>• <strong className="text-white">Phone:</strong> {formData.phone}</li>
                        <li>• <strong className="text-white">Company:</strong> {formData.company || "N/A"}</li>
                        <li>• <strong className="text-white">Selected Area:</strong> {formData.service}</li>
                      </ul>
                    </div>

                    <div className="mt-10">
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/35 px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-violet-600/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                      >
                        <span>Return to Overview</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
