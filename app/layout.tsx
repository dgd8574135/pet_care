import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "爪爪泡泡 — 把每一份可爱，照顾得刚刚好",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
