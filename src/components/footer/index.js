import React from "react";
import "./styles.scss";
import { useIntl, Link } from "gatsby-plugin-intl";
// import logo_der from "./assets/logo-der-white.svg";
import logo_der from "./assets/logo-der.png";
import { PopupButton } from "@typeform/embed-react";

import socialMedia from "../../../content/social-media-navbar.json";

export default () => {
  const intl = useIntl();

  return (
    <section className="footer section background-lazy-dark	has-text-white">
      <div className="container">
        {/* removed class is-vcentered  */}
        <div className="columns">
          <div className="column my-0 orga">
            <Link to="/" target="_blank">
              <img src={logo_der} className="image mb-3" width="237" />
            </Link>
            <p className=" description mb-2">
              {intl.formatMessage({ id: "footer.copyright_1" })}{" "}
            </p>
            <hr></hr>
            <p className="sub-description">
              {intl.formatMessage({ id: "footer.description" })}
            </p>
          </div>

          <div className="column is-offset-1 is-two-thirds  flex is-flex-direction-row">

            <div className="column is-12 columns">
              <div className=" column ml-0">
                <h1 className="subtitle">
                  {intl.formatMessage({id: "footer.subtitles.sections"})}
                </h1>
                <Link
                  className="navbar-item pl-0 ml-0"
                  to="/conocenos"
                >
                  {intl.formatMessage({ id: "us" })}
                </Link>
                <Link
                  className="navbar-item pl-0 ml-0"
                  to="/productos"
                >
                  {intl.formatMessage({ id: "products_title" })}
                </Link>
                <Link
                  className="navbar-item pl-0 ml-0"
                  to="/recursos"
                >
                  Proyectos
                </Link>
                <Link
                  className="navbar-item pl-0 ml-0"
                  to="/ecosistema"
                >
                  {intl.formatMessage({ id: "ecosystem.main_title" })}
                </Link>
                <a
                  className="navbar-item pl-0 ml-0"
                  href="https://blog.democraciaenred.org"
                >
                  Blog
                </a>                                           
              </div>
              <div className="column ">
                 <h1 className="subtitle">
                  {intl.formatMessage({id: "footer.subtitles.contact"})}
                 </h1>
                <PopupButton
                  id="fSqwwL"
                  style={{ fontSize: 20 }}
                  className="navbar-item contact is-size-6 my-3 is-capitalized"
                >
                  {intl.formatMessage({ id: "contact" })}
                </PopupButton>
                
                <p>contacto@democraciaenred.org</p>

                <div className="container mt-6">
                  <h1 className="subtitle">
                    {intl.formatMessage({id: "footer.subtitles.social"})}
                  </h1>
                  <div className="social column is-12 is-flex is-justify-content-space-between">

                    {socialMedia.map((media, index) => (
                      <a
                        className="mx-1 is-size-5 has-text-white"
                        href={media.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      >
                        <span className="icon">
                          <i className={media.icon}></i>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
