import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Section from "@/components/common/Section/Section";

export type AchievementsProps = SliceComponentProps<Content.AchievementsSlice>;

const Achievements = ({ slice }: AchievementsProps): JSX.Element => {
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
