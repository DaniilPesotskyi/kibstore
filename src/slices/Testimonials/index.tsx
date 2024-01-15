"use client";

import css from "./index.module.css";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { TestimonialDocument } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

import { useEffect, useState } from "react";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";
import { useParams } from "next/navigation";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  const [data, setData] = useState<TestimonialDocument<string>[]>();
  const params = useParams();

  useEffect(() => {
    async function fetchTestimonials() {
      const client = createClient();
      const testimonals = await client.getAllByType("testimonial", {
        lang: params.lang,
      });

      setData(testimonals);
    }

    fetchTestimonials();
  }, []);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <Heading field={slice.primary.title} position="center" />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        className={css.swiper}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data?.map((i, index) => (
          <SwiperSlide key={index} className={css.slide}>
            <div className={css.information}>
              <PrismicRichText
                field={i.data.highlighted_text}
                components={{
                  heading3: ({ children }) => (
                    <h3 className={css.highlighted}>{children}</h3>
                  ),
                }}
              />
              <ul className={css.stars}>
                <li className={css.star}>
                  <StarIcon className={css.icon} />
                </li>
                <li className={css.star}>
                  <StarIcon className={css.icon} />
                </li>
                <li className={css.star}>
                  <StarIcon className={css.icon} />
                </li>
                <li className={css.star}>
                  <StarIcon className={css.icon} />
                </li>
                <li className={css.star}>
                  <StarIcon className={css.icon} />
                </li>
              </ul>
              <div className={css.author}>
                <PrismicNextImage
                  className={css.avatar}
                  field={i.data.avatar}
                />
                {i.data.author}
              </div>
            </div>
            <PrismicRichText
              field={i.data.main_text}
              components={{
                paragraph: ({ children }) => (
                  <p className={css.testimonail}>{children}</p>
                ),
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <g clipPath="url(#a)">
        <path d="M10.92 2.868a1.25 1.25 0 012.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 01.667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 01-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 01-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 01.667-2.055l5.428-1.176 2.795-4.798z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Testimonials;
