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
 * Portfolio thumbnails for the two marquee rows.
 * `src` points into /public/media - see public/media/README.md.
 * While it is null a tinted placeholder tile is rendered instead.
 */
export type GalleryItem = {
  id: string;
  label: string;
  src: string | null;
  tint: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "travel", label: "Private Luxury & Tailor-Made Experiences", src: "/slider-image/Rectangle 41.png", tint: "from-teal-600 to-emerald-900" },
  { id: "plumbing", label: "Professional Plumbing Services", src: "/slider-image/Rectangle 41 (Colorized).png", tint: "from-amber-600 to-slate-900" },
  { id: "building", label: "Modern Building Solutions", src: "/slider-image/Rectangle 42.png", tint: "from-blue-600 to-indigo-900" },
  { id: "allpoints", label: "AllPoints Construction, Inc.", src: "/slider-image/Rectangle 42 (1).png", tint: "from-purple-600 to-slate-900" },
  { id: "zone-ac", label: "Z-ONE AC Service - Stay Cool Today", src: "/slider-image/Rectangle 43.png", tint: "from-cyan-600 to-blue-900" },
  { id: "radical-toast", label: "Radical Toast Packaging", src: "/slider-image/Rectangle 43 (1).png", tint: "from-rose-600 to-violet-900" },
  { id: "pet-site", label: "Find The Right Pet For You", src: "/slider-image/Rectangle 44 (Colorized).png", tint: "from-sky-500 to-blue-800" },
  { id: "auto-parts", label: "Auto Parts Dubai", src: "/slider-image/Rectangle 44 (Colorized) (1).png", tint: "from-red-600 to-zinc-900" },
];

export const galleryRowOne: GalleryItem[] = galleryItems;
export const galleryRowTwo: GalleryItem[] = galleryItems;

export const oneTeam = {
  headline: "One team behind every",
  headlineAccent: "critical part of your growth.",
  body: "Most providers improve one piece of your funnel and hand the rest back to you. FusionPro brings strategy, design, development, CRM, automation, and AI together then takes responsibility for how the complete system performs.",
  logosLabel: "Companies And Platforms We’ve Worked With.",
};

export type ClientLogo = { id: string; name: string; src: string | null };

export const clientLogos: ClientLogo[] = [
  { id: "south-america-360", name: "South America 360°", src: "/brand-logo/div.framer-evpKx.png" },
  { id: "tino", name: "Tino", src: "/brand-logo/div.framer-evpKx (1).png" },
  { id: "zfood", name: "ZFood", src: "/brand-logo/div.framer-evpKx (2).png" },
  { id: "allpoints", name: "AllPoints Construction, Inc.", src: "/brand-logo/div.framer-evpKx (3).png" },
  { id: "plug-furniture", name: "Plug Furniture", src: "/brand-logo/div.framer-evpKx (4).png" },
];

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
      src: "/system-design-card-image/Rectangle 47.png",
      tint: "from-orange-500/70 to-violet-700/70",
    },
    {
      id: "websites",
      title: "Websites &",
      titleAccent: "Landing Pages:",
      body: "Build pages, offers, and experiences that answer the buyer’s real questions and give them a convincing reason to take the next step.",
      src: "/system-design-card-image/Rectangle 47 (1).png",
      tint: "from-sky-500/70 to-indigo-800/70",
    },
    {
      id: "funnels",
      title: "Sales",
      titleAccent: "Funnels:",
      body: "Map the path from first interest to booked conversation, then remove the friction that quietly costs you opportunities.",
      src: "/system-design-card-image/Rectangle 47 (2).png",
      tint: "from-emerald-500/70 to-teal-900/70",
    },
    {
      id: "crm",
      title: "CRM &",
      titleAccent: "Lead Management:",
      body: "Give your sales team one clear view of who to contact, what was said, and what happens next.",
      src: "/system-design-card-image/Rectangle 47 (3).png",
      tint: "from-amber-500/70 to-rose-800/70",
    },
    {
      id: "follow-up",
      title: "Automated",
      titleAccent: "Follow-Up:",
      body: "Connect activity to pipeline, identify the steps costing you opportunities, and improve the system using evidence—not assumptions.",
      src: "/system-design-card-image/Rectangle 47 (4).png",
      tint: "from-zinc-500/70 to-zinc-900/70",
    },
    {
      id: "ai",
      title: "AI-Powered",
      titleAccent: "Sales Support:",
      body: "Connect activity to pipeline, identify the steps costing you opportunities, and improve the system using evidence—not assumptions.",
      src: "/system-design-card-image/Rectangle 48.png",
      tint: "from-orange-400/70 to-purple-900/70",
    },
  ] satisfies Service[],
  wide: {
    title: "Reporting & Optimization:",
    body: "Understand which activities create opportunities and where performance can be improved.",
  },
  statement: [
    "No disconnected contractors. No mystery technology stack. No finger-pointing between vendors.",
    "Just one system your team can understand, operate, and improve.",
  ],
  cta: "Talk About My Project",
};

