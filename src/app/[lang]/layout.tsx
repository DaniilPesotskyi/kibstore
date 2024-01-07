import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { createClient } from "@/prismicio";

export default async function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const client = createClient();

  const settings = await client.getSingle("settings", { lang });
  const footer = await client.getSingle("footer", { lang });

  return (
    <>
      <Header
        settings={settings}
        navigation={settings.data.navigation}
        lang={lang}
      />
      {children}
      <Footer settings={settings} footer={footer} />
    </>
  );
}
