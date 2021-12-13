import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";
const Memories = ({ data }) => {
  const intl = useIntl();
  return (
    <section className="memories-section hero is-fullheight ">
      <div className="section">
        <h2 className="is-size-3 is-spaced has-text-white has-text-centered mb-6">
          {intl.formatMessage({ id: data.memories.title })}
        </h2>
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
          {data.memories.buttons.map((memory) => (
            <a
              className={`is-medium button-memory is-flex has-text-centered has-text-dark is-justify-content-center is-align-items-center is-size-4-tablet is-size-6 mx-2 ${memory.color}`}
              href={memory.link}
              target="_blank"
            >
              {intl.formatMessage({ id: data.memories.text })}
              <br />
              {memory.year}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;
