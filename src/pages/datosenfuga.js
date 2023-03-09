import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./datosenfuga.scss"
import { useIntl } from "gatsby-plugin-intl";

const datosEnFuga = () => {
  const intl = useIntl();
  const title = "Datos en Fuga";
  const description = "Necesitamos que el Estado mejore los estándares de ciberseguridad.";
  const robot = "noindex";
  return (
    <Layout>
      <SEO title={title} description={description} />
      <div id="datosenfuga">
        <div className="datosenfuga">
          <div className="datosenfuga__title">
            <h1>{intl.formatMessage({id: "title_def"})}</h1>
            <div className="underline" />
          </div>
          <div className="datosenfuga__subtitle">
            <p>{intl.formatMessage({id: "subtitle_def"})}</p>
            <button>
              <a href="https://datosenfuga.org" target="_blank">{intl.formatMessage({id: "button_def"})}</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default datosEnFuga