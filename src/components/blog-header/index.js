import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl';
import "./style.scss"
import BlogCards from '../blog-cards';

const BlogHeader = ({ data, posts, authors }) => {
  const intl = useIntl();
  const [filter, setFilter] = useState("all");
  return (
    <section id="blog">
      <div className="columns bg-dark mx-0 mt-0 section mb-0 pb-6">
        <div className="column ">
          <h1 className="is-spaced mb-6 is-size-1">
            {/* {intl.formatMessage({ id: data.subtitle })} */}
            conoce nuestras...
          </h1>
          <div class="field mb-5">
            <p class="control has-icons-right">
              <input class="input pl-5 " type="text" placeholder="Ingresa el nombre o apellido del Autor o Autora" />
              <span class="icon is-right">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          {data.filter.map((filter, index) => (
            <button
              key={index}
              onClick={() => setFilter(filter.id)}
              className="m-1 button button-disabled-shadow has-no-background is-rounded is-small is-warning is-outlined is-uppercase is-inline-block"
            >
              {intl.formatMessage({ id: filter.name })}
            </button>
          ))}
        </div>
      </div>
      <div className='container py-5'>
        <div className='columns'>
          {
            posts.map((post, index) => {
              return (
                  <BlogCards post={post} index={index} authors={authors} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BlogHeader