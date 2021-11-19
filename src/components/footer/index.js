import React from "react";
import "./styles.scss";
import { useIntl } from "gatsby-plugin-intl";
import logo_der from "./assets/logo-der-white.svg";

import socialMedia from "../../../content/social-media-navbar.json";

export default () => {
  const intl = useIntl();

  return (
    <section className="footer section has-background-grey-dark	has-text-white">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column ">
            <a href="https://democraciaenred.org" target="_blank">
              <img src={logo_der} className="image mb-3" width="180" />
            </a>
            <p className="is-size-7">
              {intl.formatMessage({ id: "footer.description" })}
            </p>
            <p className="is-size-7">
              {intl.formatMessage({ id: "footer.copyright_1" })}{" "}
              <a
                className="has-text-underline"
                href="https://democraciaenred.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Democracia en Red
              </a>
              {intl.formatMessage({ id: "footer.copyright_2" })}
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
          </div>
        </div>
      </div>
    </section>
  );
};
