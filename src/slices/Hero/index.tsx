import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <div className={css.contanier}>
        <PrismicRichText
          field={slice.primary.titile}
          components={{
            heading1: ({ children }) => (
              <h1
                className={clsx(
                  slice.variation === "default" && css.title,
                  slice.variation === "alternative" && css.titleAlt
                )}
              >
                {children}
              </h1>
            ),
          }}
        />
        <div
          className={clsx(
            slice.variation === "default" && css.subTitleWrap,
            slice.variation === "alternative" && css.subTitleWrapAlr
          )}
        >
          <PrismicRichText
            field={slice.primary.subtitle}
            components={{
              paragraph: ({ children }) => (
                <p
                  className={clsx(
                    slice.variation === "default" && css.subTitle,
                    slice.variation === "alternative" && css.subTitleAlt
                  )}
                >
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
