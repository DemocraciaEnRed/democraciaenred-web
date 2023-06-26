import StoryblokClient from "storyblok-js-client";

const isBrowser = typeof Headers !== "undefined"

export const StoryblockService = () => {
    // check if class Headers() from the Web API is available
    if(isBrowser) {
        const StoryblokInstance = new StoryblokClient({
            accessToken: process.env.STORYBLOK_TOKEN,
            region: process.env.STORYBLOK_REGION
        });
        return StoryblokInstance;
    } else {
        return null;
    }

    
    // if (typeof StoryblokInstance !== "object") {
    // } else {
    //     return StoryblokInstance;
    // }
}