import React, { Component, PropTypes } from 'react';
import Concept from "./Concept";

export function ConceptList({ concepts }) {
    return(
        <ul>
          {concepts.map(concept =>
              <Concept {...concept} />
          )}
        </ul>
    );
}

ConceptList.propTypes = {
    concepts: PropTypes.array.isRequired,
}