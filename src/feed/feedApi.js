
const FEED_URL = 'https://api.reddit.com/r/news/top';

export function retrieveFeed(){
    return fetch(FEED_URL).then((resp) => {
        // todo check for errors in the future

        return resp.json().then(feed => {
            const stories = feed.data.children;

            return stories.map(story => ({
                thumbnail: story.data.thumbnail,
                title: story.data.title,
                url: story.data.url
            }));
        });
    });
};