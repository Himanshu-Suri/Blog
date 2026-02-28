import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "My random blog", template: "%s | Signal Blog" },
  description: "Deep learning, SDR, and signal processing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-[#b8cfd8] font-sans min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}