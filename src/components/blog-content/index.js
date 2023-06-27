import React, { useState, useEffect } from "react";
import { Micromark as mdTransformer } from "../../utils/Micromark"
import { dateParse } from "../../utils/DateParse";
import "./style.scss";
import FeaturedPosts from "./featured-posts";

const BlogContent = ({ post }) => {
  console.log(post)
  if (Object.keys(post).length > 0) {
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
              className="breadcrumb has-succeeds-separator"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    {post.content.title}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section is-small">
          <div className="container">
            <div className="columns post-columns is-multiline">
              <div className="column is-12-touch is-9-desktop">
                <div className="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between is-flex-wrap-wrap">
                  <div className="is-flex is-flex-direction-row">
                    {
                      Array.isArray(post.content.author) ? post.content.author.map((author, index) => (
                        <figure className="image is-64x64 mr-4" key={index}>
                          <img className="is-rounded" src={author.content?.photo?.filename ? author.content.photo.filename : `https://democraciaenred.org/der-share.png`} alt={author.name} />
                        </figure>
                      )) : 
                        <figure className="image is-64x64 mr-4">
                          <img className="is-rounded" src={post.content.author.content?.photo?.filename ? post.content.author.content.photo.filename : `https://democraciaenred.org/der-share.png`} alt={post.content.author.name} />
                        </figure>
                    }
                    <div className="is-flex is-flex-direction-column is-justify-content-center">
                      {
                      Array.isArray(post.content.author) ? post.content.author.map((author, index) => (
                        <div key={index}>
                          <b>{author.name}</b>
                        </div>
                      )) : 
                        <div>
                          <b>{post.content.author.name}</b>
                        </div>
                    }
                      <p>{dateParse(post.published_at)}</p>
                    </div>
                  </div>
                  <div>
                    {post.tag_list.length > 0 ?
                      (<div>
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
                <h1 className="title is-1 is-size-3-touch has-text-weight-bold pt-4">{post.content.title}</h1>
                <h2 className="pb-4 is-italic has-text-black">{post.content.description}</h2>
                <hr />
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
              <div className="column is-12-touch is-3-desktop">
                {
                  Array.isArray(post.content.author) ? post.content.author.map((author, index) => (
                    <div style={{marginBottom: 15}} key={index}>
                      <figure className="image is-128x128 mb-3 author-image">
                        <img className="is-rounded" src={author.content?.photo?.filename ? author.content.photo.filename : `https://democraciaenred.org/der-share.png`} />
                      </figure>
                      <b>{author.name}</b>
                      <p className="pb-2">{author.content?.role}</p>
                      {author.content?.linkedin ? <a href={author.content.linkedin} style={{ color: '#0077b5' }} target="_blank" ><i className="fab fa-linkedin fa-2x mx-1" /></a> : ''}
                      {author.content?.twitter ? <a href={author.content.twitter} target="_blank" ><i className="fab fa-twitter fa-2x mx-1" /></a> : ''}
                      <div className="is-full-tablet mt-4">
                        <p>{author.content?.bio}</p>
                      </div>
                    </div>
                  )) :
                  <div>
                      <figure className="image is-128x128 mb-3 author-image">
                        <img className="is-rounded" src={post.content.author.content?.photo?.filename ? post.content.author.content.photo.filename : `https://democraciaenred.org/der-share.png`} />
                      </figure>
                      <b>{post.content.author.name}</b>
                      <p className="pb-2">{post.content.author.content?.role}</p>
                      {post.content.author.content?.linkedin ? <a href={post.content.author.content.linkedin} style={{ color: '#0077b5' }} target="_blank" ><i className="fab fa-linkedin fa-2x mx-1" /></a> : ''}
                      {post.content.author.content?.twitter ? <a href={post.content.author.content.twitter} target="_blank" ><i className="fab fa-twitter fa-2x mx-1" /></a> : ''}
                      <div className="is-full-tablet mt-4">
                        <p>{post.content.author.content?.bio}</p>
                      </div>
                    </div>
                }     
              </div>
            </div>
          </div>
        <FeaturedPosts uidPost={post.content._uid} tags={post.tag_list} />
        </div>
      </section>
    );
  }
  return <h1>CARGANDO POST</h1>;
};

export default BlogContent;
