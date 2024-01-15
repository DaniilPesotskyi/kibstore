"use client";

import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { useLayoutEffect } from "react";

import { gsap } from "gsap";

export type WorkingConditionsProps =
  SliceComponentProps<Content.WorkingConditionsSlice>;

const WorkingConditions = ({ slice }: WorkingConditionsProps): JSX.Element => {
  useLayoutEffect(() => {
    gsap.fromTo(
      `.${css.line}`,
      {
        height: 0,
      },
      {
        height: "100%",
        duration: 2,
      }
    );

    gsap.fromTo(
      `.${css.dot}`,
      { scale: 0 },
      { scale: 1, duration: 0.4, stagger: 0.4 }
    );

    gsap.fromTo(
      `.${css.condition}`,
      {
        x: -20,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.4,
      }
    );
  }, []);

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
