import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <div className={css.paragraphs}>
          <PrismicRichText
            field={slice.primary.first_paragraph}
            components={{
              paragraph: ({ children }) => (
                <p className={css.paragraph}>{children}</p>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.second_paragraph}
            components={{
              paragraph: ({ children }) => (
                <p className={css.paragraph}>{children}</p>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.third_paragraph}
            components={{
              paragraph: ({ children }) => (
                <p className={css.paragraph}>{children}</p>
              ),
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
