import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";

const lineas = [
  {
    id: "participacion-ciudadana",
    color: "#88CBFF",
    icon: "fa-vote-yea",
    titleKey: "lineasTrabajo.section1_title",
    subtitleKey: "lineasTrabajo.section1_subtitle",
    bodyKeys: ["lineasTrabajo.section1_body1", "lineasTrabajo.section1_body2"],
    itemsHeadingKey: "lineasTrabajo.section1_subheading",
    itemsType: "grid",
    items: [
      { icon: "fa-users", titleKey: "lineasTrabajo.section1_card1_title", descKey: "lineasTrabajo.section1_card1_desc" },
      { icon: "fa-map-marker-alt", titleKey: "lineasTrabajo.section1_card2_title", descKey: "lineasTrabajo.section1_card2_desc" },
      { icon: "fa-money-bill-wave", titleKey: "lineasTrabajo.section1_card3_title", descKey: "lineasTrabajo.section1_card3_desc" },
      { icon: "fa-comments", titleKey: "lineasTrabajo.section1_card4_title", descKey: "lineasTrabajo.section1_card4_desc" },
      { icon: "fa-file-alt", titleKey: "lineasTrabajo.section1_card5_title", descKey: "lineasTrabajo.section1_card5_desc" },
      { icon: "fa-clipboard-check", titleKey: "lineasTrabajo.section1_card6_title", descKey: "lineasTrabajo.section1_card6_desc" },
    ],
    dosBoxKey: "lineasTrabajo.section1_dosbox",
    examples: [
      { nameKey: "lineasTrabajo.section1_project1_name", partnerKey: "lineasTrabajo.section1_project1_partner", descKey: "lineasTrabajo.section1_project1_desc" },
      { nameKey: "lineasTrabajo.section1_project2_name", partnerKey: "lineasTrabajo.section1_project2_partner", descKey: "lineasTrabajo.section1_project2_desc" },
      { nameKey: "lineasTrabajo.section1_project3_name", partnerKey: "lineasTrabajo.section1_project3_partner", descKey: "lineasTrabajo.section1_project3_desc" },
    ],
  },
  {
    id: "impacto-a-medida",
    color: "#E7B4F1",
    icon: "fa-puzzle-piece",
    titleKey: "lineasTrabajo.section2_title",
    subtitleKey: "lineasTrabajo.section2_subtitle",
    bodyKeys: ["lineasTrabajo.section2_body1", "lineasTrabajo.section2_body2"],
    itemsHeadingKey: "lineasTrabajo.section2_subheading",
    itemsType: "grid",
    items: [
      { icon: "fa-th-large", titleKey: "lineasTrabajo.section2_card1_title", descKey: "lineasTrabajo.section2_card1_desc" },
      { icon: "fa-chart-line", titleKey: "lineasTrabajo.section2_card2_title", descKey: "lineasTrabajo.section2_card2_desc" },
      { icon: "fa-magic", titleKey: "lineasTrabajo.section2_card3_title", descKey: "lineasTrabajo.section2_card3_desc" },
    ],
    examples: [
      { nameKey: "lineasTrabajo.section2_project1_name", partnerKey: "lineasTrabajo.section2_project1_partner", descKey: "lineasTrabajo.section2_project1_desc" },
      { nameKey: "lineasTrabajo.section2_project2_name", partnerKey: "lineasTrabajo.section2_project2_partner", descKey: "lineasTrabajo.section2_project2_desc" },
      { nameKey: "lineasTrabajo.section2_project3_name", partnerKey: "lineasTrabajo.section2_project3_partner", descKey: "lineasTrabajo.section2_project3_desc" },
    ],
  },
  {
    id: "incidencia-publica",
    color: "#FF9B73",
    icon: "fa-bullhorn",
    titleKey: "lineasTrabajo.section3_title",
    subtitleKey: "lineasTrabajo.section3_subtitle",
    bodyKeys: ["lineasTrabajo.section3_body1", "lineasTrabajo.section3_body2"],
    itemsHeadingKey: "lineasTrabajo.section3_subheading",
    itemsType: "tags",
    items: [
      { icon: "fa-landmark", titleKey: "lineasTrabajo.section3_tag1" },
      { icon: "fa-users", titleKey: "lineasTrabajo.section3_tag2" },
      { icon: "fa-eye", titleKey: "lineasTrabajo.section3_tag3" },
      { icon: "fa-shield-alt", titleKey: "lineasTrabajo.section3_tag4" },
      { icon: "fa-seedling", titleKey: "lineasTrabajo.section3_tag5" },
    ],
    examples: [
      { nameKey: "lineasTrabajo.section3_project1_name", partnerKey: "lineasTrabajo.section3_project1_partner", descKey: "lineasTrabajo.section3_project1_desc" },
      { nameKey: "lineasTrabajo.section3_project2_name", descKey: "lineasTrabajo.section3_project2_desc" },
      { nameKey: "lineasTrabajo.section3_project3_name", descKey: "lineasTrabajo.section3_project3_desc" },
      { nameKey: "lineasTrabajo.section3_project4_name", descKey: "lineasTrabajo.section3_project4_desc" },
    ],
  },
];

