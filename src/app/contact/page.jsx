"use client";
import { HeroBanner } from "../../components/hero-banner/hero-banner.component";
import { ContactForm } from "../../components/contact-form/contact-form.component";

import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "phosphor-react";

import contact from "../../../public/contact.jpg";

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Contact
            <span>Fetch!</span>"
        backgroundImage={contact}
        showContact={false}
      />

      <section className="bg-white  py-10  md:py-16">
        <div className="container">
          <div className="flex  flex-col  md:flex-row  md:gap-8">
            <div className="relative  w-full  order-2  md:order-1">
              <ContactForm />
            </div>

            <div className="w-full  order-1  md:order-2">
              <h2 className="block  text-3xl  font-heading  font-bold  mb-4  text-gray-600">
                Dog walking services and prices
              </h2>

              <p>
                Tell us what you need, and we&apos;ll be in touch as soon as
                possible to try and come up with the best arrangements.
              </p>

              <div className="flex  justify-center  py-4">
                <a
                  href="https://www.facebook.com/myfetch/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700  hover:text-gray-800  mx-2"
                >
                  <FacebookLogo size={32} weight="fill" />
                </a>

                <a
                  href="https://www.instagram.com/fetchdog22"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700  hover:text-gray-800  mx-2"
                >
                  <InstagramLogo size={32} weight="fill" />
                </a>

                <a
                  href="mailto:chelsea@myfetch.co.uk"
                  className="text-gray-700  hover:text-gray-800  mx-2"
                >
                  <Envelope size={32} />
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=447935831687"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700  hover:text-gray-800  mx-2"
                >
                  <WhatsappLogo size={32} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
