import React from "react";
import "./styles.scss";
import PageHero from "../components/page-hero";
import iconProyectos from "../components/page-hero/assets/proyectos.svg";
import dataResources from "../../content/resources.json";
import ResourcesHeader from "../components/resources-header";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Recursos = () => {
  const title = "Proyectos";
  const description = "Una caja de herramientas para implementar procesos de participación.";
  return (
    <React.Fragment>
      <Layout>
        <SEO title={title} description={description} />
        <PageHero
          color="#69d69d"
          title="Proyectos"
          subtitle={[
            "Desarrollamos tecnología cívica innovadora.",
            "Producimos contenidos para la incidencia ciudadana.",
            "Sistematizamos y compartimos nuestras experiencias."
          ]}
          icon={iconProyectos}
        />
        <ResourcesHeader data={dataResources} />
      </Layout>
    </React.Fragment>
  );
};

export default Recursos;
