import { StoryblockService } from "../services/StoryblockService";

const storyblokInstance = StoryblockService();

export const getStories = async () => {
    return await storyblokInstance.get('cdn/stories/', {
        "starts_with": "blog/",
        "version": process.env.STORYBLOK_VERSION,
        "resolve_relations": ["post.author"]
    })
        .then(response => response.data.stories)
        .catch(error => {
            console.log(error)
        })
}
export const getAuthors = async () => {

    return await storyblokInstance.get('cdn/stories/', {
        "starts_with": "authors/",
        "version": process.env.STORYBLOK_VERSION,
    })
        .then(response => {
            console.log(response.data.stories)
            return response.data.stories
        })
        .catch(error => {
            console.log(error)
        })
}
export const getTags = async () => {
    return await storyblokInstance.get(`cdn/tags`, {
        version: process.env.STORYBLOK_VERSION,
        starts_with: 'blog/'
    })
        .then((res) => res.data.tags)
        .catch((err) => {
            console.log(err)
        })

}
export const getStoryByFullSlug = async (fullSlug) => {
    return await storyblokInstance.get(`cdn/stories/${fullSlug}`, {
        "version": process.env.STORYBLOK_VERSION,
        "resolve_relations": ["post.author"]
    })
        .then((response) => { return response.data.story })
        .catch((error) => { console.log(error); })
}
export const getFeaturedPosts = async (tags, uid, page) => {
    const options = {
        "starts_with": "blog/",
        "version": process.env.STORYBLOK_VERSION,
        "resolve_relations": ["post.author"],
        "page": page,
        "per_page": 3,
        "with_tag": tags,
        "filter_query": {
            "_uid": {
                "not_in": uid
            }
        }
    }

    return await storyblokInstance.get('cdn/stories/', { ...options })
        .then(response => {
            return response.data.stories
        })
        .catch(error => {
            console.log(error)
        })
}

export const getSuggestedPosts = async (uid, page) => {
    const options = {
        "starts_with": "blog/",
        "version": process.env.STORYBLOK_VERSION,
        "page": page,
        "per_page": 20,
        "filter_query": {
            "_uid": {
                "not_in": uid
            }
        }
    }

    return await storyblokInstance.get('cdn/stories/', { ...options })
        .then(response => {
            console.log(response)
            return response.data.stories
        })
        .catch(error => {
            console.log(error)
        })
}

///functions yet to be implemented
export const getStoriesByTags = async (tags) => {
    const options = {
        "starts_with": "blog/",
        "version": process.env.STORYBLOK_VERSION,
        "resolve_relations": ["post.author"],
        "with_tag": tags
    }

    return await storyblokInstance.get('cdn/stories/', { ...options })
        .then(response => {
            console.log(response.data.stories)
            return response.data.stories
        })
        .catch(error => {
            console.log(error)
        })
}
export const getCombinedFilterStories = async (query, tags) => {

    if (tags.includes("todos")) { tags = '*' }
    if (query === '') { query = '*' }

    const options = {
        "starts_with": "blog/",
        "version": process.env.STORYBLOK_VERSION,
        "resolve_relations": ["post.author"],
        "with_tag": tags,
        "filter_query": {
            "post.author": {
                "name": {
                    "like": query
                }
            }
        }
    }
    return await storyblokInstance.get('cdn/stories/', { ...options, headers: { 'Access-Control-Allow-Origin': '*', "Accept": "application/json", "Content-Type": "application/json", "Access-Control-Allow-Headers": "Accept"
} })
        .then(response => {
            const a = response
            const b = a.json()
            console.log(b)
            return response.data.stories
        })
        .catch(error => {
            console.log(error)
        })
}