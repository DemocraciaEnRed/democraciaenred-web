import React, { useState } from 'react'
import { dateParse } from '../../utils/DateParse'
import BlogCards from '../blog-cards'

const SortButton = ({ posts, authors }) => {
  const [sortCriteria, setSortCriteria] = useState('name')
  const [sortOrders, setSortOrders] = useState({
    name: 'asc',
    author: 'asc',
    date: 'asc',
  })

  console.log(posts)

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
      case 'date':
        return direction * (new Date(a.published_at) - new Date(b.published_at))
      default:
        return 0
    }
  })

  const sortedDataAuthors = [...authors].sort((a, b) => {
    const direction = sortOrders[sortCriteria] === 'asc' ? 1 : -1
    if (sortCriteria === 'author') return direction * a.name.localeCompare(b.author)
  })

  // for toggle the bulma dropdown button
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="is-flex is-justify-content-flex-end">
      <div className={`dropdown` + (toggle === false ? "" : " is-active")}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => handleToggle()} style={{ backgroundColor: '#ff000000', color: '#fff', border: 'none', borderBottom: '1px solid #D7D7D7', boxShadow: 'none', borderRadius: 0 }} >
            <span>Ordenar por</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" style={{ color: '#F7EC86' }}></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <hr class="dropdown-divider" />
            <a className={`dropdown-item ${sortCriteria === 'name' ? 'is-active' : ''}`} onClick={() => handleSort('name')} style={{ userSelect: 'none' }}>
              Ordenar por nombre {sortOrders.name === 'asc' ? 'ascendente' : 'descendente'}
            </a>
            <a className={`dropdown-item ${sortCriteria === 'author' ? 'is-active' : ''}`} onClick={() => handleSort('author')} style={{ userSelect: 'none' }}>
              Ordenar por autor {sortOrders.author === 'asc' ? 'ascendente' : 'descendente'}
            </a>
            <a className={`dropdown-item ${sortCriteria === 'date' ? 'is-active' : ''}`} onClick={() => handleSort('date')} style={{ userSelect: 'none' }}>
              Ordenar por fecha {sortOrders.date === 'asc' ? 'ascendente' : 'descendente'}
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SortButton