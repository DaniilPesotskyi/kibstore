"use client";

import css from "./VacancyItem.module.css";

import { VacancyDocument } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

interface IProps {
  vacancy: VacancyDocument<string>;
  lang: string;
}

const VacancyItem: React.FC<IProps> = ({ vacancy, lang }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={css.wrap}>
      <div className={css.heading}>
        <PrismicRichText
          field={vacancy.data.title}
          components={{
            heading2: ({ children }) => (
              <h2 className={css.title}>{children}</h2>
            ),
          }}
        />
        <ul className={css.conditions}>
          <li className={css.conditionsItem}>
            <BagIcon className={css.icon} />
            {vacancy.data.location}
          </li>
          <li className={css.conditionsItem}>
            <SalaryIcon className={css.icon} />
            {vacancy.data.salary}
          </li>
          <li className={css.conditionsItem}>
            <TimeIcon className={css.icon} />
            {vacancy.data.time}
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className={css.body}>
          <h3 className={css.bodyTitle}>
            {lang === "uk-ua" ? "Основні вимоги" : "Requirements"}
          </h3>
          <ul className={css.bodyList}>
            {vacancy.data.requirements.map((i, index) => (
              <li key={index} className={css.bodyItem}>
                {i.requirement}
              </li>
            ))}
          </ul>
          <h3 className={css.bodyTitle}>
            {lang === "uk-ua" ? "Посадові обов'язки" : "Job responsibilities"}
          </h3>
          <ul className={css.bodyList}>
            {vacancy.data.duties.map((i, index) => (
              <li key={index} className={css.bodyItem}>
                {i.duty}
              </li>
            ))}
          </ul>
          <button type="button" className={css.respondBtn}>
            {vacancy.data.button_label}
          </button>
        </div>
      )}
    </div>
  );
};

function TimeIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        // stroke="#696969"
        strokeWidth="1.042"
        d="M12.5 21.353a8.854 8.854 0 100-17.708 8.854 8.854 0 000 17.708z"
      ></path>
      <path
        // stroke="#696969"
        strokeLinecap="round"
        strokeWidth="1.042"
        d="M17.188 12.497H12.76a.26.26 0 01-.26-.26V8.852"
      ></path>
    </svg>
  );
}

function BagIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        // fill="#696969"
        d="M4.807 20.835c-.479 0-.879-.16-1.2-.482a1.63 1.63 0 01-.482-1.2V8.974c0-.479.16-.879.482-1.2a1.63 1.63 0 011.2-.482h4.568V5.85c0-.479.16-.879.482-1.2a1.63 1.63 0 011.2-.482h2.886c.479 0 .88.16 1.2.482.322.321.482.721.482 1.2v1.443h4.568c.479 0 .879.16 1.2.482.321.321.482.721.482 1.2v10.177c0 .48-.16.88-.481 1.2a1.63 1.63 0 01-1.201.483H4.807zm0-1.042h15.386c.16 0 .306-.067.44-.2a.61.61 0 00.2-.44V8.974a.614.614 0 00-.2-.44.615.615 0 00-.44-.2H4.807a.615.615 0 00-.44.2.615.615 0 00-.2.44v10.177c0 .16.066.307.2.441.134.133.28.2.44.2zm5.61-12.5h4.166V5.85a.614.614 0 00-.2-.44.615.615 0 00-.44-.2h-2.886a.615.615 0 00-.44.2.614.614 0 00-.2.44v1.443z"
      ></path>
    </svg>
  );
}

function SalaryIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        // fill="#696969"
        d="M12.5 16.016a3.516 3.516 0 100-7.032 3.516 3.516 0 000 7.032zm0-6.25a2.734 2.734 0 110 5.469 2.734 2.734 0 010-5.47zm10.938-3.907H1.563a.39.39 0 00-.391.391v12.5a.39.39 0 00.39.39h21.875a.39.39 0 00.391-.39V6.25a.39.39 0 00-.39-.39zM1.953 10.475A5.15 5.15 0 005.787 6.64h13.426a5.152 5.152 0 003.834 3.834v4.05a5.153 5.153 0 00-3.834 3.834H5.787a5.152 5.152 0 00-3.834-3.834v-4.05zm21.094-.807a4.375 4.375 0 01-3.027-3.027h3.027v3.027zM4.98 6.641a4.375 4.375 0 01-3.027 3.027V6.641H4.98zm-3.027 8.691a4.376 4.376 0 013.027 3.027H1.953v-3.027zm18.067 3.027a4.376 4.376 0 013.027-3.027v3.027H20.02z"
      ></path>
    </svg>
  );
}

export default VacancyItem;
