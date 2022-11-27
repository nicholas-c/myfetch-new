import Image from "next/image";
import { HeroBanner } from "../../components/hero-banner/hero-banner.component";

import group2 from "../../../public/group2.jpg";
import staffy from "../../../public/staffy.jpg";
import cat from "../../../public/cat.jpg";
import cat2 from "../../../public/cat2.jpg";
import { Button } from "../../components/button/button.component";

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Fetch!
            <span>Pet sitting services</span>"
        backgroundImage={cat}
      />

      <section className="bg-white  py-10  md:py-16">
        <div className="container">
          <h2 className="block  text-center  text-3xl  font-heading  font-bold  mb-5  md:mb-10  text-gray-600  px-6">
            Pet sitting services and prices
          </h2>

          <p>
            Before we start walks, all dog will get a free initial meet and
            greet, which is an introduction from myself and a chance to get to
            know you and your pet; before any services are provided. I will
            travel to your home free of charge. The meet and greet will last for
            approximately 15 minutes. There will be a short questionnaire that
            you will need to complete based on your pet and their needs.
          </p>

          <p>Meet and greets are free of charge.</p>
        </div>
      </section>

      <section className="bg-white  pb-10  md:pb-16">
        <div className="container">
          <div className="flex  flex-col  lg:block  lg:columns-2  gap-4  lg:gap-8">
            <div className="w-full  order-2  lg:order-1">
              <Image
                alt="Group walks"
                src={cat2}
                quality={70}
                placeholder="blur"
              />
            </div>

            <div className="w-full  order-1  lg:order-2">
              <h3 className="text-2xl  font-heading  font-bold  mb-4  text-gray-600">
                Pet sitting - from £12
              </h3>

              <p>
                My pet sitting service includes a home visit for your pet. I
                will feed, let out and play with your pet. I will also clean up
                any accidents that may have occurred in the home. I include a
                wide range of animals in the pet sitting service including dogs,
                cats and small mammals such as rabbits and hamsters etc.
              </p>

              <p>
                Great for the busy ‘pawrents’ who are away from home for most of
                the day. A chance for your pet to have a well needed food,
                toilet and play break.
              </p>

              <p>
                <strong>30 mins:</strong> £12
                <br />
                <strong>45 mins:</strong> £16
                <br />
                (An additional £2 is added for another pet from the same
                household.)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  pb-10  md:pb-16">
        <div className="container">
          <h4 className="block  text-center  text-3xl  font-heading  font-bold  mb-4  text-gray-600  px-6">
            Ready to book?
          </h4>

          <div className="flex  justify-center">
            <Button href="/contact">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
