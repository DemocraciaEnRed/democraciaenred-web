import React, { useEffect, useState } from 'react'


import dataBlog from '../../../content/blog.json';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Division from '../../components/division';
import InternalPageHero from '../../components/internal-page-hero';
import BlogHeader from '../../components/blog-header';
import { StoryblockService } from '../../services/StoryblockService';

const Blog = () => {

  const title = "Democracia en Red | Blog";
  const description = "Conocé nuestras novedades";
  const robot = "noindex"
  const storyblokInstance = StoryblockService()
  const [data, setData] = useState([])
  const [authors, setAuthors] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    storyblokInstance.get(`cdn/stories`, {
      version: process.env.STORYBLOK_VERSION,
      starts_with: 'blog/',
      resolve_relations:['post.author']
    })
    .then((response) => {
      setData(response.data.stories)
    })
    .catch((error) => {
      console.log(error)
    })


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

    storyblokInstance.get(`cdn/tags`, {
      version: process.env.STORYBLOK_VERSION,
      starts_with: 'blog/'
    })
    .then((res) => {
      setTags(res.data.tags)
    })
    .catch((err) => {
      console.log(err)
    })

  }, [])

  return (
    <React.Fragment>
      <Layout style={{margin: 50}}>
        <SEO title={title} description={description} robot={robot} />
        <InternalPageHero data={dataBlog} background= {"pink"} />
        <Division />
        <BlogHeader data={dataBlog} posts={data} authors={authors} tags={tags} />
      </Layout>
  </React.Fragment>   
  )
}

export default Blog