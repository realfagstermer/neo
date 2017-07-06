import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Main from "./Main";
import { findConcept } from "../actions/actions";

function mapStateToProps(state) {
  return {
    message: state.display.message,
    me: state.users.me,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
  }
}

const MainContainer = withRouter(connect(
        mapStateToProps,
        mapDispatchToProps
      )(Main));

export default MainContainer;