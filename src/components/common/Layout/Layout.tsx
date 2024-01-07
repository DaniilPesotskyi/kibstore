import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { createClient } from "@/prismicio";
import {} from "@prismicio/client";

export default async function Layout({
  children,
  params: { lang },
  locales,
}: {
  children: React.ReactNode;
  params: { lang: string };
  locales: [];
}) {
  const client = createClient();

  const settings = await client.getSingle("settings", { lang });
  const footer = await client.getSingle("footer", { lang });

  return (
    <>
      <Header
        lang={lang}
        settings={settings}
        navigation={settings.data.navigation}
        locales={locales}
      />
      {children}
      <Footer settings={settings} footer={footer} />
    </>
  );
}
