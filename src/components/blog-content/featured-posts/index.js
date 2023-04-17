import React, { useEffect, useState } from 'react'
import { getStoriesByTags, getAuthors, getFeaturedPosts } from '../../../controllers/StoryblokController'
import BlogCards from '../../blog-cards'

const FeaturedPosts = ({ tags, uidPost }) => {
    const [posts, setPosts] = useState([])
    const [authors, setAuthors] = useState([])
    useEffect(() => {

        getFeaturedPosts(tags, uidPost, 1)
            .then(res => {
                console.log(res)
                setPosts(res)
            })
            .catch(err => console.log(err))

        getAuthors()
            .then(res => setAuthors(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container mt-6'>
            <h3 className='is-size-3 has-text-centered mb-5'>Articulos relacionados</h3>
            <div className='columns is-multiline'>
                {posts.length > 0 ?
                    posts.map((post, index) => <BlogCards post={post} key={index} authors={authors} />) :
                    <h2>Sin resultados</h2>
                }
            </div>
        </div>
    )
}

export default FeaturedPosts