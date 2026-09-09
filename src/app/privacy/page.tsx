import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { LEGAL_UPDATED, privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FusionPro collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      titleAccent="Policy."
      updated={LEGAL_UPDATED}
      intro="We keep this simple: we collect only what we need to answer your enquiry and deliver our work, we tell you exactly how it is used, and we never sell it. This policy explains the details."
      sections={privacyPolicy}
    />
  );
}
