import React, { useState, useEffect } from "react";
import { StoryblockService } from "../../services/StoryblockService";
import { navigate } from "gatsby-plugin-intl";
import Layout from "../../components/layout";
import BlogContent from "../../components/blog-content";

const BlogView = (param) => {
  const [post, setPost] = useState({});
  const storyblockInstance = StoryblockService();

  useEffect(() => {
    storyblockInstance
      .get(`cdn/stories/${param.uri}`, {
        version: process.env.STORYBLOK_VERSION,
      })
      .then((response) => {
        setPost(response.data.story);
      })
      .catch((error) => {
        console.log(error);
        navigate(`/404`);
      });
  }, []);

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
  );
};
export default BlogView;
