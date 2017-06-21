import { connect } from 'react-redux';
import Search from "./Search";

const mapStateToProps = (state) => {
  return {
    concepts: state.search.results,
    searching: state.search.searching,
    failure:  state.search.failure,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
      onSearchClick: term => dispatch(findConcept(term)),
  }
}

const SearchContainer = connect(
        mapStateToProps,
        mapDispatchToProps
      )(Search);

export default SearchContainer;