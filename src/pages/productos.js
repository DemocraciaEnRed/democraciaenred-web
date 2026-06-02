import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Product from "../components/product";
import DemocracyosProduct from "../components/product/DemocracyosProduct";
import productsData from "../../content/products.json";
import dcosData from "../../content/dcOS.json";
import Division from "../components/division";

const Productos = () => {
  return (
    <Layout>
      <SEO title="Productos" description="Herramientas de participación ciudadana." />
      <DemocracyosProduct data={dcosData} otherProducts={productsData} />
      <Division />
      {productsData.map((product, index) => (
        <Product data={product} key={index} />
      ))}
    </Layout>
  );
};

export default Productos;
