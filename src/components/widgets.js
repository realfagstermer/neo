import React, { Component } from 'react';
import { startEdit, handleDelete } from "../actions/Actions";

export function EditLink({id}) {
    return (<ImageLink alt="edit" onClick={() => startEdit(id)} image="images/edit.png" />);
}

export function Link({onClick, children}) {
    return(
        <a href="#" onClick={event => {
            event.preventDefault();
            onClick && onClick();
        }}>
            {children}
        </a>
    );
}

export function Expander({expanded,onClick}) {
    return (
        <Link onClick={onClick}>
            <img src={expanded ? "images/open.gif" : "images/closed.gif"} />
        </Link>
    );
}

export function ImageLink({onClick, alt, image}) {
    return (
        <Link onClick={onClick} >
            <img src={image} alt={alt} />
        </Link>
    );
}