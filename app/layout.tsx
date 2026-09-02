import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://headphonesbase.com"),
  title: {
    default: "HeadphonesBase — Verified headphone comparisons",
    template: "%s | HeadphonesBase",
  },
  description: "Compare source-backed headphone specifications, use cases and trade-offs without fabricated prices or stock claims.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://headphonesbase.com",
    siteName: "HeadphonesBase",
    title: "HeadphonesBase — Verified headphone comparisons",
    description: "Source-backed headphone specifications, comparisons and practical buyer guides.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
