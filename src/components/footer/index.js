import React from "react";
import "./styles.scss";
import { useIntl, Link } from "gatsby-plugin-intl";
import logo_der from "./assets/logo-der-white.svg";
import { PopupButton } from "@typeform/embed-react";

import socialMedia from "../../../content/social-media-navbar.json";

export default () => {
  const intl = useIntl();

  return (
    <section className="footer section has-background-grey-dark	has-text-white">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column ">
            <Link to="/" target="_blank">
              <img src={logo_der} className="image mb-3" width="180" />
            </Link>
            <p className="is-size-7 mb-2">
              {intl.formatMessage({ id: "footer.copyright_1" })}{" "}
            </p>
            <p className="is-size-7">
              {intl.formatMessage({ id: "footer.description" })}
            </p>
          </div>

          <div className="column is-offset-1 is-two-thirds">
            <div className="is-flex is-justify-content-space-between">
              {socialMedia.map((media) => (
                <a
                  className="mx-1 is-size-5 has-text-white"
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <i className={media.icon}></i>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-4 ml-0">
              <Link
                className="navbar-item pl-0 ml-0"
                onClick={() => setIsActive(false)}
                to="/quienessomos"
                data-target="nosotros"
              >
                {intl.formatMessage({ id: "us" })}
              </Link>
              <Link
                className="navbar-item pl-0 ml-0"
                onClick={() => setIsActive(false)}
                to="/recursos"
                data-target="nosotros"
              >
                {intl.formatMessage({ id: "resources.title" })}
              </Link>
              <PopupButton
                id="fSqwwL"
                style={{ fontSize: 20 }}
                className="navbar-item pl-0 ml-0 is-size-6 is-capitalized"
              >
                {intl.formatMessage({ id: "contact" })}
              </PopupButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
