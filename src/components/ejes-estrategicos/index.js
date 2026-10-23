import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";

const items = [
  { titleKey: "ejes.item1_title", descKey: "ejes.item1_desc", color: "yellow" },
  { titleKey: "ejes.item2_title", descKey: "ejes.item2_desc", color: "purple" },
  { titleKey: "ejes.item3_title", descKey: "ejes.item3_desc", color: "green" },
];

const EjesEstrategicos = () => {
  const intl = useIntl();

  return (
    <section className="section ejes-estrategicos">
      <div className="container">
        <h2 className="title mb-6">
          {intl.formatMessage({ id: "ejes.title" })}
        </h2>
        <div className="columns">
          {items.map((item, i) => (
            <div key={i} className="column">
              <div className={`ejes-card ejes-card--${item.color}`}>
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

export default EjesEstrategicos;
