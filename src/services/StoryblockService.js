import StoryblokClient from "storyblok-js-client";

export const StoryblockService = () => {

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