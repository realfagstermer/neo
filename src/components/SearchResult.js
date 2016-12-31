import { connect } from 'react-redux';
import ConceptList from "./ConceptList";

const mapStateToProps = (state) => {
  return {
    results: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const SearchResult = connect(
        mapStateToProps,
        mapDispatchToProps
      )(ConceptList);

export default SearchResult;