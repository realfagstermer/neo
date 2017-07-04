import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { boundPutUser, boundGetUser } from "../actions/users";

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
                <Link to= {`/users/${this.props.user.id}/edit`}>Edit</Link>
            </div>
        );
// }
    }
    
    static propTypes= {
        user: PropTypes.object.isRequired,
    }
}

export class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.setField = this.setField.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.reset = this.reset.bind(this);
        
        // For clearing the form
        this.emptyState = {
            id: "",
            name: '',
            username: '',
            created: new Date().toISOString(),
            access: "read",
        };
        
        this.state = Object.assign({}, this.emptyState);
    }

    onSubmitClick(event) {
        event.preventDefault();
        // update or new user?
        if (this.state.id) {
            boundPutUser(this.state)
        } else {
            boundUser(this.state);
        }
    }    

    // clear previous state
    reset() {
// this.replaceState(Object.assign({}, this.emptyState));
// this.setState({all:undefined,old:undefined,keys:undefined});
        this.state = Object.assign({}, this.emptyState);
        this.forceUpdate();
    }

    componentWillMount() {
        boundGetUser(this.props.match.params.id);
    }
     
    componentWillReceiveProps(nextProps) {
        // get correct user
        if (nextProps.location !== this.props.location) {
            boundGetUser(nextProps.match.params.id);
        }
        this.setState(this.props.user);
    }
    

    isFormValid() {
        return (this.state.name && this.state.username);
    }
    
    setField(field) {
        return event => this.setState({ [field]: event.target.value });
    }


    render() {
        console.log("Edit for:",this.props.user);
        return(
            <div className="UserEdit">
            <form>
                <div>
                    <label>
                        <span>Name</span>
                        <input type="text" value={this.state.name} onChange={this.setField("name")} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Username</span>
                        <input type="text" value={this.state.username} onChange={this.setField("username")} />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Access</span>
                        <select value={this.state.access} onChange={this.setField("access")}>
                            <option value="read">read</option>
                            <option value="classify">classify</option>
                            <option value="admin">admin</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button disabled={!this.isFormValid()} id="submit" onClick={this.onSubmitClick}>Submit</button>
                    <Link to= {`/users/${this.props.user.id}`}>Cancel</Link>
                </div>
            </form>
            </div>
        );
    }
    
    static propTypes= {
        user: PropTypes.object.isRequired,
    }
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
