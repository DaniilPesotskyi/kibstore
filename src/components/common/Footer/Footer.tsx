import css from "./Footer.module.css";

import { FooterDocument, SettingsDocument } from "../../../../prismicio-types";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

interface IProps {
  settings: SettingsDocument<string>;
  footer: FooterDocument<string>;
}

const Footer: React.FC<IProps> = ({ settings, footer }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.infoBlockWithSocials}>
          <div className={css.infoBlock}>
            <PrismicNextLink
              className={css.logo}
              field={settings.data.home_link}
            >
              {settings.data.site_title}
            </PrismicNextLink>
            <ul className={css.contactsList}>
              {footer.data.contacts.map((i, index) => (
                <li className={css.contactsItem} key={index}>
                  {i.label}
                </li>
              ))}
            </ul>
          </div>
          <ul className={css.socialsList}>
            {footer.data.socials.map((i, index) => (
              <li className={css.socialsItem} key={index}>
                <PrismicNextLink
                  className={css.socialsLink}
                  field={i.link}
                  aria-label={`Read more: ${i.icon}`}
                >
                  {i.icon === "instagram" && (
                    <InstagramIcon className={css.icon} />
                  )}
                  {i.icon === "facebook" && (
                    <FacebookIcon className={css.icon} />
                  )}
                  {i.icon === "telegram" && (
                    <TelegramIcon className={css.icon} />
                  )}
                  {i.icon === "viber" && <ViberIcon className={css.icon} />}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.map}>
          <iframe
            title="KIBSTORE`s location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1574.158348141862!2d35.01442880090573!3d48.42950441752842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe35a597e9a7f%3A0x3b61e685db62da6d!2sKIBSTORE!5e0!3m2!1sru!2sua!4v1704726448087!5m2!1sru!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={css.copy}>
        <span>
          {year}.{footer.data.copy_text}
        </span>
        <Link href={"https://github.com/DaniilPesotskyi"}>
          {footer.data.author_label}
        </Link>
      </div>
    </footer>
  );
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
    >
      <path d="M13 2.759h5.12c1.205 0 1.808.301 2.26.452.602.301 1.054.452 1.506.903.451.452.753.904.903 1.506.15.452.301 1.055.452 2.26v10.24c0 1.205-.301 1.808-.452 2.26-.301.602-.452 1.054-.904 1.506-.451.451-.903.753-1.506.903-.451.15-1.054.301-2.259.452H7.88c-1.205 0-1.808-.301-2.26-.452-.602-.301-1.054-.452-1.506-.904-.451-.451-.753-.903-.903-1.506-.15-.451-.301-1.054-.452-2.259V7.88c0-1.205.301-1.808.452-2.26.301-.602.452-1.054.903-1.506.452-.451.904-.753 1.506-.903.452-.15 1.055-.301 2.26-.452H13zM13 .5H7.88c-1.356 0-2.26.301-3.013.602a6.576 6.576 0 00-2.259 1.506c-.753.753-1.054 1.356-1.506 2.26C.802 5.62.651 6.523.5 7.88v10.24c0 1.356.301 2.26.602 3.012a6.576 6.576 0 001.506 2.26c.753.753 1.356 1.054 2.26 1.506.752.3 1.656.451 3.012.602h10.24c1.356 0 2.26-.301 3.012-.602a6.576 6.576 0 002.26-1.506c.753-.753 1.054-1.356 1.506-2.26.3-.753.451-1.656.602-3.012V7.88c0-1.356-.301-2.26-.602-3.013a6.576 6.576 0 00-1.506-2.259c-.753-.753-1.356-1.054-2.26-1.506C20.38.802 19.477.651 18.12.5H13z"></path>
      <path d="M13 6.524A6.428 6.428 0 006.524 13 6.428 6.428 0 0013 19.476 6.428 6.428 0 0019.476 13 6.428 6.428 0 0013 6.524zm0 10.693c-2.259 0-4.217-1.807-4.217-4.217 0-2.259 1.807-4.217 4.217-4.217 2.259 0 4.217 1.807 4.217 4.217 0 2.259-1.958 4.217-4.217 4.217zm6.627-9.337a1.506 1.506 0 100-3.012 1.506 1.506 0 000 3.012z"></path>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="29"
      fill="none"
    >
      <path d="M10.071 15.456h4.653l.73-4.755H10.07V8.1c0-1.975.642-3.726 2.479-3.726H15.5V.225C14.982.155 13.885 0 11.812 0 7.486 0 4.949 2.3 4.949 7.537v3.164H.5v4.755h4.448v13.07c.881.134 1.774.224 2.69.224.828 0 1.636-.076 2.433-.185V15.456z"></path>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      fill="none"
    >
      <path d="M24 .753l-3.757 19.612s-.525 1.36-1.97.708l-8.667-6.882-.04-.02c1.17-1.09 10.25-9.543 10.646-9.926.615-.593.233-.947-.48-.498l-13.411 8.82-5.174-1.803s-.814-.3-.893-.953c-.079-.653.92-1.006.92-1.006L22.266.236S24-.553 24 .753z"></path>
    </svg>
  );
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="29"
      fill="none"
    >
      <path d="M20.817.932a38.73 38.73 0 00-14.476 0c-2.107.455-4.764 3.003-5.223 5.005a28.586 28.586 0 000 11.828c.55 2.001 3.207 4.549 5.223 5.004.092 0 .183.09.183.182v5.732c0 .273.367.455.55.182l2.749-2.82s2.199-2.275 2.565-2.64c0 0 .092-.09.183-.09 2.749.09 5.59-.182 8.338-.637 2.107-.455 4.764-3.003 5.223-5.004a28.583 28.583 0 000-11.828c-.55-1.911-3.207-4.459-5.315-4.914zm.092 17.106c-.458.91-1.008 1.637-1.924 2.092l-.825.273c-.366-.09-.641-.182-.916-.273-2.932-1.182-5.68-2.82-7.88-5.186-1.19-1.365-2.198-2.911-3.023-4.55-.367-.818-.733-1.546-1.008-2.365-.275-.728.183-1.455.641-2.001.459-.546 1.008-.91 1.65-1.183.458-.273.916-.091 1.282.273.733.91 1.466 1.82 2.016 2.82.367.637.275 1.365-.366 1.82-.184.091-.275.182-.458.364-.092.09-.275.182-.367.364-.183.273-.183.546-.092.819.733 2.092 2.108 3.73 4.215 4.64.367.182.641.273 1.1.273.64-.091.916-.819 1.374-1.183.458-.364 1.008-.364 1.558-.09.458.272.916.636 1.465 1 .459.364.917.637 1.375 1 .275.183.366.638.183 1.093zm-3.848-6.824c-.183 0-.092 0 0 0-.367 0-.458-.182-.55-.455 0-.182 0-.455-.091-.637-.092-.364-.275-.728-.642-1l-.55-.274c-.274-.09-.458-.09-.733-.09-.274-.092-.366-.274-.366-.547 0-.182.275-.364.458-.364 1.466.091 2.566.91 2.749 2.639v.364c0 .182-.092.364-.275.364zm-.916-4.004c-.458-.182-.917-.364-1.466-.455-.184 0-.458-.09-.642-.09-.275 0-.458-.182-.366-.455 0-.273.183-.455.458-.364.916.09 1.74.273 2.565.637 1.65.818 2.566 2.183 2.84 4.003v1.183c-.09.364-.732.455-.824 0 0-.091-.091-.273-.091-.364 0-.82-.184-1.638-.55-2.366-.55-.819-1.191-1.365-1.924-1.729zm4.947 5.46c-.275 0-.458-.273-.458-.546 0-.546-.091-1.092-.183-1.638-.367-2.912-2.749-5.277-5.59-5.732-.457-.091-.915-.091-1.282-.182-.275 0-.641 0-.733-.364-.091-.273.183-.546.458-.546h.184c3.756.09.183 0 0 0 3.848.09 7.055 2.639 7.696 6.46.091.637.183 1.274.183 2.002.183.273 0 .545-.275.545z"></path>
    </svg>
  );
}

export default Footer;
