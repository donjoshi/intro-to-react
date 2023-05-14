import React from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'



const App=()=>{    
    return(    
        <div>     
            <SearchBar 
                products={[
                    'tooth paste',
                    'tooth brush',
                    'mouth wash',
                    'dental floss',
                    'mouth guard',
                ]}/>
            <SearchBar 
                products={[
                    'bike rack',
                    'mountain bike',
                    'soccer ball',
                    
                ]}/>
            
        </div>
    )
}

export default App