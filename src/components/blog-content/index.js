import React from "react";
import { Micromark as mdTransformer } from "../../utils/micromark";
import "./style.scss";

const BlogContent = ({ post }) => {
  console.log(post);

  const dateParse = (date) => {
    const newDate = new Date(Date.parse(date));
    if (!isNaN(newDate) && newDate) {
      const parsedDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
      return <time>{parsedDate}</time>;
    }
    return "";
  };

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
        <div className="container py-6 blog-container">
          <div className="post-content">
            <h1 className="post-title pb-4">{post.content.title}</h1>
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
          <div className="post-info is-flex is-flex-direction-column is-justify-content-center ml-6">
            <b>Autor</b>
            <p>Flor Caffarone</p>
            <br />
            <b>Publicado</b>
            <p>{dateParse(post.published_at)}</p>
            <br />
            <b>Etiquetas</b>
            {post.tag_list.length > 0
              ? post.tag_list.map((tag, index) => (
                  <span
                    key={index}
                    className="tag is-rounded has-text-black has-background-warning my-1"
                  >
                    {tag}
                  </span>
                ))
              : ""}
          </div>
        </div>
      </section>
    );
  }
  return <h1>CARGANDO POST</h1>;
};

export default BlogContent;
