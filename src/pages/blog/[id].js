import React, { useState, useEffect } from "react";
import { navigate } from "gatsby-plugin-intl";
import Layout from "../../components/layout";
import BlogContent from "../../components/blog-content";
import { getStoryByFullSlug } from "../../controllers/StoryblokController";

const BlogView = (param) => {
  navigate(`/404`);
  /* const [post, setPost] = useState({});

  useEffect(() => {

    getStoryByFullSlug(param.uri)
      .then((response) => {
        setPost(response);
      })
      .catch((error) => {
        console.log(error);
        navigate(`/404`);
      });

  }, [param]);

  if (Object.keys(post).length > 0) {
    return (
      <Layout>
        <BlogContent post={post} />
      </Layout>
    );
  }
  return (
    <Layout>
      <h1> CARGANDO POST</h1>;
    </Layout>
  ); */
};
export default BlogView;
