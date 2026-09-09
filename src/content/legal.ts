/**
 * Copy for /privacy and /terms.
 *
 * A block is either a paragraph (string) or a bullet list (string[]).
 *
 * This is generic, industry-standard copy written for a marketing services
 * site — it is not legal advice. Two things to settle before launch: the
 * "Governing Law" clause names no specific jurisdiction, and the whole
 * document should be reviewed by counsel.
 */
export type LegalBlock = string | string[];

export type LegalSection = { heading: string; body: LegalBlock[] };

export const LEGAL_CONTACT_EMAIL = "hello@fusionprodigital.com";

export const LEGAL_UPDATED = "September 9, 2026";

export const privacyPolicy: LegalSection[] = [
  {
    heading: "1. Who We Are",
    body: [
      "FusionPro Digital (“FusionPro,” “we,” “us,” or “our”) provides positioning, website, funnel, CRM, and marketing automation services. This Privacy Policy explains what information we collect through fusionprodigital.com (the “Site”), why we collect it, and the choices you have.",
      `If you have a question about this policy or about how your information is handled, contact us at ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
  {
    heading: "2. Information You Give Us",
    body: [
      "When you submit our contact form or book a call, we collect the details you choose to provide:",
      [
        "Your name",
        "Your email address",
        "Your phone number",
        "Your company or organisation name",
        "The service you are interested in",
        "Any message or project details you include",
      ],
      "We only ask for what we need to respond to your enquiry and to assess whether we are a good fit for your goals. Please do not send confidential or sensitive personal information through the contact form.",
    ],
  },
  {
    heading: "3. Information Collected Automatically",
    body: [
      "Like most websites, our hosting and analytics providers may record limited technical information when you visit the Site — such as your IP address, browser type and version, device type, referring page, the pages you view, and the dates and times of your visits.",
      "We use this information in aggregate to keep the Site secure, diagnose problems, and understand which pages are useful. We do not use it to build advertising profiles about you.",
    ],
  },
  {
    heading: "4. How We Use Your Information",
    body: [
      "We use the information described above to:",
      [
        "Respond to your enquiry and arrange a call or meeting",
        "Prepare proposals, scopes of work, and estimates you have asked for",
        "Provide, operate, and improve the services you engage us for",
        "Maintain business records and communicate with you during an active engagement",
        "Keep the Site secure and prevent spam, fraud, and abuse",
        "Comply with our legal, tax, and accounting obligations",
      ],
      "We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.",
    ],
  },
  {
    heading: "5. Our Legal Bases",
    body: [
      "Where data protection law requires a legal basis for processing, we rely on the following: your consent, when you voluntarily submit a form; the performance of a contract, when we are delivering services to you; our legitimate interests in operating, securing, and improving our business; and compliance with our legal obligations.",
      "Where we rely on consent, you may withdraw it at any time. Withdrawing consent does not affect processing that has already taken place.",
    ],
  },
  {
    heading: "6. How We Share Information",
    body: [
      "We share personal information only where it is necessary, and only with parties that are bound to protect it:",
      [
        "Service providers who operate the Site and our business on our behalf — including hosting, email delivery, scheduling, analytics, and CRM tools",
        "Professional advisers such as our accountants and lawyers, where required",
        "Authorities or other parties where disclosure is required by law, or is necessary to establish, exercise, or defend legal claims",
        "A successor entity in connection with a merger, acquisition, or sale of assets, subject to the protections in this policy",
      ],
      "Our providers are permitted to process your information only to deliver their service to us, and not for their own purposes.",
    ],
  },
  {
    heading: "7. Cookies And Similar Technologies",
    body: [
      "The Site may use cookies and similar technologies to keep it working correctly, remember your preferences, and measure how it is used. Essential cookies are required for the Site to function; other cookies are optional.",
      "Most browsers let you refuse or delete cookies through their settings. Blocking cookies may affect how parts of the Site behave.",
    ],
  },
  {
    heading: "8. How Long We Keep Information",
    body: [
      "We keep enquiry details for as long as we need them to respond and to follow up on a potential engagement. Records relating to an active or completed engagement are kept for as long as the relationship continues, and afterwards for the period required by our legal, tax, and accounting obligations.",
      "When information is no longer needed for these purposes, we delete it or anonymise it.",
    ],
  },
  {
    heading: "9. Your Rights And Choices",
    body: [
      "Depending on where you live, you may have the right to:",
      [
        "Request a copy of the personal information we hold about you",
        "Ask us to correct information that is inaccurate or incomplete",
        "Ask us to delete information we no longer have a reason to keep",
        "Object to, or ask us to restrict, certain processing",
        "Ask us to transfer your information to another provider",
        "Opt out of marketing emails at any time, using the unsubscribe link or by contacting us",
      ],
      `To exercise any of these rights, email ${LEGAL_CONTACT_EMAIL}. We will respond within the timeframe required by applicable law, and we may need to verify your identity before acting on a request.`,
    ],
  },
  {
    heading: "10. Security",
    body: [
      "We use reasonable technical and organisational measures to protect personal information against loss, misuse, and unauthorised access — including encrypted connections, access controls, and reputable service providers.",
      "No website or method of transmission is completely secure, so we cannot guarantee absolute security. If we become aware of a breach affecting your information, we will notify you and the relevant authorities where the law requires it.",
    ],
  },
  {
    heading: "11. International Transfers",
    body: [
      "Our service providers may store or process information in countries other than your own. Where information is transferred internationally, we take steps to ensure it remains protected by appropriate safeguards, such as standard contractual clauses or an equivalent mechanism.",
    ],
  },
  {
    heading: "12. Children’s Privacy",
    body: [
      "The Site and our services are intended for businesses and are not directed to children. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with information, contact us and we will delete it.",
    ],
  },
  {
    heading: "13. Third-Party Websites",
    body: [
      "The Site may link to websites and tools we do not control, such as scheduling platforms and social media. This policy does not cover those services, and we are not responsible for their practices. We encourage you to read their privacy policies before providing information.",
    ],
  },
  {
    heading: "14. Changes To This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or in the law. When we do, we will revise the “Last updated” date at the top of this page, and we will communicate material changes more prominently where required.",
    ],
  },
  {
    heading: "15. Contact Us",
    body: [
      `If you have a question, a request, or a complaint about how we handle your information, email ${LEGAL_CONTACT_EMAIL} and we will get back to you. You also have the right to lodge a complaint with your local data protection authority.`,
    ],
  },
];

export const termsAndConditions: LegalSection[] = [
  {
    heading: "1. Agreement To These Terms",
    body: [
      "These Terms & Conditions (“Terms”) govern your access to and use of fusionprodigital.com (the “Site”), operated by FusionPro Digital (“FusionPro,” “we,” “us,” or “our”). By using the Site or submitting an enquiry, you agree to these Terms.",
      "If you do not agree with these Terms, please do not use the Site.",
    ],
  },
  {
    heading: "2. Use Of The Site",
    body: [
      "You may use the Site for lawful purposes and to learn about or enquire about our services. You agree not to:",
      [
        "Use the Site in any way that breaches applicable law or regulation",
        "Attempt to gain unauthorised access to the Site, its servers, or any connected system",
        "Interfere with or disrupt the Site, including by introducing malware or attempting to overload it",
        "Scrape, harvest, or systematically extract content or contact details from the Site",
        "Submit false, misleading, or fraudulent information through our forms",
        "Use the Site to send unsolicited commercial messages",
      ],
      "We may suspend or restrict access to the Site, in whole or in part, at any time and without notice.",
    ],
  },
  {
    heading: "3. Intellectual Property",
    body: [
      "The Site and its contents — including text, graphics, layout, design, logos, icons, images, video, and code — are owned by FusionPro Digital or licensed to us, and are protected by intellectual property laws.",
      "You may view and print pages for your own internal reference. You may not copy, reproduce, republish, distribute, modify, or create derivative works from any part of the Site for commercial purposes without our prior written permission. The FusionPro name and logo may not be used without our consent.",
    ],
  },
  {
    heading: "4. Information You Submit",
    body: [
      "When you submit information through the Site, you confirm that it is accurate and that you are entitled to provide it. You are responsible for the content of anything you send us.",
      "We handle information you submit in line with our Privacy Policy. Please do not send confidential information through the Site before a confidentiality agreement is in place.",
    ],
  },
  {
    heading: "5. Enquiries, Proposals, And Engagements",
    body: [
      "Nothing on the Site is an offer to enter into a contract, and submitting an enquiry does not create a client relationship. Descriptions of services, timelines, and approaches on the Site are indicative and may change.",
      "If we work together, the engagement will be governed by a separate written agreement — a proposal, statement of work, or services agreement — covering scope, deliverables, fees, timelines, and responsibilities. Where that agreement conflicts with these Terms, the agreement takes precedence for that engagement.",
    ],
  },
  {
    heading: "6. No Guarantee Of Results",
    body: [
      "Marketing and growth outcomes depend on many factors outside our control, including your market, your offer, your pricing, your sales process, competitor activity, and third-party platforms.",
      "Case studies, testimonials, and results shown on the Site describe outcomes achieved by specific clients under specific conditions. They are examples, not promises, and should not be taken as a guarantee or projection of the results you will achieve. Nothing on the Site is financial, legal, or other professional advice.",
    ],
  },
  {
    heading: "7. Third-Party Links And Services",
    body: [
      "The Site may link to or rely on third-party websites, platforms, and tools that we do not control. We provide those links for convenience and do not endorse or accept responsibility for their content, availability, or practices. Your use of a third-party service is governed by that provider’s own terms.",
    ],
  },
  {
    heading: "8. Availability Of The Site",
    body: [
      "We aim to keep the Site available and accurate, but we do not guarantee uninterrupted or error-free access. The Site may be unavailable during maintenance or because of circumstances beyond our control, and we may change or remove content at any time without notice.",
    ],
  },
  {
    heading: "9. Disclaimer Of Warranties",
    body: [
      "To the fullest extent permitted by law, the Site and its content are provided “as is” and “as available,” without warranties of any kind, whether express or implied — including implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement.",
    ],
  },
  {
    heading: "10. Limitation Of Liability",
    body: [
      "To the fullest extent permitted by law, FusionPro Digital and its team will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profit, revenue, data, business, or goodwill, arising out of your use of — or inability to use — the Site.",
      "Nothing in these Terms limits liability that cannot be limited by law, including liability for death or personal injury caused by negligence, or for fraud.",
    ],
  },
  {
    heading: "11. Indemnity",
    body: [
      "You agree to indemnify and hold FusionPro Digital harmless from any claims, losses, liabilities, and reasonable costs arising from your misuse of the Site, your breach of these Terms, or your infringement of the rights of any third party.",
    ],
  },
  {
    heading: "12. Privacy",
    body: [
      "Our Privacy Policy explains how we collect, use, and protect personal information, and forms part of these Terms. By using the Site, you also agree to the practices described there.",
    ],
  },
  {
    heading: "13. Governing Law",
    body: [
      "These Terms, and any dispute arising out of or in connection with them, are governed by the laws of the jurisdiction in which FusionPro Digital is established, without regard to its conflict of law rules. The courts of that jurisdiction have exclusive jurisdiction over any such dispute.",
    ],
  },
  {
    heading: "14. Changes To These Terms",
    body: [
      "We may update these Terms from time to time. The version published on this page is the one that applies, and the “Last updated” date shows when it last changed. Continuing to use the Site after a change means you accept the revised Terms.",
    ],
  },
  {
    heading: "15. General",
    body: [
      "If any provision of these Terms is found to be unenforceable, the remaining provisions stay in full effect. Our failure to enforce a provision is not a waiver of it. These Terms are personal to you and may not be assigned without our written consent.",
    ],
  },
  {
    heading: "16. Contact Us",
    body: [
      `If you have a question about these Terms, email ${LEGAL_CONTACT_EMAIL}.`,
    ],
  },
];
