import Image from "next/image";
import { Button } from "../button/button.component";

const ServiceCard = ({ title, content, image, href }) => (
  <article className="relative  w-full  aspect-4/5  sm:aspect-2/1  lg:aspect-4/5  rounded-md  overflow-hidden">
    <Image
      alt={title}
      src={image}
      quality={70}
      placeholder="blur"
      className="absolute  z-0  inset-0  w-full  h-full  object-cover  object-center"
    />

    <div className="relative  z-10  h-full  p-6  flex  flex-col  justify-end  bg-gray-800/70  text-white">
      <div className="mb-4">
        <h3 className="font-heading  font-black  text-2xl  uppercase">
          {title}
        </h3>

        <p>{content}</p>
      </div>

      <Button href={href} fullWidth>
        More details
      </Button>
    </div>
  </article>
);

export { ServiceCard };
