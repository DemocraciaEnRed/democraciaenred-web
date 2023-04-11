import React, { useEffect, useState } from 'react'


import dataBlog from '../../../content/blog.json';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Division from '../../components/division';
import InternalPageHero from '../../components/internal-page-hero';
import BlogHeader from '../../components/blog-header';
import StoryblockService from '../../services/StoryblockService';
// const Storyblok = new StoryblokClient({
//   accessToken: process.env.STORYBLOK_TOKEN,
//   region: process.env.STORYBLOK_REGION
// });

const Blog = () => {

  const title = "Democracia en Red | Blog";
  const description = "Conocé nuestras novedades";
  const robot = "noindex"
  const storyblokInstance = StoryblockService()
  const [data, setData] = useState([])
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    storyblokInstance.get(`cdn/stories`, {
      version: process.env.STORYBLOK_VERSION,
      starts_with: 'blog/'
    })
    .then((response) => {
      setData(response.data.stories)
      console.log(response.data.stories)
    })
    .catch((error) => {
      console.log(error)
    })
    // Storyblok.get(`cdn/stories`, {
    //   version: process.env.STORYBLOK_VERSION,
    //   starts_with: 'blog/'
    // })
    // .then((response) => {
    //   setData(response.data.stories)
    //   console.log(response.data.stories)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })

    storyblokInstance.get(`cdn/stories`, {
      version: process.env.STORYBLOK_VERSION,
      starts_with: 'authors/'
    })
    .then((res) => {
      setAuthors(res.data.stories)
    })
    .catch((err) => {
      console.log(err)
    })
    // Storyblok.get(`cdn/stories`, {
    //   version: process.env.STORYBLOK_VERSION,
    //   starts_with: 'authors/'
    // })
    // .then((res) => {
    //   setAuthors(res.data.stories)
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

  }, [])

  return (
    <React.Fragment>
      <Layout style={{margin: 50}}>
        <SEO title={title} description={description} robot={robot} />
        <InternalPageHero data={dataBlog} background= {"pink"} />
        <Division />
        <BlogHeader data={dataBlog} posts={data} authors={authors} />
      </Layout>
  </React.Fragment>   
  )
}

export default Blog