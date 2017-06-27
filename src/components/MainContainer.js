import { connect } from 'react-redux';
import Main from "./Main";
import { findConcept } from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    message: state.display.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
  }
}

const MainContainer = connect(
        mapStateToProps,
        mapDispatchToProps
      )(Main);

export default MainContainer;