import css from "./index.module.css";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type VacanciesProps = SliceComponentProps<Content.VacanciesSlice>;

const Vacancies = ({ slice }: VacanciesProps): JSX.Element => {
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
          <li className={css.item}></li>
        </ul>
      </div>
    </Section>
  );
};

export default Vacancies;
