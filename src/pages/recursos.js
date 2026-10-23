import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./styles.scss";
import PageHero from "../components/page-hero";
import iconProyectos from "../components/page-hero/assets/proyectos.svg";
import LineasTrabajo from "../components/lineas-trabajo";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Recursos = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "resources.title" });
  const description = intl.formatMessage({ id: "pages.proyectos_seo_description" });
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} />
        <PageHero
          color="#69d69d"
          title={title}
          subtitle={intl.formatMessage({ id: "pages.proyectos_subtitle" })}
          icon={iconProyectos}
        />
        <LineasTrabajo />
      </Layout>
    </React.Fragment>
  );
};

export default Recursos;
