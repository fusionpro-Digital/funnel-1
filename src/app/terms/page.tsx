import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the FusionPro website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms &"
      titleAccent="Conditions."
      updated="August 27, 2026"
      intro="This page is a placeholder. Replace the copy below with the terms reviewed by your counsel before launch."
    />
  );
}
