import Image from "next/image";
import { Button } from "../button/button.component";
import s from "./hero-banner.module.css";

const HeroBanner = ({ backgroundImage, title, showContact = true }) => {
  return (
    <div className={s.heroBanner}>
      <div className={s.heroBannerImage}>
        <Image
          src={backgroundImage}
          alt="Fetch! Dog walking Rugby"
          priority
          quality={85}
          placeholder="blur"
          sizes="50vw"
          className={s.heroBannerImage}
        />
      </div>

      <div className={s.heroBannerInner}>
        <h1
          className="font-heading"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {showContact && <Button href="/contact">Contact us</Button>}
      </div>
    </div>
  );
};

export { HeroBanner };
