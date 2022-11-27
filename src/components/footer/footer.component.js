import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "phosphor-react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerContact}>
          <div>
            <address>
              <h3>Fetch!</h3>

              <p>
                Rugby, Warwickshire
                <br />
                <a href="mailto:chelsea@myfetch.co.uk">chelsea@myfetch.co.uk</a>
                <br /> <a href="tel:07935831687">07935 831687</a>
              </p>
            </address>
          </div>

          <div>
            <h3>Business hours</h3>

            <p>
              Monday - Friday: 08:00 - 16:00
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        <div className={styles.footerIcons}>
          <a
            href="https://www.facebook.com/myfetch/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700  hover:text-gray-800"
          >
            <FacebookLogo size={32} weight="fill" />
          </a>

          <a
            href="https://www.instagram.com/fetchdog22"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700  hover:text-gray-800"
          >
            <InstagramLogo size={32} weight="fill" />
          </a>

          <a
            href="mailto:chelsea@myfetch.co.uk"
            className="text-gray-700  hover:text-gray-800"
          >
            <Envelope size={32} />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=447935831687"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700  hover:text-gray-800"
          >
            <WhatsappLogo size={32} weight="fill" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
