import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  style: "normal",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "KIBSTORE",
    description: settings.data.meta_description || "",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();

  const settings = await client.getSingle("settings");
  const footer = await client.getSingle("footer");

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header settings={settings} navigation={settings.data.navigation} />
        {children}
        <Footer settings={settings} footer={footer} />
      </body>
    </html>
  );
}
