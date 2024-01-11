import css from "./Layout.module.css";

import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { createClient } from "@/prismicio";

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
      <main className={css.main}>{children}</main>
      <Footer settings={settings} footer={footer} />
    </>
  );
}
