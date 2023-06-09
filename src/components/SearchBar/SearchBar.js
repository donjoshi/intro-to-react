import React from 'react'
import './SearchBar.css'
import { useState } from 'react'



const SearchBar=(props)=>
{

    const [searchValue,setSearchValue]=useState('') 

    const handleInputChange=(event)=>{
        setSearchValue(event.target.value)
    }

    const handleClearClick=()=>{
        setSearchValue('')
    }
 

    const shouldDisplayButton=searchValue.length>0
    


    console.log(shouldDisplayButton)

    const filteredProducts=props.products.filter((product)=>{
            return product.includes(searchValue)
        })


    return (
    <div>
        <input type="text"  value={searchValue} onChange={handleInputChange}/>
        <br></br>

        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

        
        <ul>
        {filteredProducts.map((product)=>{
             return <li key={product}>{product}</li>    
         })}
        </ul>
        


    </div>
)
}

export default SearchBar