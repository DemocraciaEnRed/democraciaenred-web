import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";

const items = [
  { titleKey: "queHacemos.item1_title", descKey: "queHacemos.item1_desc", color: "blue" },
  { titleKey: "queHacemos.item2_title", descKey: "queHacemos.item2_desc", color: "green" },
  { titleKey: "queHacemos.item3_title", descKey: "queHacemos.item3_desc", color: "pink" },
];

const QueHacemos = () => {
  const intl = useIntl();

  return (
    <section className="section que-hacemos">
      <div className="container">
        <h2 className="title mb-6">
          {intl.formatMessage({ id: "queHacemos.title" })}
        </h2>
        <div className="columns">
          {items.map((item, i) => (
            <div key={i} className="column">
              <div className={`que-hacemos-card que-hacemos-card--${item.color}`}>
                <h3 className="title is-5 mb-3">
                  {intl.formatMessage({ id: item.titleKey })}
                </h3>
                <p className="subtitle is-6">
                  {intl.formatMessage({ id: item.descKey })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
