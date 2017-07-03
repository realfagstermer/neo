import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { boundGetUser } from "../actions/users";

export function UserLink({id,username,name,created,createdBy}) {
    return <Link to= {`/users/${id}`}>{name}</Link>;
}

export class UserDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        boundGetUser(this.props.match.params.id);
    }
     
    componentWillReceiveProps(nextProps) {
        // get correct user
        if (nextProps.location !== this.props.location) {
            boundGetUser(nextProps.match.params.id);
        }
    }

    render() {
        console.log("details for:",this.props.user);
// if (!this.props.user.name) {
// return null;
// } else {
        return(
            <div className="UserDetails">
                <dl>
                    <dt>Username:</dt>
                    <dd>{this.props.user.username}</dd>
                    <dt>Name:</dt>
                    <dd>{this.props.user.name}</dd>
                    <dt>Created:</dt>
                    <dd>{this.props.user.created}</dd>
                    <dt>Access:</dt>
                    <dd>{this.props.user.access}</dd>
                </dl>
            </div>
        );
// }
    }
    
    static propTypes= {
        user: PropTypes.object.isRequired,
    }
}

export function UserEdit({id,username,name,created,createdBy}) {
    // TODO
    return(<li>{name}</li>);
}

export const UserList = ({ users }) => {
    return(
        <ul>
          {users.map(user =>
              <li key={user.id}><UserLink {...user} /></li>
          )}
        </ul>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
}
