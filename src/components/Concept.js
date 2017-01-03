import React, { Component, PropTypes } from 'react';

export default function Concept({id,terms}) {
    return(<li>{id + ": " + terms[0].value} </li>);
}

