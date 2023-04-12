import React, { useState, useEffect } from "react";
import { Micromark as mdTransformer } from "../../utils/micromark";
import { dateParse } from "../../utils/DateParse";
import StoryblockService from '../../services/StoryblockService';
import "./style.scss";

const BlogContent = ({ post }) => {

  const [authors, setAuthors] = useState([])

  const storyblokInstance = StoryblockService()

  useEffect(() => {
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
  }, [])

  const findAuthor = () => {
    if (authors.length > 0) {
      const author = authors.find((author) => author.uuid === post.content.author)
      return (
        <p>{author.name}</p>
      )
    }
    return ''
  }

  if (Object.keys(post).length > 0) {
    console.log(authors)
    return (
      <section className="blogContent">
        <div
          className="post-banner"
          style={{
            backgroundImage: post.content.banner.filename
              ? `url(${post.content.banner.filename})`
              : `url(https://democraciaenred.org/der-share.png)`,
          }}
        >
          <div className="post-banner-overlay">
            <nav
              class="breadcrumb has-succeeds-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li class="is-active">
                  <a href="#" aria-current="page">
                    {post.content.title}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section is-small">
          <div className="columns is-mobile post-columns">
            <div className="column is-three-quarters-tablet is-four-fifths-desktop">
              <h1 className="pb-4">{post.content.title}</h1>
              {/* <h2 className="pb-4 has-text-black">{post.content.description}</h2> pendiente de consulta sobre su integración */}
              {post.content.bodymd ? (
                <article
                  className="post-body"
                  dangerouslySetInnerHTML={{
                    __html: mdTransformer(post.content.bodymd),
                  }}
                  style={{ color: "#000" }}
                ></article>
              ) : (
                "Contenido en desarrollo..."
              )}
            </div>
            <div className="column is-one-third-tablet is-one-fifth-desktop">
              <div className="columns is-mobile is-multiline has-text-right post-info-column">
                <div className="column is-narrow-mobile is-full-tablet">
                  <b className="is-block">Autor</b>
                  <p>{findAuthor()}</p>
                </div>
                <div className="column is-narrow-mobile is-full-tablet">
                  <b className="is-block">Publicado</b>
                  {dateParse(post.published_at)}
                </div>
                {post.tag_list.length > 0 ?
                  (<div className="column is-full-tablet">
                    <b className="is-block">Etiquetas</b>
                    <div className="is-flex is-flex-wrap-wrap tags-wrapper">
                    {post.tag_list.map((tag, index) => (
                      <span
                        key={index}
                        className="tag is-warning is-rounded has-text-black my-1"
                      >
                        {tag}
                      </span>))}
                      </div>
                  </div>) :
                  ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <h1>CARGANDO POST</h1>;
};

export default BlogContent;
