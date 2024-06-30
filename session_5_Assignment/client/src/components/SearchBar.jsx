import React from 'react';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for products..." required />
            <button onClick={() => alert('Searching has been completed')}>Search</button>
        </div>
    );
}

export default SearchBar;
