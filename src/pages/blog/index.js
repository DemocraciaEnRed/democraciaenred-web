import React, { useEffect, useState } from 'react'


import dataBlog from '../../../content/blog.json';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PageHero from '../../components/page-hero';
import BlogHeader from '../../components/blog-header';
// import { StoryblockService } from '../../services/StoryblockService';
// import { getStories, getTags } from '../../controllers/StoryblokController';

const Blog = () => {

  const title = "Democracia en Red | Blog";
  const description = "Conocé nuestras novedades";
  const robot = "noindex"

  /* const [data, setData] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {

    const controller = new AbortController();

    getStories()
      .then((response) => { setData(response) })
      .catch((error) => { console.log(error) })

    getTags()
      .then((res) => { setTags(res) })
      .catch((err) => { console.log(err) })

    return () => {
      controller.abort();
    };


  }, []) */

  return (
    <React.Fragment>
      <Layout style={{ margin: 50 }}>
        <SEO title={title} description={description} robot={robot} />
        <PageHero
          color="#ff7990"
          title="Blog"
          subtitle="Conocé nuestras novedades, análisis y reflexiones sobre democracia y tecnología."
        />
        {/* <BlogHeader data={dataBlog} posts={data} tags={tags} /> */}
        <section className="section">
          <h2 className='subtitle has-text-centered'>PÁGINA EN CONSTRUCCIÓN</h2>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Blog