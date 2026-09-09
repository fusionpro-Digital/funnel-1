import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { LEGAL_UPDATED, termsAndConditions } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the FusionPro website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms &"
      titleAccent="Conditions."
      updated={LEGAL_UPDATED}
      intro="These terms cover how you may use this website and what you can expect from us. Any project we take on is governed by its own written agreement, which sits alongside the terms below."
      sections={termsAndConditions}
    />
  );
}
