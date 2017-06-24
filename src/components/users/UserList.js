import React, { Component, PropTypes } from 'react';
import User from "./User";

const UserList = ({ users }) => {
    return(
        <ul>
          {users.map(user =>
              <User {...user} key={user.id} />
          )}
        </ul>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
}

export default UserList;