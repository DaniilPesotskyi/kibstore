"use client";

import css from "./MobileMenu.module.css";

import { GroupField, PrismicDocument } from "@prismicio/client";
import {
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../../../prismicio-types";
import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";

const localeLabels: { [key: string]: string } = {
  "en-us": "Eng",
  "uk-ua": "Укр",
};

interface IProps {
  navigation: GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
}

const MobileMenu: React.FC<IProps> = ({ navigation, locales }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMenuToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add("body-scroll-lock");
    } else {
      document.body.classList.remove("body-scroll-lock");
    }
  };

  return (
    <>
      <button
        type="button"
        className={css.menuBtn}
        onClick={onMenuToggle}
        aria-label="Open mobile menu"
      >
        <MenuIcon className={css.menuIcon} />
      </button>
      {isOpen && (
        <div className={css.backdrop}>
          <div className={css.modal}>
            <button
              type="button"
              className={css.closeBtn}
              onClick={onMenuToggle}
              aria-label="Close mobile menu"
            >
              <CloseIcon className={css.closeIcon} />
            </button>
            <ul className={css.menuList}>
              {navigation.map((i, index) => (
                <li key={index} className={css.item}>
                  <PrismicNextLink
                    className={css.link}
                    field={i.link}
                    onClick={onMenuToggle}
                  >
                    <span className={css.num}>0{index + 1}</span>
                    {i.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
            <ul className={css.localesList}>
              {locales.map((locale) => (
                <li key={locale.lang} className={css.localesItem}>
                  <PrismicNextLink
                    className={css.localesLink}
                    href={locale.url as string}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                    onClick={onMenuToggle}
                  >
                    {locale.lang === "en-us" && <AmericaIcon />}
                    {locale.lang === "uk-ua" && <UkraineIcon />}
                    {localeLabels[locale.lang] || locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path d="M3.906 10.938a.781.781 0 01-.781-.782V3.908a.781.781 0 01.781-.781h6.25a.781.781 0 01.781.78v6.25a.781.781 0 01-.78.78h-6.25zm10.938 0a.781.781 0 01-.781-.782V3.908a.781.781 0 01.78-.781h6.25a.781.781 0 01.78.78v6.25a.781.781 0 01-.78.78h-6.25zM3.906 21.874a.781.781 0 01-.781-.781v-6.25a.781.781 0 01.781-.781h6.25a.781.781 0 01.781.78v6.25a.781.781 0 01-.78.782h-6.25zm10.938 0a.781.781 0 01-.781-.781v-6.25a.781.781 0 01.78-.781h6.25a.781.781 0 01.78.78v6.25a.781.781 0 01-.78.782h-6.25z"></path>
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      fill="none"
    >
      <path d="M20 57.212L17.788 55l17.5-17.5-17.5-17.5L20 17.788l17.5 17.5 17.5-17.5L57.213 20l-17.5 17.5 17.5 17.5L55 57.212l-17.5-17.5-17.5 17.5z"></path>
    </svg>
  );
}

function UkraineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" fill="none">
      <mask
        id="a"
        width="25"
        height="18"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h25v18H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#3195F9"
          fillRule="evenodd"
          d="M0 0v18h25V0H0z"
          clipRule="evenodd"
        ></path>
        <mask
          id="b"
          width="25"
          height="18"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0v18h25V0H0z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M0 9v9h25V9H0z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function AmericaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" fill="none">
      <mask
        id="a"
        width="25"
        height="18"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h25v18H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 0h25v18H0V0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 1.5V3h25V1.5H0zm0 3V6h25V4.5H0zM0 9V7.5h25V9H0zm0 1.5V12h25v-1.5H0zM0 15v-1.5h25V15H0zm0 3v-1.5h25V18H0z"
          clipRule="evenodd"
        ></path>
        <path fill="#2E42A5" d="M0 0h14.063v10.5H0z"></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M1.625 3.26l.828-.553.642.444h-.363l.735.624-.248.876h-.39l-.377-.804-.322.804h-.96l.735.624-.28.986.828-.554.642.444h-.363l.735.624-.248.876h-.39l-.377-.804-.322.804h-.96l.735.624-.28.986.828-.554.801.554-.249-.986.644-.624h-.297l.664-.444.642.444h-.364l.736.624-.28.986.828-.554.801.554-.249-.986.644-.624h-.297l.664-.444.642.444h-.364l.736.624-.28.986.828-.554.801.554-.249-.986.644-.624h-.297l.664-.444.642.444h-.364l.736.624-.28.986.828-.554.801.554-.249-.986.643-.624h-.818l-.378-.804-.322.804h-.466l-.221-.876.643-.624h-.297l.664-.444.801.554-.249-.986.643-.624h-.818l-.378-.804-.322.804h-.466l-.221-.876.643-.624h-.297l.664-.444.801.554-.249-.986.643-.624h-.818l-.378-.804-.322.804h-.96l.735.624-.249.876h-.389l-.378-.804-.322.804h-.466l-.22-.876.643-.624h-.82L8.703.847l-.322.804h-.96l.735.624-.249.876h-.389l-.378-.804-.322.804h-.466l-.22-.876.643-.624h-.82L5.578.847l-.322.804h-.96l.735.624-.249.876h-.389l-.378-.804-.322.804h-.466l-.22-.876.643-.624h-.82L2.453.847l-.322.804h-.96l.735.624-.28.986zm9.406 2.89l.249-.875-.736-.624h.364l-.642-.444-.664.444h.297l-.644.624.221.876h.466l.322-.804.378.804h.39zm-1.686 0l-.642-.443-.664.444h.297l-.643.624.221.876h.466l.322-.804.378.804h.389l.248-.876-.735-.624h.363zm-2.753.625l-.248.876h-.39l-.377-.804-.322.804h-.466l-.221-.876.643-.624h-.297l.664-.444.642.444h-.363l.735.624zm.225-.624h-.466l-.22-.876.643-.624h-.297l.664-.444.642.444h-.364l.736.624-.249.876h-.389l-.378-.804-.322.804zm-2.036 0l.249-.876-.736-.624h.364l-.642-.444-.664.444h.297l-.644.624.221.876h.466l.322-.804.378.804h.39zm4.936-2.376l-.248.876h-.39l-.377-.804-.322.804h-.466l-.221-.876.643-.624h-.297l.664-.444.642.444h-.363l.735.624zM6.22 3.151l-.642-.444-.664.444h.297l-.643.624.221.876h.466l.322-.804.378.804h.389l.248-.876-.735-.624h.363z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export default MobileMenu;
