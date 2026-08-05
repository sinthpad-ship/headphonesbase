import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeadphonesBase — Find Your Sound",
  description:
    "Personalized headphone recommendations for your music, devices and listening habits.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
