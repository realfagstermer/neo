import React, { Component, PropTypes } from 'react';
import SearchBox from '../components/SearchBox'
import ConceptList from '../components/ConceptList'

const Search = ({ concepts, searching, failure }) => {
    return(
        <div className="Search">
            <SearchBox searching={searching} failure={failure} />
            <ConceptList concepts = {concepts} />
        </div>
    );
}

Search.propTypes = {
    concepts: PropTypes.array.isRequired,
    searching: PropTypes.bool.isRequired,
    failure: PropTypes.bool.isRequired,
}

export default Search;