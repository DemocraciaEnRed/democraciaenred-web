import React, { useEffect, useState } from 'react'
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
  region: "us"
});

const blog = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    Storyblok.get(`cdn/stories`, {
      version: 'draft',
    })
    .then((response) => {
      // console.log(response.data.stories)
      setData(response.data.stories)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
      <div>
        {data.map((d) => (
          <div key={d.id}>
            <h4>{d.name}</h4>
            <br />
            <h3>{d.description}</h3>
            <br />
            <p>{d.content.bodymd}</p>
          </div>
        ))}
      </div>
  )
}

export default blog