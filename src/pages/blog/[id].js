import React, { useState, useEffect } from 'react'
import StoryblockService from '../../services/StoryblockService';
import { Micromark as mdTransformer } from '../../utils/micromark';
import { navigate } from 'gatsby-plugin-intl';

const BlogView = (param) => {

  const [post, setPost] = useState({});
  const storyblockInstance = StoryblockService();

  useEffect(() => {
    storyblockInstance.get(`cdn/stories/${param.uri}`, {
      version: process.env.STORYBLOK_VERSION,
    })
      .then((response) => {
        setPost(response.data.story)
        console.log(response.data.story.content.title)
      })
      .catch((error) => {
        console.log(error)
        navigate(`/404`)
      })
  }, [])
  return (
    <div>
      <h1>hola</h1>
      {Object.keys(post).length > 0 ?
      <div dangerouslySetInnerHTML={{__html:(mdTransformer(post.content.bodymd))}}></div> : 'Contenido en desarrollo...'}
    </div>
  )
}
export default BlogView