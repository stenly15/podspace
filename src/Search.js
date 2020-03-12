import React from 'react';

const Search = ({ placeholder, handleChange }) => {
    return (
        <div className="header-container">
            <input
                type="text"
                name="search"
                placeholder={placeholder}
                onChange={handleChange}
                style={{ flex: 1, height: 20 }}
            />

            <input
                type="submit"
                value="Search"
                style={{
                    border: '0.15em solid #11e2d4',
                    backgroundColor: '#282727',
                    color: '#11e2d4',
                    marginLeft: '1em',
                    height: '26px'
                }} />
        </div>
    )
}

export default Search;