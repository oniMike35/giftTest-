export const getGifs = async(category) => {
    //const [count, setcount] = useState(0);^^^```
           // const url  = 'https://api.giphy.com/v1/gifs/search?api_key=bJi4C46TLyZPimQmMqw5MHgEF42Q7D9j&q=Rick and morty&limit=10';
        const url  = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=bJi4C46TLyZPimQmMqw5MHgEF42Q7D9j&`;
        const resp =  await fetch(url);
        const {data} =  await resp.json();
        console.log(data);
        const gift = data.map(img => {
            return {
                id: img.id  ,
                title:img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gift;
}

