import Heading from "@/components/common/Heading/Heading";
import css from "./index.module.css";

import Section from "@/components/common/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

const Benefits = ({ slice }: BenefitsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.title} position="right" />
      <ul className={css.list}>
        {slice.items.map((i, index) => (
          <li key={index} className={css.item}>
            <div className={css.heading}>
              <div className={css.icon}></div>
              <PrismicRichText
                field={i.title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className={css.title}>{children}</h3>
                  ),
                }}
              />
            </div>
            <PrismicRichText
              field={i.description}
              components={{
                paragraph: ({ children }) => (
                  <p className={css.description}>{children}</p>
                ),
              }}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Benefits;
