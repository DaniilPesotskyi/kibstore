"use client";

import css from "./index.module.css";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";
import VacancyItem from "@/components/common/VacancyItem/VacancyItem";
import { createClient } from "@/prismicio";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { VacancyDocument } from "../../../prismicio-types";

export type VacanciesProps = SliceComponentProps<Content.VacanciesSlice>;

const Vacancies = ({ slice }: VacanciesProps): JSX.Element => {
  const [data, setData] = useState<VacancyDocument<string>[]>();

  const params = useParams();

  useEffect(() => {
    async function fetchVacancies() {
      const client = createClient();
      const vacancies = await client.getAllByType("vacancy", {
        lang: params.lang,
      });

      setData(vacancies);
    }

    fetchVacancies();
  }, []);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <Heading field={slice.primary.title} position="left" />
        <PrismicRichText
          field={slice.primary.subtitle}
          components={{
            paragraph: ({ children }) => (
              <p className={css.subtitle}>{children}</p>
            ),
          }}
        />
        <ul className={css.list}>
          {data?.map((i, index) => (
            <li key={index}>
              <VacancyItem vacancy={i} lang={params.lang} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Vacancies;
