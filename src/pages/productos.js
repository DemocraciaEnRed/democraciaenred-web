import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHero from "../components/page-hero";
import iconProductos from "../components/page-hero/assets/productos.svg";
import Product from "../components/product";
import DemocracyosProduct from "../components/product/DemocracyosProduct";
import productsData from "../../content/products.json";
import dcosData from "../../content/dcOS.json";

const Productos = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "products_title" })}
        description={intl.formatMessage({ id: "pages.productos_seo_description" })}
      />
      <PageHero
        color="#88cbff"
        title={intl.formatMessage({ id: "products_title" })}
        subtitle={intl.formatMessage({ id: "pages.productos_subtitle" })}
        icon={iconProductos}
      />
      <DemocracyosProduct data={dcosData} otherProducts={productsData} />
      {productsData.map((product, index) => (
        <Product data={product} key={index} />
      ))}
    </Layout>
  );
};

export default Productos;
