import React from 'react'
import './style.scss'

const BlogCards = ({ post, authors }) => {

  const textClamp = (text) => {
    if (text.length > 200) {
      return text.slice(0, 120) +'...'
    }
    return text
  }

  const dateParse = (date) => {
      const newDate = new Date(Date.parse(date));
      if (!isNaN(newDate) && newDate) {
      const parsedDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
      return <time className='has-text-grey-light'>{parsedDate}</time>
    }
    return ''
  }
  
  const findAuthor = () => {
    if (authors.length > 0) {
      const author = authors.find((author) => author.uuid === post.content.author)
      return (
        <p>{author.name}</p>
      )
    }
    return ''
  }
  
  return (
    <>
      <div className='column is-one-quarter'>
        <div className="card">
          <div className="card-image">
            <figure className='image is-16by9 backgroundImage' style={{ backgroundImage: post.content.banner.filename ? `url(${post.content.banner.filename})` : `url(https://democraciaenred.org/der-share.png)` }} >
              {/* <img src={post.content.banner.filename ? post.content.banner.filename : 'https://democraciaenred.org/der-share.png'} alt={post.name} /> */}
            </figure>
          </div>
          <div className="card-content">
            <div className="is-flex is-align-center mb-3">
              <div className="media-content">
                {findAuthor()}
              </div>
              {dateParse(post.published_at)}
            </div>
            <div className="content p-0">
              <p className="has-text-weight-bold">{post.content.title}</p>
              <p>{textClamp(post.content.description)}</p>
              {post.tag_list.length > 0 ? post.tag_list.map((tag, index) => (
                <span key={index} className="tag is-rounded has-text-black has-background-grey-lighter px-2 mx-1 my-1">
                  {tag}
                </span>
              )) : ''}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCards