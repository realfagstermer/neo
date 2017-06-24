import { connect } from 'react-redux';
import UserList from "./UserList";
import { findConcept } from "../../actions/actions";

const mapStateToProps = (state) => {
  return {
      users: state.users.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
      onUserClick: id => dispatch(editUser(id)),
  }
}

const UserListContainer = connect(
        mapStateToProps,
        mapDispatchToProps
      )(UserList);

export default UserListContainer;