import React, { Component } from 'react';
import UserList from "../components/users/UserList";
    
export default function UsersPage({users, show}) {
    return (
        <div className="UsersPage">
            <UserList users = {users} />
            
        </div>
    );
}
