import React, { useEffect, useState } from 'react'


import dataBlog from '../../../content/blog.json';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Division from '../../components/division';
import InternalPageHero from '../../components/internal-page-hero';
import BlogHeader from '../../components/blog-header';
import { StoryblockService } from '../../services/StoryblockService';
import { getStories, getTags } from '../../controllers/StoryblokController';

const Blog = () => {

  const title = "Democracia en Red | Blog";
  const description = "Conocé nuestras novedades";
  const robot = "noindex"

  const [data, setData] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {

    const controller = new AbortController();

    getStories()
    .then((response) => {setData(response)})
    .catch((error) => {console.log(error)})

    getTags()
    .then((res) => {setTags(res.data.tags)})
    .catch((err) => {console.log(err)})

    return () => {
      controller.abort();
    };


  }, [])

  return (
    <React.Fragment>
      <Layout style={{ margin: 50 }}>
        <SEO title={title} description={description} robot={robot} />
        <InternalPageHero data={dataBlog} background={"pink"} />
        <Division />
        <BlogHeader data={dataBlog} posts={data} tags={tags} />
      </Layout>
    </React.Fragment>
  )
}

export default Blog