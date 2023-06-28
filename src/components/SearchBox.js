import React from "react";

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className = 'pa2 '>
            <input  
            className = 'ba b--greeen bg-lightest-blue  ' 
            type = 'saerch' 
            placeholder = 'search robots'
            onChange = {searchChange} />
        </div>
        
    )
}

export default SearchBox