import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['one Punch', 'Samuria X', 'Dragon ball' ];    
    const [categories, setCategories] = useState( ['one Punch' ]);

    //const handleAdd = () =>{
        //categories.push('michael');
        //console.log(categories);
      //  setCategories([...categories,'HunterX']) ;
       // setCategories(['HunterX',...categories]) ;
   // }
   /*
   { categories.map( (categories) => {
    return <li key={categories}>{categories}</li>
    }) }*/

    return (
        <>
            <h2>Testing</h2>
          
           <AddCategory setCategories = {setCategories}/>
           <hr />
            <ol>
                {
                   
                    categories.map(category =>(
                        <GifGrid 
                        category= {category}
                        key= {category} 
                        />
                    )) 
                }
               
            </ol>
        </>
    )
}

