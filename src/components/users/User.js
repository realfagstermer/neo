import React, { Component, PropTypes } from 'react';

export default function User({id,username,name,created,createdBy}) {
    return(<li>{name} </li>);
}

