import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HeadphonesBase — Find Your Sound",
  description:
    "Personalized headphone recommendations for your music and devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
