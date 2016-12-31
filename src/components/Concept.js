import React, { Component, PropTypes } from 'react';

export default function Concept({conceptId,terms}) {
    return(<li>{conceptId+ ": "+ terms[0].lexicalValue} </li>);
}

