"use client";

import css from "./index.module.css";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { useFormik } from "formik";
import { useState } from "react";

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  const [privacyChecked, setPrivacyChecked] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      mail: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.title} position="center" />
      <div className={css.container}>
        <form
          onSubmit={formik.handleSubmit}
          className={css.form}
          autoComplete="off"
        >
          <div className={css.formContainer}>
            <div className={css.leftCol}>
              <div className={css.field}>
                <input
                  onChange={formik.handleChange}
                  className={css.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="."
                  value={formik.values.name}
                />
                <label htmlFor="name" className={css.label}>
                  {slice.primary.name}
                </label>
              </div>
              <div className={css.field}>
                <input
                  onChange={formik.handleChange}
                  className={css.input}
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="."
                  value={formik.values.mail}
                />
                <label htmlFor="mail" className={css.label}>
                  {slice.primary.mail}
                </label>
              </div>
              <div className={css.field}>
                <input
                  onChange={formik.handleChange}
                  className={css.input}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="."
                  value={formik.values.phone}
                />
                <label htmlFor="phone" className={css.label}>
                  {slice.primary.phone}
                </label>
              </div>
            </div>
            <div className={css.rightCol}>
              <div className={clsx(css.field, css.textAreaField)}>
                <textarea
                  onChange={formik.handleChange}
                  className={clsx(css.input, css.textAreaInput)}
                  name="message"
                  id="message"
                  placeholder="."
                  value={formik.values.message}
                />
                <label
                  htmlFor="message"
                  className={clsx(css.label, css.textAreaLabel)}
                >
                  {slice.primary.message}
                </label>
              </div>
            </div>
          </div>
          <div className={css.privacy}>
            <label htmlFor="privacy" className={css.checkboxLabel}>
              <input
                onChange={() => setPrivacyChecked(!privacyChecked)}
                type="checkbox"
                name="privacy"
                id="privacy"
                className={css.checkboxInput}
              />
              <span className={css.checkbox}></span>
              <span className={css.text}>{slice.primary.privacy}</span>
            </label>
          </div>
          <button
            disabled={privacyChecked ? false : true}
            className={css.submitBtn}
            type="submit"
          >
            {slice.primary.button_label}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
