import css from "./index.module.css";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TechnologiesProps = SliceComponentProps<Content.TechnologiesSlice>;

const Technologies = ({ slice }: TechnologiesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading position="center" field={slice.primary.title} />
      <ul className={css.list}>
        {slice.items.map((i, index) => (
          <li key={index} className={css.item}>
            <div className={css.info}>
              <PrismicRichText
                field={i.title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className={css.title}>{children}</h3>
                  ),
                }}
              />
              <PrismicRichText
                field={i.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className={css.description}>{children}</p>
                  ),
                }}
              />
            </div>
            <PrismicNextImage field={i.image} className={css.image} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Technologies;
