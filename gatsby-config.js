module.exports = {
  siteMetadata: {
    title: `Democracia en Red`,
    description: `Creamos espacios de participación para la ciudadanía en la toma de decisiones públicas.`,
    author: `@DemocraciaEnRed`,
    siteUrl: `https://www.democraciaenred.org/`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-118262366-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`es`, `en`],
        // language file path
        defaultLanguage: `es`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
  ],
};
