import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl';
import "./style.scss"
import BlogCards from '../blog-cards';

const BlogHeader = ({ data, posts, authors }) => {
  const intl = useIntl();
  const [filter, setFilter] = useState("all");
  const [authorSearch, setauthorSearch] = useState([]);

  const filterSearchBar = (e) => {
    const searchValue = e.target.value
    const valueUpperCase = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    const filteredPosts = authors.filter((author) => {
      return (
        author.name.includes(valueUpperCase)
      );
    });
    setauthorSearch(filteredPosts);
    console.log(valueUpperCase)
    console.log(filteredPosts);
  }

  return (
    <section id="blog">
      <div className="columns bg-dark mx-0 mt-0 section mb-0 pb-6">
        <div className="column">
          <h1 className="is-spaced mb-2 is-size-1">
            {intl.formatMessage({ id: data.subtitle })}
          </h1>
          <div className="field mb-6">
            <p className="control has-icons-right">
              <input className="input pl-5 " type="text" placeholder={intl.formatMessage({ id: data.searchBar })} onChange={filterSearchBar} />
              <span className="icon is-right">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <p className="is-size-3 has-text-white mb-4">{intl.formatMessage({ id: data.filterText })}</p>
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
        <div className='columns is-multiline'>
          {
            filter === "all" ?
            posts.map((post, index) => {
              return (
                  <BlogCards post={post} key={index} authors={authors} />
              )
            })
            :
            posts.filter(post => post.tag_list.includes(filter)).map((post, index) => {
              return (
                  <BlogCards post={post} key={index} authors={authors} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BlogHeader