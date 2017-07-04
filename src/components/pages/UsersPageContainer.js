import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
  return {
      users: state.users.list,
      show: state.users.show,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
  }
}

const UsersPageContainer = withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
      )(UsersPage));

export default UsersPageContainer;