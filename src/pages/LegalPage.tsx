import { useEffect } from "react";
import { useRouter } from "../lib/router";

const content = {
  privacy: {
    title: "Privacy Policy",
    body: "We respect your privacy. We collect personal data (name, email, phone, country) only to respond to consultation requests and provide our services. We never sell your data. You may request deletion at any time by emailing privacy@studyinggermany.de.",
  },
  terms: {
    title: "Terms of Service",
    body: "By using studyinggermany.de, you agree to provide accurate information and understand that consultation outcomes depend on your individual profile and circumstances. We do not guarantee university admission or visa approval.",
  },
  imprint: {
    title: "Impressum",
    body: "StudyingGermany.de is operated by an education consultancy registered in Germany. For legal inquiries, contact legal@studyinggermany.de.",
  },
};

export default function LegalPage({
  page,
}: {
  page: "privacy" | "terms" | "imprint";
}) {
  const { navigate } = useRouter();
  const { title, body } = content[page];

  useEffect(() => {
    document.title = `${title} - StudyingGermany.de`;
  }, [title]);

  return (
    <main className="container-page pt-32 pb-20 sm:pt-40">
      <div className="max-w-2xl">
        <span className="section-eyebrow">Legal</span>
        <h1 className="mt-5 font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {body}
        </p>
        <p className="mt-8 text-xs text-slate-400">
          Last updated: January 2026
        </p>
        <button onClick={() => navigate("/")} className="btn-primary mt-8">
          Back to Home
        </button>
      </div>
    </main>
  );
}
