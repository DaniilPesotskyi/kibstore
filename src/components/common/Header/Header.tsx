"use client";

import css from "./Header.module.css";

import { GroupField, PrismicDocument } from "@prismicio/client";
import {
  SettingsDocument,
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../../../prismicio-types";

import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface IProps {
  navigation: GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
  settings: SettingsDocument<string>;
  lang: string;
}

const localeLabels: { [key: string]: string } = {
  "en-us": "Eng",
  "uk-ua": "Укр",
};

const Header: React.FC<IProps> = ({ navigation, locales, settings, lang }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={clsx(css.header, isScrolled && css.fixed)}>
      <PrismicNextLink className={css.logo} field={settings.data.home_link}>
        {settings.data.site_title}
      </PrismicNextLink>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          {navigation.map((i) => (
            <li key={i.label}>
              <PrismicNextLink
                className={clsx(css.navLink, path === i.link.url && css.active)}
                field={i.link}
              >
                {i.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu navigation={navigation} locales={locales} />
      {locales.map(
        (locale) =>
          locale.lang !== lang && (
            <PrismicNextLink
              key={locale.lang}
              href={locale.url as string}
              locale={locale.lang}
              aria-label={`Change language to ${locale.lang_name}`}
              className={css.langChanger}
            >
              {lang === "uk-ua" ? <UkraineIcon /> : <AmericaIcon />}
              {localeLabels[lang] || ""}
            </PrismicNextLink>
          )
      )}
      <Link
        aria-label="Our online-store link"
        className={css.storeLink}
        href={"https://kibstore.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={css.storeText}>{settings.data.shop_link_label}</span>
        <ShopIcon className={css.storeIcon} />
      </Link>
    </header>
  );
};

function ShopIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path d="M6.89 21.875c-.478 0-.878-.16-1.2-.481a1.637 1.637 0 01-.482-1.201V8.974c0-.48.161-.88.483-1.2.32-.322.72-.482 1.2-.482h1.963V6.77c0-1.013.355-1.873 1.064-2.582.709-.71 1.57-1.064 2.582-1.064 1.013 0 1.873.355 2.582 1.064.71.709 1.064 1.57 1.064 2.582v.52h1.963c.48 0 .88.161 1.2.483.322.32.483.72.483 1.2v11.219c0 .479-.16.879-.481 1.2a1.633 1.633 0 01-1.201.482H6.89zm0-1.042h11.22a.61.61 0 00.44-.2c.133-.134.2-.28.2-.44V8.974a.615.615 0 00-.2-.44.615.615 0 00-.44-.2h-1.964v2.604a.507.507 0 01-.52.52.507.507 0 01-.522-.52V8.332H9.896v2.604a.507.507 0 01-.52.521.507.507 0 01-.522-.52V8.332H6.891a.615.615 0 00-.44.2.615.615 0 00-.2.441v11.219c0 .16.066.306.2.44.133.134.28.2.44.2zM9.897 7.292h5.208V6.77c0-.734-.25-1.35-.752-1.852-.501-.502-1.119-.752-1.852-.752-.733 0-1.35.25-1.852.752-.501.501-.752 1.119-.752 1.852v.52z"></path>
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

export default Header;
