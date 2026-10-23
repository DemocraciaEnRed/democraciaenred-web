import React, { useState, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useIntl, IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl";
import socialMedia from "../../../content/social-media-navbar.json";
import SocialIcon from "../social-icon";
import "./styles.scss";
import LogoDer from "./assets/logo-der.png";
import ContactPopup from "../contact-popup";

const HOME_SECTIONS = [
  { id: "productos", key: "productos" },
  { id: "resources", key: "proyectos" },
  { id: "ecosystem", key: "ecosystem" },
];

export default (props) => {
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const intl = useIntl();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pathname = window.location.pathname.replace(/^\/(es|en|pt)/, "");

    if (pathname === "/" || pathname === "") {
      const observers = [];
      HOME_SECTIONS.forEach(({ id, key }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const observer = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActiveSection(key); },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      });
      return () => observers.forEach((o) => o.disconnect());
    } else {
      if (pathname.startsWith("/conocenos")) setActiveSection("conocenos");
      else if (pathname.startsWith("/productos")) setActiveSection("productos");
      else if (pathname.startsWith("/recursos")) setActiveSection("proyectos");
      else if (pathname.startsWith("/ecosistema")) setActiveSection("ecosystem");
      else setActiveSection(null);
    }
  }, [typeof window !== "undefined" && window.location.pathname]);
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
        <div>

          <div className="navbar-brand">
            <Link className="menu-logo" onClick={() => setIsActive(false)} to="/">
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
        <div className="navbar-start">
          <Link
            className={`navbar-item is-size-6 my-3 is-capitalized${activeSection === "conocenos" ? " nav-active" : ""}`}
            onClick={() => setIsActive(false)}
            to="/conocenos"
            data-target="nosotros"
          >
            {intl.formatMessage({ id: "us" })}
          </Link>
          <Link
            className={`navbar-item is-size-6 my-3 is-capitalized${activeSection === "productos" ? " nav-active" : ""}`}
            onClick={() => setIsActive(false)}
            to="/productos"
            data-target="productos"
          >
            {intl.formatMessage({ id: "products_title" })}
          </Link>
          <Link
            className={`navbar-item is-size-6 my-3 is-capitalized${activeSection === "proyectos" ? " nav-active" : ""}`}
            onClick={() => setIsActive(false)}
            to="/recursos"
            data-target="proyectos"
          >
            {intl.formatMessage({ id: "resources.title" })}
          </Link>
          <Link
            className={`navbar-item is-size-6 my-3 is-capitalized${activeSection === "ecosystem" ? " nav-active" : ""}`}
            onClick={() => setIsActive(false)}
            to="/ecosistema"
            data-target="ecosystem"
          >
            {intl.formatMessage({ id: "ecosystem.main_title" })}
          </Link>
          <a
            className="navbar-item is-size-6 my-3 is-capitalized"
            href="https://blog.democraciaenred.org"
          >
            Blog
          </a>
          <ContactPopup
            style={{ fontSize: 20 }}
            className="navbar-item contact is-size-6 my-3 is-capitalized"
            button={intl.formatMessage({ id: "contact" })}
          />
            <div className="my-3  mr-2 media-wrapper">
            {socialMedia.map((media, index) => (
            <a
                className="navbar-item  is-inline-block p-0"
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <span className="icon is-large ">
                <SocialIcon media={media} />
              </span>
            </a>
          ))}
          </div>
          

          <div className="lang-switch">
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
          </div>
        </div>
        </div>
        <p className="is-size-7 has-text-white footer-navbar">
          {intl.formatMessage({ id: "footer.copyright_1" })}
        </p>
      </div>
    </nav>
  );
};
