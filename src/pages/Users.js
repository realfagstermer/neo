import React, { Component, PropTypes } from 'react';
import UserListContainer from "../components/users/UserListContainer";
    
export default function UsersPage(props) {
    return (
        <div className="UsersPage">
            <UserListContainer />
        </div>
    );
}
