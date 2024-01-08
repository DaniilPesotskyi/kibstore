import css from "./index.module.css";

import Section from "@/components/common/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type WorkingConditionsProps =
  SliceComponentProps<Content.WorkingConditionsSlice>;

const WorkingConditions = ({ slice }: WorkingConditionsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <div className={css.line}></div>
        <ul className={css.list}>
          {slice.items.map((i, index) => (
            <li key={index} className={css.item}>
              <div className={css.dot}></div>
              <PrismicRichText
                field={i.condition}
                components={{
                  paragraph: ({ children }) => (
                    <p className={css.condition}>{children}</p>
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default WorkingConditions;
