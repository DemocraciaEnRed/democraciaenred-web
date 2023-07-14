import React, { useEffect, useState } from 'react'
import { getFeaturedPosts, getSuggestedPosts, test } from '../../../controllers/StoryblokController'
import BlogCards from '../../blog-cards'

const FeaturedPosts = ({ tags, uidPost }) => {
    const [posts, setPosts] = useState([])
    const [suggested, setSuggested] = useState([])

    useEffect(() => {
        getFeaturedPosts(tags, uidPost, 1)
            .then(res => {
                setPosts(res)
            })
            .catch(err => console.log(err))

            getSuggestedPosts(uidPost, 1)
            .then(res => {
                console.log(res)
                const randomize = res.sort((a, b) => 0.5 - Math.random())
                const finalArray = randomize.slice(0, 3)
                setSuggested(finalArray)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container mt-6'>
            <h3 className='is-size-3 has-text-centered mb-5'>Articulos recomendados</h3>
            <div className='columns is-multiline'>
                {posts.length > 0 ?
                    posts.map((post, index) => <BlogCards post={post} key={index} />) :
                    suggested.map((s, index) => <BlogCards post={s} key={index} />)
                }
            </div>
        </div>
    )
}

export default FeaturedPosts