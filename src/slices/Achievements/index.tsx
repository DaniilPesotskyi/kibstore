"use client";

import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Section from "@/components/common/Section/Section";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export type AchievementsProps = SliceComponentProps<Content.AchievementsSlice>;

const Achievements = ({ slice }: AchievementsProps): JSX.Element => {
  useLayoutEffect(() => {
    gsap.fromTo(
      `.${css.item}`,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        delay: 0.3,
        scrollTrigger: {
          trigger: `.${css.item}`,
        },
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
        <ul className={css.list}>
          {slice.items.map((i, index) => (
            <li className={css.item} key={index}>
              <span className={css.value}>{i.value}</span>
              <span className={css.label}>{i.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Achievements;
