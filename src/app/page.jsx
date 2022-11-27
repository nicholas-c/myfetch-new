import Image from "next/image";
import { HeroBanner } from "../components/hero-banner/hero-banner.component";
import { Reviews } from "../components/reviews/reviews.component";
import { ServiceCard } from "../components/service-card/service-card.component";

import redFox from "../../public/red-fox.jpg";
import group from "../../public/group.jpg";
import staffy from "../../public/staffy.jpg";
import cat from "../../public/cat.jpg";
import logoDark from "../../public/logo-dark.svg";
import { Button } from "../components/button/button.component";

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Fetch!
            <span>Dog walking</span>
            in Rugby"
        backgroundImage={redFox}
      />

      <section className="bg-white  py-10  md:py-16">
        <div className="container">
          <Image
            src={logoDark}
            alt="Fetch! Dog walking Rugby"
            height={141}
            width={200}
            className="mx-auto  mb-4"
          />

          <p>
            My name is Chelsea and I am the founder of Fetch! A professional dog
            walking and pet sitting service based in Rugby. I am an ex primary
            school teacher spanning a career in education for over 7 years.
          </p>

          <p>
            However, due to the coronavirus pandemic; I decided on a career
            change. I have always been a true animal lover, and I have now
            decided to pursue that dream. I am fully insured, DBS checked and I
            am also qualified in pet first aid and CPR (for your peace of mind).
          </p>

          <p>
            I put your pets safety, well-being and happiness as my priority; as
            well as delivering a professional, top quality service. I have owned
            dogs my entire life, and look forward to caring for your pet as if
            it was my own!
          </p>
        </div>
      </section>

      <Reviews />

      <section className="py-10  md:py-16  bg-white">
        <div className="container">
          <h2 className="block  text-center  text-3xl  font-heading  font-bold  mb-4  md:mb-10  text-gray-600  px-6">
            Our services
          </h2>

          <div className="flex  flex-col  lg:flex-row  gap-4">
            <ServiceCard
              title="Group Walks"
              image={group}
              href="/dog-walking-rugby"
              content="A chance for your dog to socialise and interact with others. A maximum of four dogs on each group walk."
            />

            <ServiceCard
              title="Solo walks"
              image={staffy}
              href="/dog-walking-rugby"
              content="Perfect for dogs who are nervous, unsociable, elderly or who have health conditions. A personal and tailored walk for your dog."
            />

            <ServiceCard
              title="Pet sitting"
              image={cat}
              href="/pet-sitting-rugby"
              content="Great for people who are away from home for most of the day. A chance for your pet to have a well needed food, toilet and play break."
            />
          </div>
        </div>
      </section>
    </>
  );
}
