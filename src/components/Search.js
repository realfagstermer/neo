import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../components/SearchBox'
import ConceptList from '../components/ConceptList'

export default function Search({ concepts, searching, failure, onSearchClick }) {
    return(
        <div className="Search">
            <SearchBox searching={searching} failure={failure} onSearchClick={onSearchClick} />
            <ConceptList concepts = {concepts} />
        </div>
    );
}

Search.propTypes = {
    concepts: PropTypes.array.isRequired,
    searching: PropTypes.bool.isRequired,
    failure: PropTypes.bool.isRequired,
    onSearchClick: PropTypes.func.isRequired,
}
