import StoryblokClient from "storyblok-js-client";

const StoryblockService = () => {

    if (typeof StoryblokInstance !== "object") {
        const StoryblokInstance = new StoryblokClient({
            accessToken: process.env.STORYBLOK_TOKEN,
            region: process.env.STORYBLOK_REGION
        });
        return StoryblokInstance;
    } else {
        return StoryblokInstance;
    }
}

export default StoryblockService;