import React, { Fragment } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({category}) => {
        
   // const [images, setimages] = useState([]);
   /* useEffect(  () => {
        getGifs(category).then( imgs =>setimages(imgs))
    }, [category])*/

    const {data:images, loading} = useFetchGifs(category);
    console.log(images);
    console.log(loading);
    


      /*  useEffect(  () => {
            GifGrid();
        }, [])
    */
        /*
        const GifGrid = async() => {
        //const [count, setcount] = useState(0);^^^```
           // const url  = 'https://api.giphy.com/v1/gifs/search?api_key=bJi4C46TLyZPimQmMqw5MHgEF42Q7D9j&q=Rick and morty&limit=10';
           const url  = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=bJi4C46TLyZPimQmMqw5MHgEF42Q7D9j&`;
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
            setimages(gift);
            console.log(gift);
        }*/

  
    
    
    return (
        <Fragment>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className='card-grid'>
                    {
                        images.map( img => (
                            <GiftGridItem 
                                key={img.id}
                                {...img} />
                            ))
                    }
            </div>
        </Fragment>
    )
}
