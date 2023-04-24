import React, { useState } from 'react'
import data from "../../../content/blog.json"
import { useIntl } from 'gatsby-plugin-intl';
import BlogCards from '../blog-cards'

const SortButton = ({ posts }) => {
  const intl = useIntl();
  const [sortCriteria, setSortCriteria] = useState('')
  const [sortOrders, setSortOrders] = useState({
    name: 'asc',
    author: 'asc',
    date: 'asc',
  })

  function handleSort(criteria) {
    if (criteria === sortCriteria) {
      // if you click on the same sort criterion, change the address
      setSortOrders(prevOrders => ({
        ...prevOrders,
        [criteria]: prevOrders[criteria] === 'asc' ? 'desc' : 'asc'
      }))
    } else {
      // if a new sorting criterion is clicked, set the new criterion and the ascending direction
      setSortCriteria(criteria)
      setSortOrders(prevOrders => ({
        ...prevOrders,
        [criteria]: 'asc'
      }))
    }
  }

  const sortedDataPosts = [...posts].sort((a, b) => {
    const direction = sortOrders[sortCriteria] === 'asc' ? 1 : -1
    switch (sortCriteria) {
      case 'name':
        return direction * a.name.localeCompare(b.name)
      case 'author':
        return direction * a.content.author.name.localeCompare(b.content.author.name)
      case 'date':
        return direction * (new Date(a.published_at) - new Date(b.published_at))
      default:
        return 0
    }
  })

  // for toggle the bulma dropdown button
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="">
      <div className={`dropdown` + (toggle === false ? "" : " is-active")}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => handleToggle()} style={{ backgroundColor: '#ff000000', color: '#fff', border: 'none', borderBottom: '1px solid #D7D7D7', boxShadow: 'none', borderRadius: 0 }} >
            <span>{intl.formatMessage({ id: data.filterButton })}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" style={{ color: '#F7EC86' }}></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a className={`dropdown-item ${sortCriteria === 'name' ? 'is-active' : ''}`} onClick={() => handleSort('name')} style={{ userSelect: 'none' }}>
              Ordenar por nombre {sortOrders.name === 'asc' ? 'descendente' : 'ascendente'}
            </a>
            <a className={`dropdown-item ${sortCriteria === 'author' ? 'is-active' : ''}`} onClick={() => handleSort('author')} style={{ userSelect: 'none' }}>
              Ordenar por autor {sortOrders.author === 'asc' ? 'descendente' : 'ascendente'}
            </a>
            <a className={`dropdown-item ${sortCriteria === 'date' ? 'is-active' : ''}`} onClick={() => handleSort('date')} style={{ userSelect: 'none' }}>
              Ordenar por fecha {sortOrders.date === 'asc' ? 'descendente' : 'ascendente'}
            </a>
          </div>
        </div>
      </div>
      <div className='columns is-multiline'>
        {sortedDataPosts.map((post, index) => (
          <BlogCards key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default SortButton