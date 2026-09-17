/**
 * Every string rendered on the marketing page, transcribed from the
 * Fusion Pro Digital Figma prototype. Kept out of the components so copy
 * edits never require touching layout.
 */

export const CTA_HREF = "/contact";

export const hero = {
  eyebrow: "Done-for-you growth systems for B2B & B2C companies",
  headline: "Turn More Interest Into",
  headlineAccent: "Qualified Sales Conversations.",
  body: [
    "FusionPro plans, builds, and connects the systems behind your growth from your positioning and website to your CRM, follow-up, automation, and AI workflows.",
    "Instead of managing several agencies, freelancers, and disconnected tools, you get one accountable team focused on helping you attract better opportunities and convert more of them into business.",
  ],
  cta: "Discuss My Growth Goals",
  reassurance:
    "A focused 20-minute conversation. No pressure and no generic sales presentation.",
};

/**
 * Portfolio thumbnails for the gallery grid under the hero.
 * `src` points into /public/slider-image.
 * While it is null a tinted placeholder tile is rendered instead.
 */
export type GalleryItem = {
  id: string;
  label: string;
  src: string | null;
  tint: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "travel", label: "Private Luxury & Tailor-Made Experiences", src: "/slider-image/Rectangle 41.jpg", tint: "from-teal-600 to-emerald-900" },
  { id: "plumbing", label: "Professional Plumbing Services", src: "/slider-image/Rectangle 41 (Colorized).jpg", tint: "from-amber-600 to-slate-900" },
  { id: "building", label: "Modern Building Solutions", src: "/slider-image/Rectangle 42.jpg", tint: "from-blue-600 to-indigo-900" },
  { id: "allpoints", label: "AllPoints Construction, Inc.", src: "/slider-image/Rectangle 42 (1).jpg", tint: "from-purple-600 to-slate-900" },
  { id: "zone-ac", label: "Z-ONE AC Service - Stay Cool Today", src: "/slider-image/Rectangle 43.jpg", tint: "from-cyan-600 to-blue-900" },
  { id: "radical-toast", label: "Radical Toast Packaging", src: "/slider-image/Rectangle 43 (1).jpg", tint: "from-rose-600 to-violet-900" },
  { id: "pet-site", label: "Find The Right Pet For You", src: "/slider-image/Rectangle 44 (Colorized).jpg", tint: "from-sky-500 to-blue-800" },
  { id: "auto-parts", label: "Auto Parts Dubai", src: "/slider-image/Rectangle 44 (Colorized) (1).jpg", tint: "from-red-600 to-zinc-900" },
];

export const oneTeam = {
  headline: "One team behind every",
  headlineAccent: "critical part of your growth.",
  body: "Most providers improve one piece of your funnel and hand the rest back to you. FusionPro brings strategy, design, development, CRM, automation, and AI together then takes responsibility for how the complete system performs.",
  logosLabel: "Tools & Platforms We Work With",
};

export type PlatformLogo = { id: string; name: string; src: string | null };

export const platformLogos: PlatformLogo[] = [
  { id: "gohighlevel", name: "GoHighLevel", src: "/brand-logo/platforms/gohighlevel.svg" },
  { id: "apollo", name: "Apollo", src: "/brand-logo/platforms/apollo.svg" },
  { id: "canva", name: "Canva", src: "/brand-logo/platforms/canva.svg" },
  { id: "clickup", name: "ClickUp", src: "/brand-logo/platforms/clickup.svg" },
  { id: "google-workspace", name: "Google Workspace", src: "/brand-logo/platforms/google-workspace.svg" },
  { id: "zapier", name: "Zapier", src: "/brand-logo/platforms/zapier.svg" },
  { id: "make", name: "Make", src: "/brand-logo/platforms/make.png" },
  { id: "n8n", name: "n8n", src: "/brand-logo/platforms/n8n.svg" },
  { id: "calendly", name: "Calendly", src: "/brand-logo/platforms/calendly.svg" },
  { id: "clay", name: "Clay", src: "/brand-logo/platforms/clay.png" },
  { id: "smartlead", name: "Smartlead", src: "/brand-logo/platforms/smartlead.png" },
  { id: "heyreach", name: "HeyReach", src: "/brand-logo/platforms/heyreach.svg" },
  { id: "figma", name: "Figma", src: "/brand-logo/platforms/figma.svg" },
  { id: "webflow", name: "Webflow", src: "/brand-logo/platforms/webflow.svg" },
  { id: "framer", name: "Framer", src: "/brand-logo/platforms/framer.svg" },
  { id: "wordpress", name: "WordPress", src: "/brand-logo/platforms/wordpress.svg" },
  { id: "slack", name: "Slack", src: "/brand-logo/platforms/slack.svg" },
  { id: "aws", name: "AWS", src: "/brand-logo/platforms/aws.svg" },
  { id: "shopify", name: "Shopify", src: "/brand-logo/platforms/shopify.svg" },
];

