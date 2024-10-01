import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sleepstiq",
  description: "Let's help you Relax & Rest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-poppins">
      <body>
        {children}
      </body>
    </html>
  );
}
