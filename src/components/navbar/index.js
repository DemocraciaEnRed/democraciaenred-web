import React, { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useIntl, IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl";
import socialMedia from "../../../content/social-media-navbar.json";
import "./styles.scss";
import LogoDer from "./assets/logo-der.png";
import { PopupButton } from "@typeform/embed-react";

export default (props) => {
  const [isActive, setIsActive] = useState(false);
  const intl = useIntl();
  const languageName = {
    es: "ESP",
    en: "ENG",
    pt: "POR",
  };

  useEffect(() => {
    const navbarElement = document.querySelector("#navbar");
    if (isActive) {
      disableBodyScroll(navbarElement);
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "scroll";
      enableBodyScroll(navbarElement);
    }
  }, [isActive]);

  const { handleForm } = props;

  return (
    <nav
      id="navbar"
      className={isActive ? "navbar is-active" : "navbar"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand ">
        <Link className="navbar-item " onClick={() => setIsActive(false)} to="/">
          <img src={LogoDer} alt="Logo Democracia en Red" />
        </Link>
        <button
          onClick={() => setIsActive((prevState) => !prevState)}
          className={isActive ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarColapse"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navbarColapse"
        className={isActive ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start">
          {/* <div className="lang-switch">
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) =>
                languages.map((language) => (
                  <button
                    className="navbar-item navbar-item-lang"
                    key={language}
                    onClick={() => changeLocale(language)}
                    style={{
                      color: currentLocale === language ? `#CCCCCC` : `white`,
                    }}
                  >
                    {languageName[language]}
                  </button>
                ))
              }
            </IntlContextConsumer>
          </div> */}
          <Link
            className="navbar-item is-size-6 my-3 is-capitalized"
            onClick={() => setIsActive(false)}
            to="/quienessomos"
            data-target="nosotros"
          >
            {intl.formatMessage({ id: "us" })}
          </Link>
          <Link
            className="navbar-item is-size-6 my-3 is-capitalized"
            onClick={() => setIsActive(false)}
            to="/recursos"
            data-target="nosotros"
          >
            {intl.formatMessage({ id: "resources.title" })}
          </Link>
          <Link
            className="navbar-item is-size-6 my-3 is-capitalized"
            onClick={() => setIsActive(false)}
            to="/transparencia"
            data-target="transparency"
          >
            {intl.formatMessage({ id: "transparencia" })}
          </Link>
          <Link
            className="navbar-item is-size-6 my-3 is-capitalized"
            onClick={() => setIsActive(false)}
            to="/#ecosystem"
            data-target="ecosystem"
          >
            {intl.formatMessage({ id: "ecosystem.main_title" })}
          </Link>
          {/* <a href="#ecosystem" className="navbar-item is-size-6 my-3 is-capitalized">
            {intl.formatMessage({ id: "ecosystem.main_title" })}
          </a> */}
          <a href="#press-slider" className="navbar-item is-size-6 my-3 is-capitalized">
            {intl.formatMessage({ id: "press.title" })}
          </a>
          <PopupButton
            id="fSqwwL"
            style={{ fontSize: 20 }}
            className="navbar-item contact is-size-6 my-3 is-capitalized"
          >
            {intl.formatMessage({ id: "contact" })}
          </PopupButton>
          <div className="my-6 is-flex is-justify-content-space-between mr-2">
            {socialMedia.map((media) => (
            <a
              className="navbar-item is-hidden-desktop is-inline-block p-0"
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon is-large ">
                <i className={media.icon}></i>
              </span>
            </a>
          ))}
          </div>
          
          <p className="is-size-7 is-hidden-desktop has-text-white">
            {intl.formatMessage({ id: "footer.copyright_1" })}
          </p>
        </div>
      </div>
    </nav>
  );
};