export type Stage = "Design" | "Capture" | "Convert" | "Automate";

export type Solution = {
  id: string;
  number: string;
  stages: Stage[];
  title: string;
  titleAccent: string;
  body: string;
  items: string[];
};

export const whatWeDo = {
  eyebrow: "What we do",
  headline: "Three solutions.",
  headlineAccent: "One clear path to growth.",
  body: "We design a presence buyers trust, capture the right leads, convert them into sales conversations, and automate the work in between, all under one accountable team.",
  stages: ["Design", "Capture", "Convert", "Automate"] satisfies Stage[],
  solutions: [
    {
      id: "design",
      number: "01",
      stages: ["Design"],
      title: "Design &",
      titleAccent: "Digital Presence",
      body: "Interfaces and experiences that make your brand easier to understand and use, with professional, responsive websites built around your business goals.",
      items: [
        "UI/UX Design",
        "Website Development",
        "Landing Pages",
        "Web Design",
        "Branding & Visual Design",
      ],
    },
    {
      id: "lead-generation",
      number: "02",
      stages: ["Capture", "Convert"],
      title: "Lead Generation &",
      titleAccent: "Conversion",
      body: "Prospecting, enrichment, and outbound systems, plus the funnels, lead capture, and booking flows that turn interest into qualified sales conversations.",
      items: [
        "Lead Generation",
        "GTM Systems",
        "Funnels",
        "CRM",
        "Appointment Booking",
        "Email/LinkedIn Outreach",
        "Lead Qualification",
      ],
    },
    {
      id: "automation",
      number: "03",
      stages: ["Automate"],
      title: "Automation &",
      titleAccent: "AI",
      body: "AI agents and automated workflows that reduce repetitive work, from lead routing and follow-ups to the integrations that connect your tools.",
      items: [
        "AI Agents",
        "n8n Automation",
        "CRM Automation",
        "Workflow Automation",
        "API Integrations",
        "AI Lead Qualification",
        "Automated Follow-up",
      ],
    },
  ] satisfies Solution[],
  support: {
    title: "Plus ongoing technical support:",
    body: "website, CRM, automation, and integration support that keeps your system running.",
  },
};

export const problems = {
  eyebrow: "Why growth becomes harder than it should",
  headline: "Your marketing may be working.",
  headlineAccent: "The pieces around it aren’t working together.",
  body: "Most companies don’t need another isolated campaign. They need a better system for turning the attention they already create into genuine sales opportunities.",
  items: [
    "Your website attracts visitors but doesn’t give the right buyers a strong reason to contact you.",
    "New inquiries wait too long for a relevant response, allowing interest to disappear.",
    "Your CRM stores information, but sales still lacks a clear view of who to contact and what to do next.",
    "Marketing, sales, and technology operate separately, creating slow handoffs and missed opportunities.",
    "Automation creates more activity without creating a clearer or more effective customer journey.",
  ],
  closing:
    "You don’t need another report explaining these problems. You need a partner who can fix them.",
  cta: "Build My Growth System",
};

export type Service = {
  id: string;
  title: string;
  titleAccent: string;
  body: string;
  src: string | null;
  tint: string;
  /** Which part of the image stays visible when the 16:10 frame crops it. */
  imagePosition?: string;
};

export const services = {
  eyebrow: "What FusionPro builds for you",
  headline: "A connected system designed to",
  headlineAccent: "create and convert more opportunities.",
  body: "We identify what is holding back your growth, build the missing components, and connect everything into a system your team can actually use.",
  items: [
    {
      id: "positioning",
      title: "Logo &",
      titleAccent: "Branding:",
      body: "Clarify your market, positioning, and message so the people most likely to buy recognize themselves immediately.",
      src: "/service-cards/logo-branding.jpg",
      tint: "from-orange-500/70 to-violet-700/70",
    },
    {
      id: "websites",
      title: "Websites &",
      titleAccent: "Landing Pages:",
      body: "Build pages, offers, and experiences that answer the buyer’s real questions and give them a convincing reason to take the next step.",
      src: "/service-cards/websites-landing-pages.jpg",
      tint: "from-sky-500/70 to-indigo-800/70",
    },
    {
      id: "funnels",
      title: "Sales",
      titleAccent: "Funnels:",
      body: "Map the path from first interest to booked conversation, then remove the friction that quietly costs you opportunities.",
      src: "/service-cards/sales-funnels.jpg",
      tint: "from-emerald-500/70 to-teal-900/70",
      imagePosition: "object-top",
    },
    {
      id: "crm",
      title: "CRM &",
      titleAccent: "Lead Management:",
      body: "Give your sales team one clear view of who to contact, what was said, and what happens next.",
      src: "/service-cards/crm-lead-management.jpg",
      tint: "from-amber-500/70 to-rose-800/70",
    },
    {
      id: "follow-up",
      title: "Automated",
      titleAccent: "Follow-Up:",
      body: "Respond to every new inquiry in minutes, not days, with follow-up sequences that keep the conversation going until it is booked, closed, or clearly not a fit.",
      src: "/service-cards/automated-follow-up.jpg",
      tint: "from-zinc-500/70 to-zinc-900/70",
    },
    {
      id: "ai",
      title: "AI-Powered",
      titleAccent: "Sales Support:",
      body: "Put AI to work on research, personalization, and lead qualification, so your sales team spends its time on the conversations most likely to close.",
      src: "/service-cards/ai-sales-support.jpg",
      tint: "from-orange-400/70 to-purple-900/70",
    },
  ] satisfies Service[],
  statement: [
    "No disconnected contractors. No mystery technology stack. No finger-pointing between vendors.",
    "Just one system your team can understand, operate, and improve.",
  ],
  cta: "Talk About My Project",
};

