import React from 'react'
import './style.scss'
import { Link } from 'gatsby'
import { dateParse } from '../../utils/DateParse'
import { textClamp } from '../../utils/TextClamp'

const BlogCards = ({ post }) => {

  return (
    <div className='column is-one-third'>
      <Link to={`/${post.full_slug}`}>
        <div className="card">
          <div className="card-image">
            <figure className='image is-16by9 backgroundImage' style={{ backgroundImage: post.content.banner.filename ? `url(${post.content.banner.filename})` : `url(https://democraciaenred.org/der-share.png)` }} >
            </figure>
          </div>
          <div className="card-content">
            <div className="is-flex is-align-center mb-3">
              <div className="media-content">
                {post.content.author.name}
              </div>
              {dateParse(post.published_at)}
            </div>
            <div className="content p-0">
              <p className="has-text-weight-bold">{post.content.title}</p>
              <p>{textClamp(post.content.description, 120, 120)}</p>
              {post.tag_list.length > 0 ? post.tag_list.map((tag, index) => (
                <span key={index} className="tag is-rounded has-text-black has-background-grey-lighter px-2 mx-1 my-1">
                  {tag}
                </span>
              )) : ''}
              <br />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCards