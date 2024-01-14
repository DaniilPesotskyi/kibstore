"use client";

import css from "./index.module.css";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export type OffersProps = SliceComponentProps<Content.OffersSlice>;

const Offers = ({ slice }: OffersProps): JSX.Element => {
  useLayoutEffect(() => {
    const items = document.querySelectorAll(`.${css.item}`);

    items.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
        },
      });

      const title = item.querySelectorAll(`.${css.title}`);
      const description = item.querySelectorAll(`.${css.description}`);

      tl.fromTo(
        title,
        {
          x: -20,
          opacity: 0,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        }
      );

      tl.fromTo(
        description,
        {
          x: -20,
          opacity: 0,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        }
      );
    });
  }, []);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <Heading
        field={slice.primary.title}
        position="left"
        className={css.heading}
      />
      <ul className={css.list}>
        {slice.items.map((i, index) => (
          <li key={index} className={css.wrap}>
            <div className={css.item}>
              <div className={css.infoBlock}>
                <PrismicRichText
                  field={i.title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className={css.title}>{children}</h3>
                    ),
                  }}
                />
                <PrismicRichText
                  field={i.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className={css.description}>{children}</p>
                    ),
                  }}
                />
                <PrismicNextLink field={i.button_link} className={css.link}>
                  {i.button_label}
                  <ArrowIcon className={css.icon} />
                </PrismicNextLink>
              </div>
              <PrismicNextImage field={i.image} className={css.image} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        // fill="#fff"
        d="M10.905 3.008a.536.536 0 10-.743.772l5.91 5.686H2.679a.536.536 0 000 1.071H16.07l-5.91 5.685a.535.535 0 00.743.772l6.735-6.478a.714.714 0 000-1.03l-6.734-6.478z"
      ></path>
    </svg>
  );
}

export default Offers;