export const testimonialsIntro = {
  eyebrow: "Verified client results",
  headline: "Results that show up in the pipeline",
  headlineAccent: "not just the portfolio.",
  body: "Good design matters, but it is not the finish line. We measure the outcomes that affect growth: qualified conversion rates, response time, booked conversations, sales velocity, pipeline visibility, and revenue opportunity.",
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string | null;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t4",
    name: "Sarah Chen",
    role: "Founder & CEO",
    avatar: "/testimonials/t4.svg",
    quote:
      "FusionPro made the entire experience easier for our customers. The new pages are cleaner, the information is easier to understand, and visitors can find what they need without getting lost or overwhelmed.",
  },
  {
    id: "t7",
    name: "Alex Scott",
    role: "CEO",
    avatar: "/testimonials/t7.svg",
    quote:
      "We wanted to use AI but didn’t want another collection of tools nobody would use. FusionPro found practical applications for research, personalization, and sales support, then built them into the way our team already works.",
  },
  {
    id: "t8",
    name: "Anthony",
    role: "Founder",
    avatar: "/testimonials/t8.svg",
    quote:
      "What impressed us most was that FusionPro could handle both the strategy and the implementation. They didn’t leave us with a presentation and a list of recommendations—they helped us build the actual solution.",
  },
  {
    id: "t9",
    name: "Paul Marney",
    role: "Co-founder",
    avatar: "/testimonials/t9.svg",
    quote:
      "Before FusionPro, leads were sitting in different places and follow-up depended too much on memory. They organized the process, connected our CRM, and gave our sales team a much clearer way to manage opportunities.",
  },
  {
    id: "t10",
    name: "Kimberly Hill",
    role: "Head of Product Engineering",
    avatar: "/testimonials/t10.svg",
    quote:
      "FusionPro helped us understand where prospects were losing interest and rebuilt the journey around how our customers actually make decisions. The new funnel feels clearer, more focused, and much easier for our sales team to use.",
  },
  {
    id: "t12",
    name: "Tony",
    role: "Co-founder, ProGolf",
    avatar: "/testimonials/t12.svg",
    quote:
      "The process felt organized from the beginning. FusionPro listened to our team, explained decisions clearly, and kept the project moving without making everything unnecessarily complicated.",
  },
];

export const faq = {
  headline: "What can FusionPro",
  headlineAccent: "build for our company?",
  body: "FusionPro can support your positioning, website, landing pages, sales funnels, CRM, automation, AI workflows, follow-up systems, and performance reporting. Your engagement is shaped around the business outcome rather than a predetermined package.",
  items: [
    {
      q: "Do we have to replace our existing website or CRM?",
      a: "No. If your current technology can support the required system, we’ll improve and connect it. We only recommend replacing something when it is genuinely restricting performance.",
    },
    {
      q: "Can FusionPro work with our internal team?",
      a: "Yes. We regularly work alongside in-house marketing, sales, and technical teams. We define ownership clearly at the start so responsibilities never overlap or fall through the cracks.",
    },
    {
      q: "How does an engagement begin?",
      a: "It starts with a focused 20-minute conversation about your goals. From there we review your current system and propose the specific components that need to be built, improved, or connected.",
    },
    {
      q: "How long does a project take?",
      a: "Timelines depend on scope. A focused website or funnel build typically runs a few weeks, while a complete growth system spanning positioning, CRM, and automation runs longer. You get a clear schedule before work begins.",
    },
    {
      q: "How is success measured?",
      a: "Against outcomes that affect growth — qualified conversion rates, response time, booked conversations, sales velocity, pipeline visibility, and revenue opportunity. We agree on the metrics before we start.",
    },
  ],
};

export const finalCta = {
  headline: "Stop adding disconnected tactics.",
  headlineAccent: "Build the system that makes them work.",
  body: "Tell us what you want to achieve. FusionPro will help determine what needs to change, build the right solution, and connect the pieces around one clear growth objective.",
  cta: "Book A 20-Minute Call",
  fineprint:
    "No audit pitch. No pressure. Just a direct conversation about your goals and whether FusionPro is the right partner.",
};

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];
