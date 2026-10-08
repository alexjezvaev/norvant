import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { QuoteRequestProvider } from "@/components/shared/QuoteRequest";
import { pageSeo } from "@/lib/seo";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

const home = pageSeo.home;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: home.title,
    template: `%s · ${site.name}`,
  },
  description: home.description,
  applicationName: site.name,
  alternates: {
    canonical: home.path,
  },
  openGraph: {
    title: home.title,
    description: home.description,
    url: home.path,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <QuoteRequestProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteRequestProvider>
      </body>
    </html>
  );
}
