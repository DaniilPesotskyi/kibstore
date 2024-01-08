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
        <div className={css.logo}>
          <LogoElementIcon className={css.logoElement} />
          <LogoElementIcon className={css.logoElement} />
          <LogoElementIcon className={css.logoElement} />
        </div>
      </div>
    </Section>
  );
};

function LogoElementIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 114 702"
    >
      <path
        fill="#141414"
        strokeMiterlimit="10"
        d="M.94 1.18l113.1 82.076v619.925L1.057 621.193.94 1.181z"
      ></path>
    </svg>
  );
}

export default About;
