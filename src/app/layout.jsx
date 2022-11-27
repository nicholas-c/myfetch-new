"use client";

import "../styles/global.css";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
// import { Montserrat } from "@next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "phosphor-react";

import LogoDark from "../../public/logo-dark.svg";
import Logo from "../../public/logo.svg";

import { Button } from "../components/button/button.component";
import { Footer } from "../components/footer/footer.component";

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
// });

export default function RootLayout({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [isNavigationActive, setNavigationActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setNavigationActive(true);
      });
    } else {
      setNavigationActive(false);
    }
  }, [isOpen]);

  return (
    <html lang="en">
      <head />

      <body>
        <header className="fixed  z-20  bg-white  w-full">
          <div className="flex  justify-between  items-center">
            <Link href="/" className="pl-2  py-2  lg:pr-28">
              <Image
                src={LogoDark}
                alt="Fetch! Dog walking services"
                height={48}
                width={68}
              />
            </Link>

            <button
              className="fixed  right-0.5  mr-2  z-10  text-gray-500  w-10  h-10  relative  focus:outline-none  bg-white  lg:hidden"
              onClick={() => setOpen(!isOpen)}
            >
              <span className="sr-only">Open navigation</span>

              <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={clsx(
                    "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                    {
                      "rotate-45": isOpen,
                      "-translate-y-1.5": !isOpen,
                    }
                  )}
                ></span>

                <span
                  aria-hidden="true"
                  className={clsx(
                    "block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out",
                    { "opacity-0": isOpen }
                  )}
                ></span>

                <span
                  aria-hidden="true"
                  className={clsx(
                    "block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out",
                    {
                      "-rotate-45": isOpen,
                      "translate-y-1.5": !isOpen,
                    }
                  )}
                ></span>
              </div>
            </button>

            <div
              className={clsx(
                "fixed  lg:static  top-0  h-full  lg:h-auto  w-full  bg-gray-800  lg:bg-transparent  p-2  text-white  transition  duration-300  lg:block  lg:translate-y-0  lg:flex",
                {
                  hidden: !isOpen,
                  "translate-y-full": !isNavigationActive,
                }
              )}
            >
              <Link href="/" className="block  lg:hidden">
                <Image
                  src={Logo}
                  alt="Fetch! Dog walking services"
                  height={48}
                  width={68}
                />
              </Link>

              <nav className="flex  flex-col  lg:flex-row  pt-14  lg:pt-0  px-2  lg:w-full  lg:justify-center">
                <Link
                  href="/"
                  className={clsx(
                    "block  lg:inline  transition  duration-500  delay-75  py-2  my-2  font-black  uppercase  lg:opacity-100  lg:translate-x-0  lg:text-gray-800  lg:mx-4",
                    {
                      underline: pathname === "/",
                      "translate-x-32  opacity-0": !isNavigationActive,
                      "opacity-100": isNavigationActive,
                    }
                  )}
                >
                  Home
                </Link>

                <Link
                  href="/dog-walking-rugby"
                  className={clsx(
                    "block  lg:inline  transition  duration-500  delay-150  py-2  my-2  font-black  uppercase  lg:opacity-100  lg:translate-x-0  lg:text-gray-800  lg:mx-4",
                    {
                      underline: pathname === "/dog-walking-rugby",
                      "translate-x-32  opacity-0": !isNavigationActive,
                      "opacity-100": isNavigationActive,
                    }
                  )}
                >
                  Dog walking
                </Link>

                <Link
                  href="/pet-sitting-rugby"
                  className={clsx(
                    "block  lg:inline  transition  duration-500  delay-200  py-2  my-2  font-black  uppercase  lg:opacity-100  lg:translate-x-0  lg:text-gray-800  lg:mx-4",
                    {
                      underline: pathname === "/pet-sitting-rugby",
                      "translate-x-32  opacity-0": !isNavigationActive,
                      "opacity-100": isNavigationActive,
                    }
                  )}
                >
                  Pet sitting
                </Link>

                <Link
                  href="/contact"
                  className={clsx(
                    "block  lg:inline  transition  duration-500  delay-300  py-2  my-2  font-black  uppercase  lg:opacity-100  lg:translate-x-0  lg:text-gray-800  lg:mx-4",
                    {
                      underline: pathname === "/contact",
                      "translate-x-32  opacity-0": !isNavigationActive,
                      "opacity-100": isNavigationActive,
                    }
                  )}
                >
                  Contact
                </Link>
              </nav>

              <div className="absolute  lg:static  left-2  right-2  lg:w-44  lg:shrink-0  lg:mt-1">
                <div className="flex  lg:hidden  justify-center  mb-2">
                  <a
                    href="https://www.facebook.com/myfetch/"
                    className="hover:text-gray-300"
                    target="_blank"
                    title="Facebook"
                    rel="noopener noreferrer"
                  >
                    <FacebookLogo size={30} className="m-2" />
                  </a>

                  <a
                    href="https://www.instagram.com/fetchdog22"
                    className="hover:text-gray-300"
                    target="_blank"
                    title="Instagram"
                    rel="noopener noreferrer"
                  >
                    <InstagramLogo size={30} className="m-2" />
                  </a>

                  <a
                    href="mailto:chelsea@myfetch.co.uk"
                    className="hover:text-gray-300"
                    title="Email"
                  >
                    <Envelope size={30} className="m-2" />
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=447935831687"
                    className="hover:text-gray-300"
                    target="_blank"
                    title="Whatsapp"
                    rel="noopener noreferrer"
                  >
                    <WhatsappLogo size={30} className="m-2" />
                  </a>
                </div>

                <Button href="/contact" fullWidth>
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
