"use client";

import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export type BusinessesProps = SliceComponentProps<Content.BusinessesSlice>;

const Businesses = ({ slice }: BusinessesProps): JSX.Element => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      delay: 0.3,
    });

    tl.fromTo(
      `.${css.heading}`,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
      }
    ).fromTo(
      `.${css.item}`,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.15,
      }
    );
  }, []);

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
