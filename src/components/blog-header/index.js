import React, { useState, useEffect, useRef } from 'react'
import { useIntl } from 'gatsby-plugin-intl';
import BlogCards from '../blog-cards';
import SortButton from '../blog-sort-button';
import "./style.scss"

const BlogHeader = ({ data, posts, tags }) => {
  const intl = useIntl();
  const [filter, setFilter] = useState([]);
  const [authorSearch, setAuthorSearch] = useState('');
  const [showPosts, setShowPosts] = useState([]);
  const [selectedButton, setSelectedButton] = useState([]);

  const handleSelectedButton = (index) => {
    if (selectedButton.includes(index)) {
      setSelectedButton(selectedButton.filter((item) => item !== index))
    } else {
      setSelectedButton([...selectedButton, index])
    }
  }

  const handleTags = (tag) => {

    if (!filter.includes(tag)) {
      setFilter([...filter, tag])
      return null;
    }

    setFilter(filter.filter(ogTag => ogTag !== tag))
  }

  useEffect(() => { 
    const postsData = filterPosts()
    console.log(postsData);
    setShowPosts(postsData)
   }, [authorSearch, filter, posts])

  const filterSearchBar = (e) => {
    if (e.target.value === '') {
      setAuthorSearch('')
      return null
    }
    const searchValue = e.target.value.toLowerCase()
    setAuthorSearch(searchValue)
  }

  const filterPosts = () => {

    if (authorSearch !== '') {

      let reg = new RegExp(authorSearch.split(" ").join(".*?[ ]"), 'ig');

      if (filter.length === 0) {
        const postsByAuthor = posts.filter(post => post.content.author.name.match(reg))
        return postsByAuthor
      }

      if (filter.length !== 0) {
        const postsByAuthor = posts.filter(post => post.content.author.name.match(reg))
        const postsByAuthorAndFilters = (
          postsByAuthor.filter((post) =>
            post.tag_list.length > 0 ?
              post.tag_list.some((el1) =>
                filter.some((el2 => el1 === el2))) :
              [])
        )
        return postsByAuthorAndFilters
      }

    }

    if (filter.length !== 0) {
      const byFilter = posts.filter((post) => {
        if (post.tag_list.length > 0) {
          const filter1 = post.tag_list.some((el1) => {
            const filter2 = filter.some((el2 => el1 === el2))
            // console.log(filter2)
            return filter2
          })
          // console.log(filter1);
          return filter1;
        }
      })
      // console.log(byFilter);
      return byFilter;
    }

    if (filter.length === 0) { return posts }
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
          <button className='m-1 button button-disabled-shadow has-no-background is-rounded is-small is-warning is-outlined is-uppercase is-inline-block' onClick={() => [setFilter([]), setSelectedButton([])]} >TODOS</button>
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => [handleTags(tag.name), handleSelectedButton(index)]}
              className={`m-1 button button-disabled-shadow has-no-background is-rounded is-small is-warning is-outlined is-uppercase is-inline-block ${selectedButton.includes(index) ? 'activeButton' : ''}`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
      <div className='container py-5'>
        {showPosts.length > 0 ?<SortButton posts={showPosts} /> : <h1 className="has-text-centered">No hay posts para tu busqueda</h1>}
      </div>
    </section>
  )
}

export default BlogHeader