import css from "./index.module.css";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.title} position="center" />
      
    </Section>
  );
};

export default Testimonials;
