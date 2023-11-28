import React from "react";

const SearchBox = ({onSearchChange}) => {
    return(
        <div className="p2 mb3">
        <input 
        className="pa3 ba b—green bg-lightest-blue"
        type="search" 
        placeholder="Find robots"
        onChange={onSearchChange}
        />
        </div>
    )
}

export default SearchBox;