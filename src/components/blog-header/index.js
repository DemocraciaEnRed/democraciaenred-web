import React, { useState, useEffect, useRef } from 'react'
import { useIntl } from 'gatsby-plugin-intl';
import "./style.scss"
import BlogCards from '../blog-cards';
import { getStories } from '../../controllers/StoryblokController';

const BlogHeader = ({ data, posts, authors, tags }) => {
  const intl = useIntl();
  const [filter, setFilter] = useState("todos");
  const [authorSearch, setauthorSearch] = useState([]);
  const [showPosts, setShowPosts] = useState([]);
  const inputSearch = useRef('')

getStories()

useEffect(() => {
  setShowPosts(filterPosts())
}, [authorSearch, filter, posts])

const filterSearchBar = (e) => {
  if (e.target.value === '') {
    setauthorSearch([])
    return null
  }
  const searchValue = e.target.value.toLowerCase()
  const filteredAuthors = authors.filter((author) => {
    return (
      author.name.toLowerCase().includes(searchValue)
    );
  });
  const authorIds = filteredAuthors.map(a => a.uuid)
  setauthorSearch(authorIds)
}

const filterPosts = () => {

  if (inputSearch.current.value !=='' && authorSearch.length === 0){
    return []
  }

  if (authorSearch.length > 0 && filter === 'todos') {
    const postsByAuthor = posts.filter((post) => authorSearch.includes(post.content.author.uuid))
    return postsByAuthor
  }

  if (authorSearch.length > 0 && filter !== 'todos') {
    const postsByAuthorAndFilters = posts.filter((post) => {
      const author = authors.find((author) => author.uuid === post.content.author.uuid);
      return authorSearch.includes(author.uuid) && post.tag_list.includes(filter)
    });
    return postsByAuthorAndFilters
  }

  if (filter !== 'todos') {
    return posts.filter(post => post.tag_list.includes(filter))
  }

  if (filter === 'todos') {
    return posts
  }
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
            <input ref={inputSearch} className="input pl-5 " type="text" placeholder={intl.formatMessage({ id: data.searchBar })} onChange={filterSearchBar} />
            <span className="icon is-right">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p className="is-size-3 has-text-white mb-4">{intl.formatMessage({ id: data.filterText })}</p>
        <button className="m-1 button button-disabled-shadow has-no-background is-rounded is-small is-warning is-outlined is-uppercase is-inline-block" onClick={() => { setFilter('todos') }} >TODOS</button>
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setFilter(tag.name)}
            className="m-1 button button-disabled-shadow has-no-background is-rounded is-small is-warning is-outlined is-uppercase is-inline-block"
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
    <div className='container py-5'>
      <div className='columns is-multiline'>
        {showPosts.length > 0 ?
          showPosts.map((post, index) => <BlogCards post={post} key={index} authors={authors} />):
          <h2>Sin resultados</h2>
        }
      </div>
    </div>
  </section>
)
}

export default BlogHeader