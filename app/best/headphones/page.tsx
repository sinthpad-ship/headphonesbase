import Link from "next/link";
import { headphones } from "../../../lib/headphones";

export const metadata = {
  title: "Best headphones by use case in 2026 | HeadphonesBase",
  description: "A source-backed shortlist of headphones for travel, studio work, critical listening and long battery life, built from manufacturer specifications rather than invented prices.",
  alternates: { canonical: "/best/headphones" },
};

const picks = [
  { slug: "sony-wh-1000xm6", label: "Best travel-focused all-rounder", why: "30-hour manufacturer battery figure with ANC, multipoint Bluetooth and wired fallback." },
  { slug: "sennheiser-momentum-4-wireless", label: "Best for long wireless battery life", why: "Up to 60 hours via Bluetooth with ANC under manufacturer test conditions." },
  { slug: "beyerdynamic-dt-770-pro-x", label: "Best closed-back studio option in this catalog", why: "48-ohm wired studio design with detachable cable and closed-back isolation." },
  { slug: "sennheiser-hd-600", label: "Best reference-listening option in this catalog", why: "Open-back dynamic design, 300-ohm impedance and long-standing reference-oriented positioning." },
  { slug: "audio-technica-ath-m50x", label: "Best flexible wired monitor option in this catalog", why: "38-ohm closed-back monitor design with three detachable cables." },
];

export default function BestHeadphonesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#07090d", color: "#f6f8fb", fontFamily: "Arial, sans-serif", padding: "48px 24px" }}>
      <section style={{ maxWidth: 980, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#82f7c7", textDecoration: "none" }}>← HeadphonesBase</Link>
        <p style={{ marginTop: 40, color: "#82f7c7", textTransform: "uppercase", letterSpacing: ".14em", fontSize: 12 }}>Buyer guide · source-backed</p>
        <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", lineHeight: 1, letterSpacing: "-.04em", margin: "12px 0 18px" }}>Best headphones by use case in 2026</h1>
        <p style={{ color: "#aeb7c4", fontSize: 19, lineHeight: 1.6, maxWidth: 820 }}>This is not a lab ranking. It is a practical shortlist from the models currently verified in HeadphonesBase, using official manufacturer specifications and clearly stated trade-offs. No live price or stock claim is made unless a merchant feed is connected.</p>

        <div style={{ display: "grid", gap: 16, marginTop: 34 }}>
          {picks.map((pick) => {
            const item = headphones.find((x) => x.slug === pick.slug)!;
            return (
              <article key={pick.slug} style={{ border: "1px solid #252b34", background: "#0d1117", borderRadius: 16, padding: 24 }}>
                <p style={{ color: "#82f7c7", fontWeight: 700, margin: 0 }}>{pick.label}</p>
                <h2 style={{ margin: "8px 0 10px", fontSize: 28 }}>{item.brand} {item.model}</h2>
                <p style={{ color: "#c5cdd7", lineHeight: 1.6 }}>{pick.why}</p>
                <p style={{ color: "#9ea8b7", lineHeight: 1.6 }}><strong style={{ color: "#dbe1e8" }}>Watch for:</strong> {item.watchFor.join(" · ")}</p>
                <Link href={`/headphones/${item.slug}`} style={{ color: "#82f7c7", fontWeight: 700 }}>View verified profile →</Link>
              </article>
            );
          })}
        </div>

        <section style={{ marginTop: 34, padding: 22, border: "1px solid #252b34", borderRadius: 16, background: "#10151c" }}>
          <h2 style={{ marginTop: 0 }}>How HeadphonesBase makes money</h2>
          <p style={{ color: "#b7c0cb", lineHeight: 1.6 }}>Retailer buttons can be added as affiliate links once approved merchant programs are connected. Those links will be labelled, use attributable outbound URLs and remain separate from specification data. Until then, HeadphonesBase does not fabricate prices, discounts or availability.</p>
        </section>
      </section>
    </main>
  );
}
