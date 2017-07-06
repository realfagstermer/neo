import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UsersPage from "./UsersPage";

function mapStateToProps(state) {
  return {
      users: state.users.list,
      show: state.users.show,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
  }
}

const UsersPageContainer = withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
      )(UsersPage));

export default UsersPageContainer;