import Link from "next/link";
import { headphones } from "../../lib/headphones";

export const metadata = {
  title: "Headphone categories by use case | HeadphonesBase",
  description: "Browse verified headphones by real use case, with manufacturer-sourced specifications.",
};

export default function CategoriesPage() {
  const categories = Array.from(new Set(headphones.flatMap((item) => item.bestFor))).sort();
  return (
    <main style={{ minHeight: "100vh", background: "#07090d", color: "#f6f8fb", fontFamily: "Arial, sans-serif", padding: "48px 24px" }}>
      <section style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#82f7c7", textDecoration: "none" }}>← HeadphonesBase</Link>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 68px)", letterSpacing: "-.04em", marginBottom: 12 }}>Browse by use case</h1>
        <p style={{ color: "#aeb7c4", fontSize: 19, lineHeight: 1.6, maxWidth: 760 }}>These categories are generated only from models already present in the verified HeadphonesBase dataset. No live price or stock claims are shown.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14, marginTop: 32 }}>
          {categories.map((category) => {
            const items = headphones.filter((item) => item.bestFor.includes(category));
            return <section key={category} style={{ border: "1px solid #252b34", borderRadius: 16, background: "#0d1117", padding: 20 }}>
              <h2 style={{ marginTop: 0, fontSize: 21 }}>{category}</h2>
              <p style={{ color: "#8f99a7", fontSize: 13 }}>{items.length} verified {items.length === 1 ? "model" : "models"}</p>
              {items.map((item) => <Link key={item.slug} href={`/headphones/${item.slug}`} style={{ display: "block", color: "#82f7c7", textDecoration: "none", marginTop: 10 }}>{item.brand} {item.model} →</Link>)}
            </section>;
          })}
        </div>
      </section>
    </main>
  );
}
