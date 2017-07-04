import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserList, UserDetails, UserEdit} from "../users";
    
export default function UsersPage({users, show}) {
    return (
        <div className="UsersPage">
            <UserList users = {users} />
            <Switch>
                <Route exact path="/users/:id" render= {
                    defaultProps => <UserDetails user = {show} {...defaultProps} />
                } ></Route>
                <Route path="/users/:id/edit" render={
                    defaultProps => <UserEdit user = {show} {...defaultProps} />
                } ></Route>
            </Switch>
            
        </div>
    );
}
