import Link from "next/link";
import { headphones } from "../lib/headphones";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#07090d", color: "#f6f8fb", fontFamily: "Arial, sans-serif" }}>
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 24px 40px" }}>
        <p style={{ color: "#82f7c7", textTransform: "uppercase", letterSpacing: ".18em", fontSize: 12 }}>Independent headphone intelligence</p>
        <h1 style={{ fontSize: "clamp(44px, 7vw, 82px)", lineHeight: .98, letterSpacing: "-.05em", margin: "20px 0" }}>
          Find headphones by use case, not hype.
        </h1>
        <p style={{ maxWidth: 760, color: "#bec6d2", fontSize: 20, lineHeight: 1.6 }}>
          HeadphonesBase turns manufacturer specifications into a clear comparison layer for travel, studio work and everyday listening. We do not publish invented prices or availability.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <Link href="#catalog" style={{ padding: "14px 18px", borderRadius: 10, background: "#82f7c7", color: "#07110d", fontWeight: 700, textDecoration: "none" }}>Browse verified models</Link>
          <Link href="/compare" style={{ padding: "14px 18px", borderRadius: 10, border: "1px solid #303640", color: "#f6f8fb", textDecoration: "none" }}>Compare models</Link>
        </div>
      </section>

      <section id="catalog" style={{ maxWidth: 1120, margin: "0 auto", padding: "24px 24px 72px" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 32, marginBottom: 8 }}>Verified catalog</h2>
            <p style={{ margin: 0, color: "#9ea8b7" }}>Every listed specification links back to an official manufacturer source.</p>
          </div>
          <small style={{ color: "#7f8997" }}>Seed catalog · expanding continuously</small>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {headphones.map((item) => (
            <article key={item.slug} style={{ border: "1px solid #252b34", background: "#0d1117", borderRadius: 16, padding: 22 }}>
              <p style={{ margin: 0, color: "#82f7c7", fontSize: 13 }}>{item.brand}</p>
              <h3 style={{ fontSize: 24, margin: "8px 0 10px" }}>{item.model}</h3>
              <p style={{ color: "#aeb7c4", lineHeight: 1.5 }}>{item.type}</p>
              <p style={{ color: "#d5dbe4", fontSize: 14 }}><strong>Best for:</strong> {item.bestFor.join(" · ")}</p>
              <Link href={`/headphones/${item.slug}`} style={{ display: "inline-block", marginTop: 10, color: "#82f7c7", fontWeight: 700, textDecoration: "none" }}>View verified profile →</Link>
            </article>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid #20262e", padding: "28px 24px 48px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", color: "#87919e", lineHeight: 1.6, fontSize: 14 }}>
          <strong style={{ color: "#d9dee6" }}>Commercial disclosure:</strong> HeadphonesBase is being built to support affiliate-funded outbound shopping links. A commission may be earned from qualifying purchases when an affiliate relationship is active. Editorial/specification data is kept separate from merchant price and availability claims.
        </div>
      </section>
    </main>
  );
}
