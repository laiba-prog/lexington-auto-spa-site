import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShimmerBackground from "@/components/ShimmerBackground";

const SITE_URL = "https://www.lexingtonautospa.com";
const LOGO_URL = "https://ucarecdn.com/d1eb0081-8c1c-4fae-b9ba-efde99cd14d1/";
const TITLE = "Lexington Auto Spa | Car Wash in Lexington, KY";
const DESCRIPTION =
  "Lexington Auto Spa — Keeping Lexington Vehicles Spotless Since 2005. Full-service and exterior car wash packages, Wash Club memberships, family-owned at 1124 Winchester Road.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Lexington Auto Spa" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Lexington Auto Spa",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: LOGO_URL, width: 800, height: 250, alt: "Lexington Auto Spa" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO_URL],
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Lexington Auto Spa",
  image: LOGO_URL,
  url: SITE_URL,
  telephone: "+1-859-254-9663",
  email: "info@lexingtonautospa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1124 Winchester Road",
    addressLocality: "Lexington",
    addressRegion: "KY",
    postalCode: "40505",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/lexingtonautospaky/",
    "https://www.facebook.com/lexingtonautospa/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <ShimmerBackground fixed />
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer logoUrl={LOGO_URL} />
        </div>
      </body>
    </html>
  );
}
