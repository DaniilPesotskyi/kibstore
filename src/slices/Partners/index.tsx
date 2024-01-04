import css from "./index.module.css";

import Section from "@/components/common/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type PartnersProps = SliceComponentProps<Content.PartnersSlice>;

const Partners = ({ slice }: PartnersProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <div className={css.wrap}>
        <div className={css.partners}>
          <ul className={css.list}>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
          </ul>
          <ul className={css.list}>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
          </ul>
          <ul className={css.list}>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
            <li className={css.item}>AJAX</li>
          </ul>
        </div>
        <div className={css.value}></div>
      </div>
    </Section>
  );
};

export default Partners;
