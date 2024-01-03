"use client";

import css from "./Header.module.css";

import { GroupField } from "@prismicio/client";
import {
  SettingsDocument,
  SettingsDocumentDataNavigationItem,
  Simplify,
} from "../../../../prismicio-types";

import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

interface IProps {
  navigation: GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
  locales?: [];
  settings: SettingsDocument<string>;
}

const localeLabels = {
  "en-us": "Eng",
  "uk-ua": "Укр",
};

const Header: React.FC<IProps> = ({ navigation, locales, settings }) => {
  return (
    <header className={css.header}>
      <Link className={css.logo} href={"/"}>
        {settings.data.site_title}
      </Link>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          {navigation.map((i) => (
            <li key={i.label}>
              <PrismicNextLink className={css.navLink} field={i.link}>
                {i.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className={css.menuBtn}>
        <MenuIcon className={css.menuIcon} />
      </button>
      <button className={css.langChanger} type="button">
        <LangIcon className={css.langIcon} />
        Укр
      </button>
      <Link className={css.storeLink} href={"/"}>
        <span className={css.storeText}>{settings.data.shop_link_label}</span>
        <ShopIcon className={css.storeIcon} />
      </Link>
    </header>
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
      <path
        // fill="#DDD"
        d="M3.906 10.938a.781.781 0 01-.781-.782V3.908a.781.781 0 01.781-.781h6.25a.781.781 0 01.781.78v6.25a.781.781 0 01-.78.78h-6.25zm10.938 0a.781.781 0 01-.781-.782V3.908a.781.781 0 01.78-.781h6.25a.781.781 0 01.78.78v6.25a.781.781 0 01-.78.78h-6.25zM3.906 21.874a.781.781 0 01-.781-.781v-6.25a.781.781 0 01.781-.781h6.25a.781.781 0 01.781.78v6.25a.781.781 0 01-.78.782h-6.25zm10.938 0a.781.781 0 01-.781-.781v-6.25a.781.781 0 01.78-.781h6.25a.781.781 0 01.78.78v6.25a.781.781 0 01-.78.782h-6.25z"
      ></path>
    </svg>
  );
}

function ShopIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        // fill="#DDD"
        d="M6.89 21.875c-.478 0-.878-.16-1.2-.481a1.637 1.637 0 01-.482-1.201V8.974c0-.48.161-.88.483-1.2.32-.322.72-.482 1.2-.482h1.963V6.77c0-1.013.355-1.873 1.064-2.582.709-.71 1.57-1.064 2.582-1.064 1.013 0 1.873.355 2.582 1.064.71.709 1.064 1.57 1.064 2.582v.52h1.963c.48 0 .88.161 1.2.483.322.32.483.72.483 1.2v11.219c0 .479-.16.879-.481 1.2a1.633 1.633 0 01-1.201.482H6.89zm0-1.042h11.22a.61.61 0 00.44-.2c.133-.134.2-.28.2-.44V8.974a.615.615 0 00-.2-.44.615.615 0 00-.44-.2h-1.964v2.604a.507.507 0 01-.52.52.507.507 0 01-.522-.52V8.332H9.896v2.604a.507.507 0 01-.52.521.507.507 0 01-.522-.52V8.332H6.891a.615.615 0 00-.44.2.615.615 0 00-.2.441v11.219c0 .16.066.306.2.44.133.134.28.2.44.2zM9.897 7.292h5.208V6.77c0-.734-.25-1.35-.752-1.852-.501-.502-1.119-.752-1.852-.752-.733 0-1.35.25-1.852.752-.501.501-.752 1.119-.752 1.852v.52z"
      ></path>
    </svg>
  );
}

function LangIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        // stroke="#DDD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.938 21.875l5.468-11.719 5.469 11.719M12.5 18.75h7.813M3.125 5.855a50.494 50.494 0 016.25-.386m0 0c1.167 0 2.326.04 3.473.119m-3.473-.12V3.126m3.473 2.463c-1.206 5.514-4.838 10.12-9.723 12.643m9.723-12.644a50.64 50.64 0 012.777.268m-4.78 8.85A18.774 18.774 0 016.858 8.66"
      ></path>
    </svg>
  );
}

export default Header;
