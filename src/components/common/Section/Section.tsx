import css from "./Section.module.css";

import clsx from "clsx";

interface IProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({
  as: Comp = "section",
  className,
  children,
}) => {
  return <Comp className={clsx(css.section, className)}>{children}</Comp>;
};

export default Section;
