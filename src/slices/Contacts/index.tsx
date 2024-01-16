"use client";

import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export type ContactsProps = SliceComponentProps<Content.ContactsSlice>;

const Contacts = ({ slice }: ContactsProps): JSX.Element => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      `.${css.item}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
        stagger: 0.15,
      }
    ).fromTo(
      `.${css.map}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.4,
      }
    );
  }, []);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <div className={css.list}>
          {slice.items.map((i, index) => (
            <a
              className={css.item}
              key={index}
              href={`${
                i.type === "Phone"
                  ? "tel:" + i.label?.trim()
                  : "mailto:" + i.label
              }`}
              aria-label={`${i.type} us`}
            >
              {i.type === "Phone" && <PhoneIcon className={css.icon} />}
              {i.type === "Email" && <MailIcon className={css.icon} />}
              {i.type === "Location" && <LocationIcon className={css.icon} />}
              {i.label}
            </a>
          ))}
        </div>
        <div className={css.map}>
          <iframe
            title="KIBSTORE`s location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7488.036940439986!2d35.00903867956311!3d48.42926207730318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe35a597e9a7f%3A0x3b61e685db62da6d!2sKIBSTORE!5e0!3m2!1sru!2sua!4v1704921263082!5m2!1sru!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <path d="M5.915 17.774l4.475-2.006.012-.006a1.52 1.52 0 011.513.187l2.312 1.97c1.465-.71 2.978-2.212 3.69-3.658l-1.975-2.347a1.519 1.519 0 01-.18-1.504v-.01l2.012-4.483a1.52 1.52 0 011.579-.905A5.345 5.345 0 0124 10.32C24 17.863 17.863 24 10.32 24a5.345 5.345 0 01-5.309-4.648 1.52 1.52 0 01.904-1.578zm4.405 4.706a12.173 12.173 0 0012.16-12.16 3.819 3.819 0 00-3.313-3.8v.011l-1.995 4.465 1.964 2.35a1.52 1.52 0 01.15 1.565c-.862 1.76-2.635 3.521-4.415 4.38a1.519 1.519 0 01-1.566-.16l-2.31-1.971-4.465 2h-.01a3.82 3.82 0 003.8 3.32z"></path>
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <path d="M15 8.125a3.125 3.125 0 110 6.25 3.125 3.125 0 010-6.25zM15 2.5a8.75 8.75 0 018.75 8.75C23.75 17.813 15 27.5 15 27.5s-8.75-9.688-8.75-16.25A8.75 8.75 0 0115 2.5zM15 5a6.25 6.25 0 00-6.25 6.25c0 1.25 0 3.75 6.25 12.137C21.25 15 21.25 12.5 21.25 11.25A6.25 6.25 0 0015 5z"></path>
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <path d="M7.955 7h14.09c.755 0 1.481.282 2.03.789.548.507.878 1.2.92 1.936L25 9.89v10.22c0 .738-.289 1.448-.807 1.984a2.983 2.983 0 01-1.98.9l-.168.005H7.956a2.992 2.992 0 01-2.03-.789 2.862 2.862 0 01-.92-1.936L5 20.11V9.89c0-.738.289-1.448.807-1.984a2.983 2.983 0 011.98-.9L7.955 7zm15.681 5.249l-8.321 4.231a.69.69 0 01-.528.042l-.102-.042-8.321-4.231v7.862c0 .39.15.767.42 1.054.27.287.642.464 1.04.496l.13.006h14.091c.4 0 .785-.147 1.078-.412.294-.265.475-.628.508-1.017l.005-.127V12.25zm-1.59-3.916H7.955c-.4 0-.784.147-1.078.412a1.543 1.543 0 00-.508 1.016l-.005.128v.857L15 15.136l8.636-4.39v-.857c0-.39-.15-.767-.42-1.054a1.605 1.605 0 00-1.04-.496l-.13-.006z"></path>
    </svg>
  );
}

export default Contacts;
