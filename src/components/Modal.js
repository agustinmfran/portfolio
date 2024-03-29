import { useState } from "react";
import { useRouter } from "next/router";
import es from "../languages/es";
import en from "../languages/en";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Modal({ children, modal }) {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const form = useRef();
  const { locale } = useRouter();
  const lang = locale === "es" ? es.modal : en.modal;
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    emailjs
      .sendForm(
        "service_liuhgos",
        "template_83acee6",
        form.current,
        "xVU29GBNCUgdJicfO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  return (
    <article
      className={`fixed z-50 flex items-center justify-center w-full top-0 left-0 min-h-screen bg-[rgba(0,0,0,0.3)] ${
        modal ? null : "hidden"
      }`}
    >
      <div className="w-3/4 md:w-1/3 h-80 rounded-lg shadow-2xl bg-white flex flex-row items-start">
        <div className="h-full w-full">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="relative flex flex-col justify-between items-center h-full"
          >
            <div className="flex flex-col gap-4 mt-16 md:mt-12 w-4/6">
              <input
                type="text"
                name="user_name"
                value={values.name}
                placeholder={lang.name}
                onChange={handleChange}
                className="border-b-2 border-teal-500 outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder={lang.email}
                onChange={handleChange}
                className="border-b-2 border-teal-500 outline-none"
              />
              <input
                type="text"
                name="user_subject"
                value={values.subject}
                placeholder={lang.subject}
                onChange={handleChange}
                className="border-b-2 border-teal-500 outline-none"
              />
              <div className="flex justify-start items-start w-full">
                <textarea
                  name="message"
                  value={values.message}
                  placeholder={lang.message}
                  onChange={handleChange}
                  className="w-full outline-none resize-none"
                />
              </div>
            </div>
            <div className="absolute right-0 top-0">{children}</div>
            {!values.user_name ||
            !values.user_email ||
            !values.user_subject ||
            !values.message ? (
              <div
                type="submit"
                className={`text-neutral-100 font-semibold text-center px-6 py-3 bg-teal-600 rounded-b-lg opacity-5 md:rounded shadow w-full md:w-36 md:mb-16 ${
                  sent ? "hidden" : null
                }`}
              >
                {lang.send}
              </div>
            ) : (
              <button
                type="submit"
                className={`text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-b-lg md:rounded shadow hover:bg-teal-700 cursor-pointer w-full md:w-36 md:mb-16 ${
                  sent ? "hidden" : null
                }`}
              >
                {lang.send}
              </button>
            )}
            <div
              className={`absolute bottom-4 md:bottom-8 text-teal-600 text-center font-semibold px-6 py-3 ${
                sent ? null : "hidden"
              }`}
            >
              {lang.success}
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}

export default Modal;
