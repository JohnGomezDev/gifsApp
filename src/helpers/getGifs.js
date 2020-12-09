export const getGifs = async(category) => {

    const apiKey = 'tBHV0kdmfzViz5dg5h85R2C9R6F9g00r';
    const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=7&q=`;

    const response = await fetch(`${baseUrl}${encodeURI(category)}`);
    const { data } = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}
