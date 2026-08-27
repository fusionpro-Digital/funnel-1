import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FusionPro collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      titleAccent="Policy."
      updated="August 27, 2026"
      intro="This page is a placeholder. Replace the copy below with the policy reviewed by your counsel before launch."
    />
  );
}
