import Image from "next/image";
import { HeroBanner } from "../../components/hero-banner/hero-banner.component";
import { Reviews } from "../../components/reviews/reviews.component";
import { ServiceCard } from "../../components/service-card/service-card.component";

import redFox from "../../../public/red-fox.jpg";
import group from "../../../public/group.jpg";
import group2 from "../../../public/group2.jpg";
import staffy from "../../../public/staffy.jpg";
import cat from "../../../public/cat.jpg";
import logoDark from "../../../public/logo-dark.svg";
import { Button } from "../../components/button/button.component";

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Fetch!
            <span>Dog walking services</span>"
        backgroundImage={group}
      />

      <section className="bg-white  py-10  md:py-16">
        <div className="container">
          <h2 className="block  text-center  text-3xl  font-heading  font-bold  mb-5  md:mb-10  text-gray-600  px-6">
            Dog walking services and prices
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
            <div className="w-full">
              <Image
                alt="Group walks"
                src={group2}
                quality={70}
                placeholder="blur"
              />
            </div>

            <div className="w-full">
              <h3 className="text-2xl  font-heading  font-bold  mb-4  text-gray-600">
                Group Walks - £13
              </h3>

              <p>
                During a walk, I will ensure your pet is safe and happy. They
                will be walked in parks, fields and on national walkways (where
                possible). I will also make sure that different routes and areas
                are explored, so your dog has new stimulations, smells and
                places to explore. Your dog will be let off lead to run, play
                and explore but only with your permission.
              </p>

              <p>
                A chance for your dog to socialise and interact with others. A
                maximum of four dogs on each group walk.
              </p>

              <p>
                <strong>45 mins:</strong> £13
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  pb-10  md:pb-16">
        <div className="container">
          <div className="flex  lg:block  flex-col  lg:columns-2  gap-4  lg:gap-8">
            <div className="w-full  order-2">
              <h3 className="text-2xl  font-heading  font-bold  mb-4  text-gray-600">
                Solo walks - from £12
              </h3>

              <p>
                During a walk, I will ensure your pet is safe and happy. They
                will be walked in parks, fields and on national walkways (where
                possible). I will also make sure that different routes and areas
                are explored, so your dog has new stimulations, smells and
                places to explore. Your dog will be let off lead to run, play
                and explore but only with your permission.
              </p>

              <p>
                A chance for your dog to socialise and interact with others. A
                maximum of four dogs on each group walk.
              </p>

              <p>
                <strong>30 mins:</strong> £12
                <br />
                <strong>45 mins:</strong> £16
                <br />
                (An additional £9 is added for another dog from the same
                household.)
              </p>
            </div>

            <div className="w-full  order-1">
              <Image
                alt="Group walks"
                src={staffy}
                quality={70}
                placeholder="blur"
              />
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
