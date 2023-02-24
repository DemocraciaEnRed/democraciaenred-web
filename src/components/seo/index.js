import React from "react";
import { string, object, arrayOf } from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from './assets/favicon.png'

const SEO = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
              siteUrl
            }
          }
        }
      `
    )
    const metaDescription = description || site.siteMetadata.description;
    const webTitle = site.siteMetadata.title;
    const metaTitle = title || 'Democracia en Red | Partipación Ciudadana'
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={webTitle}
            titleTemplate={`%s | ${metaTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name:`keywords`,
                    content: `Presupuesto Participativo, Consulta digital, Digital Participation Platforms, Innovacion Política, Elecciones, Derechos Digitales, Tecnología Cívica, Plataformas de participación ciudadana, Software libre para la participación ciudadana, Consul, Decidim, Citizenlab, AbreLatam, plataforma de participación ciudadana, rendición de cuentas, plan de metas, OGP, Alianza para el Gobierno Abierto, integridad, Florencia Caffarone, Don Powa, Agustin Frizzera, Presupuesto Participativo de Vicente López, Datos en Fuga`
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                    
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:url`,
                    content: site.siteMetadata.siteUrl,
                },
                {
                    property: `og:image`,
                    content: `https://democraciaenred.org/der-share.png`,
                },
                {
                    property: `og:image:url`,
                    content: `https://democraciaenred.org/der-share.png`,
                },
                {
                    property: `og:image:width`,
                    content: `1200`,
                },
                {
                    property: `og:image:height`,
                    content: `628`,
                },
                {
                    name: `twitter:card`,
                    content: `https://democraciaenred.org/der-share.png`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:url`,
                    content: site.siteMetadata.siteUrl,
                },
                {
                    name: `twitter:image`,
                    content: `https://democraciaenred.org/der-share.png`,
                },
            ].concat(meta)}
        >
            <link rel="icon" type="image/png" href={favicon} />
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}

        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `es`,
    meta: [],
    description: ``,
    title: ``,
}

SEO.propTypes = {
    description: string,
    lang: string,
    meta: arrayOf(object),
    title: string,
}
export default SEO
