import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Concept from "./Concept";

const ConceptList = ({ concepts }) => {
    return(
        <ul>
          {concepts.map(concept =>
              <Concept {...concept} key={concept.id} />
          )}
        </ul>
    );
}

ConceptList.propTypes = {
    concepts: PropTypes.array.isRequired,
}

export default ConceptList;