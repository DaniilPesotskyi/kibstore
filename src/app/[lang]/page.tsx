import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Layout from "@/components/common/Layout/Layout";

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });
  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} params={params}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
