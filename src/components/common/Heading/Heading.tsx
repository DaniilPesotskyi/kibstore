import css from "./Heading.module.css";

import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";
import clsx from "clsx";

interface IProps {
  field: RichTextField;
  position: "left" | "right" | "center";
  className?: string;
}

const Heading: React.FC<IProps> = ({ field, position, className }) => {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading2: ({ children }) => (
          <h2
            className={clsx(
              css.title,
              className,
              position === "left" && css.left,
              position === "right" && css.right,
              position === "center" && css.center
            )}
          >
            {children}
          </h2>
        ),
      }}
    />
  );
};

export default Heading;
