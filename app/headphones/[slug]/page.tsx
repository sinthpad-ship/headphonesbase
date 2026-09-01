import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHeadphone, headphones } from "../../../lib/headphones";

export function generateStaticParams() {
  return headphones.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getHeadphone(slug);
  if (!item) return {};
  return {
    title: `${item.brand} ${item.model} specifications & use cases | HeadphonesBase`,
    description: `Verified ${item.brand} ${item.model} specifications, strengths, trade-offs and official source links.`,
    alternates: { canonical: `/headphones/${item.slug}` },
  };
}

export default async function HeadphonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getHeadphone(slug);
  if (!item) notFound();

  const rows = [
    ["Type", item.type],
    ["Connection", item.connection],
    ["Impedance", item.impedance],
    ["Weight", item.weight],
    ["Battery", item.battery],
  ].filter((row) => row[1]);

  return (
    <main style={{ minHeight: "100vh", background: "#07090d", color: "#f6f8fb", fontFamily: "Arial, sans-serif", padding: "48px 24px" }}>
      <article style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#82f7c7", textDecoration: "none" }}>← HeadphonesBase</Link>
        <p style={{ marginTop: 40, color: "#82f7c7", textTransform: "uppercase", letterSpacing: ".14em", fontSize: 12 }}>{item.brand}</p>
        <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", lineHeight: 1, letterSpacing: "-.04em", margin: "12px 0 18px" }}>{item.model}</h1>
        <p style={{ color: "#aeb7c4", fontSize: 20, lineHeight: 1.5 }}>{item.type}</p>

        <section style={{ marginTop: 36, border: "1px solid #252b34", borderRadius: 16, overflow: "hidden" }}>
          {rows.map(([label, value], index) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 18, padding: 18, borderTop: index ? "1px solid #252b34" : "none" }}>
              <strong>{label}</strong><span style={{ color: "#c4ccd7" }}>{value}</span>
            </div>
          ))}
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 24 }}>
          <section style={{ background: "#0d1117", border: "1px solid #252b34", borderRadius: 16, padding: 22 }}>
            <h2 style={{ marginTop: 0 }}>Good fit for</h2>
            <ul>{item.bestFor.map((x) => <li key={x} style={{ margin: "9px 0", color: "#c9d0da" }}>{x}</li>)}</ul>
          </section>
          <section style={{ background: "#0d1117", border: "1px solid #252b34", borderRadius: 16, padding: 22 }}>
            <h2 style={{ marginTop: 0 }}>Watch for</h2>
            <ul>{item.watchFor.map((x) => <li key={x} style={{ margin: "9px 0", color: "#c9d0da" }}>{x}</li>)}</ul>
          </section>
        </div>

        <section style={{ marginTop: 30, padding: 22, borderRadius: 16, background: "#10151c" }}>
          <h2 style={{ marginTop: 0 }}>Source & freshness</h2>
          <p style={{ color: "#b7c0cb" }}>Specifications checked: {item.checkedAt}. We link to the manufacturer rather than inventing merchant price or stock status.</p>
          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#82f7c7", fontWeight: 700 }}>{item.sourceLabel} ↗</a>
        </section>

        <p style={{ marginTop: 28, color: "#7f8997", fontSize: 13, lineHeight: 1.6 }}>
          HeadphonesBase may later earn commissions from clearly marked retailer links. Manufacturer source links on this page are provided for verification and are not presented as live price or availability feeds.
        </p>
      </article>
    </main>
  );
}
