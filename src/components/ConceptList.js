import React, { Component, PropTypes } from 'react';
import Concept from "./Concept";

const ConceptList = ({ concepts }) => {
    return(
        <ul>
          {concepts.map(concept =>
              <Concept {...concept} key={concept.conceptId} />
          )}
        </ul>
    );
}

ConceptList.propTypes = {
    concepts: PropTypes.array.isRequired,
}

export default ConceptList;