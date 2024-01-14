"use client";

import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type PartnersProps = SliceComponentProps<Content.PartnersSlice>;

gsap.registerPlugin(ScrollTrigger);

const Partners = ({ slice }: PartnersProps): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        `.${css.list}`,
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <div className={css.wrap} ref={component}>
        <div className={css.partners}>
          {slice.items.map(({ color, partner }, index) => (
            <div key={index} className={css.list} aria-label={partner || ""}>
              {Array.from({ length: 15 }, (_, index) => (
                <span
                  key={index}
                  className={css.item}
                  style={{ color: `${index === 7 ? color : ""}` }}
                >
                  {partner}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className={css.value}></div>
      </div>
    </Section>
  );
};

export default Partners;