const LineasTrabajo = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <section className="section lt-overview">
        <div className="container">
          <h2 className="title lt-title">
            {intl.formatMessage({ id: "lineasTrabajo.title" })}
          </h2>
          <div className="lt-overview-row">
            {lineas.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="lt-overview-item">
                <span className="lt-overview-badge" style={{ backgroundColor: l.color }}>
                  <i className={`fas ${l.icon}`}></i>
                </span>
                <span className="lt-overview-label">{intl.formatMessage({ id: l.titleKey })}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {lineas.map((l) => (
        <section key={l.id} id={l.id} className="section lt-line" style={{ backgroundColor: l.color }}>
          <div className="container">
            <div className="lt-line-header">
              <i className={`fas ${l.icon} lt-line-icon`}></i>
              <div>
                <h2 className="lt-line-title">{intl.formatMessage({ id: l.titleKey })}</h2>
                <p className="lt-line-subtitle">{intl.formatMessage({ id: l.subtitleKey })}</p>
              </div>
            </div>

            {l.bodyKeys.map((key) => (
              <p key={key} className="lt-body-text">{intl.formatMessage({ id: key })}</p>
            ))}

            <p className="lt-items-heading">{intl.formatMessage({ id: l.itemsHeadingKey })}</p>

            <div className={l.itemsType === "tags" ? "lt-tags-row" : "lt-items-row"}>
              {l.items.map((item, i) => (
                <div key={i} className={`lt-item ${l.itemsType === "tags" ? "lt-tag" : ""}`} style={{ borderTopColor: l.color }}>
                  <i className={`fas ${item.icon}`} style={{ color: l.color }}></i>
                  <p className="lt-item-title">{intl.formatMessage({ id: item.titleKey })}</p>
                  {item.descKey && <p className="lt-item-desc">{intl.formatMessage({ id: item.descKey })}</p>}
                </div>
              ))}
            </div>

            {l.dosBoxKey && (
              <div
                className="lt-dosbox"
                dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: l.dosBoxKey }) }}
              ></div>
            )}

            <div className="lt-examples">
              <p className="lt-examples-label">{intl.formatMessage({ id: "lineasTrabajo.examples_label" })}</p>
              <div className="lt-examples-grid">
                {l.examples.map((p, i) => (
                  <div key={i} className="lt-example-card">
                    <p className="lt-example-name">{intl.formatMessage({ id: p.nameKey })}</p>
                    {p.partnerKey && <p className="lt-example-partner">{intl.formatMessage({ id: p.partnerKey })}</p>}
                    <p className="lt-example-desc">{intl.formatMessage({ id: p.descKey })}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
};

export default LineasTrabajo;
