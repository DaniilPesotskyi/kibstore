"use client";

import css from "./index.module.css";

import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import clsx from "clsx";

export type BusinessFormProps = SliceComponentProps<Content.BusinessFormSlice>;

const BusinessForm = ({ slice }: BusinessFormProps): JSX.Element => {
  const onSubmit = () => {};

  const handleInputChange = () => {};

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.container}>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            paragraph: ({ children }) => (
              <p className={css.heading}>{children}</p>
            ),
          }}
        />
        <form onSubmit={onSubmit} className={css.form} autoComplete="off">
          <div className={css.leftCol}>
            <div className={css.field}>
              <input
                className={css.input}
                type="text"
                name="Name"
                id="name"
                placeholder="."
              />
              <label htmlFor="name" className={css.label}>
                {slice.primary.name}
              </label>
            </div>
            <div className={css.field}>
              <input
                className={css.input}
                type="text"
                name="Phone"
                id="phone"
                placeholder="."
              />
              <label htmlFor="phone" className={css.label}>
                {slice.primary.phone}
              </label>
            </div>
            <div className={css.field}>
              <input
                className={css.input}
                type="text"
                name="Company"
                id="company"
                placeholder="."
              />
              <label htmlFor="company" className={css.label}>
                {slice.primary.company}
              </label>
            </div>
            <div className={css.field}>
              <input
                className={css.input}
                type="text"
                name="Position"
                id="position"
                placeholder="."
              />
              <label htmlFor="position" className={css.label}>
                {slice.primary.position}
              </label>
            </div>
          </div>
          <div className={css.rightCol}>
            <div className={css.field}>
              <input
                className={css.input}
                type="text"
                name="Surname"
                id="surname"
                placeholder="."
              />
              <label htmlFor="surname" className={css.label}>
                {slice.primary.surname}
              </label>
            </div>
            <div className={css.field}>
              <input
                className={css.input}
                type="email"
                name="Mail"
                id="mail"
                placeholder="."
              />
              <label htmlFor="mail" className={css.label}>
                {slice.primary.mail}
              </label>
            </div>
            <div className={clsx(css.field, css.textAreaField)}>
              <textarea
                className={clsx(css.input, css.textAreaInput)}
                name="Message"
                id="message"
                placeholder="."
              />
              <label
                htmlFor="message"
                className={clsx(css.label, css.textAreaLabel)}
              >
                {slice.primary.message}
              </label>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default BusinessForm;
