import { StoryblockService } from "../services/StoryblockService";

const storyblokInstance = StoryblockService();

export const getStories = () =>{
    storyblokInstance.get('cdn/stories/',{
        "starts_with": "blog/",
        "version": process.env.STORYBLOK_VERSION,
        "resolve_relations": ["post.author"]
      })
      .then(response => console.log(response.data))
      .catch(error => { 
        console.log(error)
      })
}

export const getStoriesByTags = (tag) =>{
    const options = {
    "starts_with": "blog/",
    "version": process.env.STORYBLOK_VERSION,
    "resolve_relations": ["post.author"],
    "filter_query": {
        "tag_list": {
                "all_in_array":`${tag}`
            }
        }     
    }
    storyblokInstance.get('cdn/stories/',{...options})
      .then(response => response.data)
      .catch(error => { 
        console.log(error)
    })
}

export const getStoriesByAuthor = (authorQuery) =>{
    let authors = [];
    const options1 = {
    "starts_with": "authors/",
    "version": process.env.STORYBLOK_VERSION,
    }
    storyblokInstance.get('cdn/stories/',{...options1})
        .then(response => console.log(response.data))
        .catch(error => { 
        console.log(error)
    })
}