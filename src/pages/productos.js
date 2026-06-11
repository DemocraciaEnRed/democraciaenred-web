import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHero from "../components/page-hero";
import iconProductos from "../components/page-hero/assets/productos.svg";
import Product from "../components/product";
import DemocracyosProduct from "../components/product/DemocracyosProduct";
import productsData from "../../content/products.json";
import dcosData from "../../content/dcOS.json";

const Productos = () => {
  return (
    <Layout>
      <SEO title="Productos" description="Herramientas de participación ciudadana." />
      <PageHero
        color="#88cbff"
        title="Productos"
        subtitle="Herramientas de tecnología cívica basadas en DemocraciaOS para gobiernos, legislativos y organizaciones."
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
