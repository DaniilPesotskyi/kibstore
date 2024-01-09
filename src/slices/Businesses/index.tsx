import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type BusinessesProps = SliceComponentProps<Content.BusinessesSlice>;

const Businesses = ({ slice }: BusinessesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            paragraph: ({ children }) => (
              <p className={css.heading}>{children}</p>
            ),
          }}
        />
        <ul className={css.list}>
          {slice.items.map((i, index) => (
            <li className={css.item} key={index}>
              {i.business}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Businesses;
