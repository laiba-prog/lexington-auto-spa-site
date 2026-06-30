import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lexington Auto Spa | Car Wash in Lexington, KY",
  description: "Lexington Auto Spa — Keeping Lexington Vehicles Spotless Since 2005. Full-service and exterior car wash packages, Wash Club memberships, family-owned at 1124 Winchester Road.",
};

const LOGO_URL = "https://ucarecdn.com/d1eb0081-8c1c-4fae-b9ba-efde99cd14d1/";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer logoUrl={LOGO_URL} />
      </body>
    </html>
  );
}
