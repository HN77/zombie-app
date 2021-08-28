import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            <input onChange={searchChange} type="search" placeholder="Search Monster..." className="outline-0 mb3 br4 pa3 ba b--green bg-lightest-blue" />
        </div>
    )
}

export default SearchBox
