import Link from "next/link";
import { headphones } from "../../lib/headphones";

export const metadata = {
  title: "Compare headphones | HeadphonesBase",
  description: "Compare verified headphone specifications and use cases without fabricated price or stock claims.",
};

export default function ComparePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#07090d", color: "#f6f8fb", fontFamily: "Arial, sans-serif", padding: "48px 24px" }}>
      <section style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Link href="/" style={{ color: "#82f7c7", textDecoration: "none" }}>← HeadphonesBase</Link>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 68px)", marginBottom: 12 }}>Compare verified models</h1>
        <p style={{ color: "#aeb7c4", fontSize: 18, maxWidth: 760 }}>A factual comparison layer based on manufacturer specifications. Price and retailer availability are intentionally omitted until a live, attributable merchant feed is connected.</p>
        <div style={{ overflowX: "auto", marginTop: 32, border: "1px solid #252b34", borderRadius: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
            <thead><tr>{["Model","Type","Connection","Impedance","Battery","Best for"].map((h) => <th key={h} style={{ textAlign: "left", padding: 16, borderBottom: "1px solid #252b34", color: "#82f7c7" }}>{h}</th>)}</tr></thead>
            <tbody>{headphones.map((item) => <tr key={item.slug}>
              <td style={{ padding: 16, borderBottom: "1px solid #20262e" }}><Link href={`/headphones/${item.slug}`} style={{ color: "#f6f8fb", fontWeight: 700 }}>{item.brand} {item.model}</Link></td>
              <td style={{ padding: 16, borderBottom: "1px solid #20262e", color: "#c5cdd7" }}>{item.type}</td>
              <td style={{ padding: 16, borderBottom: "1px solid #20262e", color: "#c5cdd7" }}>{item.connection}</td>
              <td style={{ padding: 16, borderBottom: "1px solid #20262e", color: "#c5cdd7" }}>{item.impedance || "—"}</td>
              <td style={{ padding: 16, borderBottom: "1px solid #20262e", color: "#c5cdd7" }}>{item.battery || "—"}</td>
              <td style={{ padding: 16, borderBottom: "1px solid #20262e", color: "#c5cdd7" }}>{item.bestFor.join(", ")}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