export type VideoTestimonial = {
  id: string;
  quote: string;
  poster: string | null;
  videoSrc: string | null;
  tint: string;
};

export const videoTestimonials = {
  eyebrow: "Verified client results",
  headline: "Results that show up in the pipeline",
  headlineAccent: "not just the portfolio.",
  body: "Good design matters, but it is not the finish line. We measure the outcomes that affect growth: qualified conversion rates, response time, booked conversations, sales velocity, pipeline visibility, and revenue opportunity.",
  items: [] as VideoTestimonial[],
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
    id: "t1",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    avatar: null,
    quote:
      "FusionPro didn’t just redesign our website. They connected our messaging, lead capture, CRM, and follow-up into one clear system. For the first time, every part of our marketing feels like it’s working toward the same goal.",
  },
  {
    id: "t2",
    name: "Zeno Rocha",
    role: "CEO, Resend",
    avatar: null,
    quote:
      "Our old website looked fine, but it wasn’t producing enough serious inquiries. FusionPro helped us simplify the message, improve the customer journey, and give visitors a much clearer reason to contact us.",
  },
  {
    id: "t3",
    name: "Erik Torenberg",
    role: "CEO, Monterey AI",
    avatar: null,
    quote:
      "The follow-up system FusionPro built has made a noticeable difference. New inquiries receive the right response quickly, our team knows who owns each opportunity, and fewer promising leads are being overlooked.",
  },
  {
    id: "t4",
    name: "Sarah Chen",
    role: "Founder & CEO",
    avatar: null,
    quote:
      "FusionPro made the entire experience easier for our customers. The new pages are cleaner, the information is easier to understand, and visitors can find what they need without getting lost or overwhelmed.",
  },
  {
    id: "t5",
    name: "Vlad Matsiiako",
    role: "Co-founder, Infisical",
    avatar: null,
    quote:
      "We knew our company delivered great work, but we struggled to explain what made us different. FusionPro gave us stronger positioning and messaging that finally sounds like us—and connects with the clients we actually want.",
  },
  {
    id: "t6",
    name: "Adam Carrigan",
    role: "Co-founder, MindsDB",
    avatar: null,
    quote:
      "We were tired of coordinating separate designers, developers, and marketing contractors. FusionPro brought everything together under one strategy. Having one team responsible for the complete system made the entire project easier.",
  },
  {
    id: "t7",
    name: "Charly Poly",
    role: "CEO, Defer",
    avatar: null,
    quote:
      "We wanted to use AI but didn’t want another collection of tools nobody would use. FusionPro found practical applications for research, personalization, and sales support, then built them into the way our team already works.",
  },
  {
    id: "t8",
    name: "Anthony",
    role: "Founder",
    avatar: null,
    quote:
      "What impressed us most was that FusionPro could handle both the strategy and the implementation. They didn’t leave us with a presentation and a list of recommendations—they helped us build the actual solution.",
  },
  {
    id: "t9",
    name: "Maayan Salom",
    role: "Co-founder, Elementary",
    avatar: null,
    quote:
      "Before FusionPro, leads were sitting in different places and follow-up depended too much on memory. They organized the process, connected our CRM, and gave our sales team a much clearer way to manage opportunities.",
  },
  {
    id: "t10",
    name: "Ashley Mulligan",
    role: "Head of Product Engineering, Flatfile",
    avatar: null,
    quote:
      "FusionPro helped us understand where prospects were losing interest and rebuilt the journey around how our customers actually make decisions. The new funnel feels clearer, more focused, and much easier for our sales team to use.",
  },
  {
    id: "t11",
    name: "Mark Bao",
    role: "Co-founder, Goody",
    avatar: null,
    quote:
      "The way Mintlify’s docs were displayed just felt really user-friendly for us, and more importantly, for our developer customers. I felt like I had finally found a tool that could give us the Stripe-level documentation we wanted.",
  },
  {
    id: "t12",
    name: "Tony",
    role: "Co-founder, ProGolf",
    avatar: null,
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
