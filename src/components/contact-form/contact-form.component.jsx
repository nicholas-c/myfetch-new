"use client";

import clsx from "clsx";
import { useState } from "react";
import * as ReactGA from "react-ga";

import styles from "./contact-form.module.css";

const ContactForm = () => {
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const formSubmit = async (e) => {
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const telephone = formData.get("telephone");
    const message = formData.get("message");

    e.preventDefault();

    setFormLoading(true);
    setFormError(false);

    const data = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        telephone,
        message,
      }),
    });

    if (data.status === 200) {
      setFormComplete(true);

      ReactGA.event({
        category: "Contact",
        action: "Form submission",
      });
    } else {
      setFormLoading(false);
      setFormError(true);
    }
  };

  return (
    <>
      {formComplete && (
        <p className="absolute  top-1/2  left-1/2  transform  -translate-x-1/2  -translate-y-1/2  pt-4  w-full  text-center">
          Thanks! I&apos;ll be in touch soon (normally within 24 hours). <br />
          <br />
          Please note, sometimes our replies may end up in your spam, so please
          ensure you check there if you&apos;ve not heard back from us.
        </p>
      )}

      <form
        className={clsx(
          "flex  text-left  flex-col  justify-end  transition-opacity  contact-form",
          {
            "opacity-10  pointer-events-none": formLoading,
          }
        )}
        onSubmit={formSubmit}
        disabled={formLoading}
      >
        <div className="flex  flex-col  mb-4">
          <label className="block  pt-1  font-bold  mb-1">Name:</label>{" "}
          <input
            name="name"
            className="w-full  text-gray-800  px-2  py-1  bg-white  border  border-gray-800"
            required
            disabled={formLoading}
          />
        </div>

        <div className="flex  flex-col  mb-4">
          <label className="block  pt-1  font-bold  mb-1">Email:</label>{" "}
          <input
            name="email"
            type="email"
            className="w-full  text-gray-800  px-2  py-1  bg-white  border  border-gray-800"
            required
            disabled={formLoading}
          />
        </div>

        <div className="flex  flex-col  mb-4">
          <label className="block  pt-1  font-bold  mb-1">
            Phone number (Mobile preferred):
          </label>{" "}
          <input
            name="telephone"
            type="tel"
            className="w-full  text-gray-800  px-2  py-1  bg-white  border  border-gray-800"
            required
            disabled={formLoading}
          />
        </div>

        <div className="flex  flex-col  mb-4">
          <label className="block  pt-1  font-bold  mb-1">Message:</label>{" "}
          <textarea
            rows="5"
            name="message"
            className="w-full  text-gray-800  px-2  py-1  bg-white  border  border-gray-800"
            required
            disabled={formLoading}
          />
        </div>

        {formError && (
          <p className="pb-4">
            There was a problem submitting the form, please try again or contact
            me directly.
          </p>
        )}

        <button className={styles.formSubmit} disabled={formLoading}>
          Send
        </button>
      </form>
    </>
  );
};

export { ContactForm };
