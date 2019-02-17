import {connect} from 'react-redux';
import {searchByAuthor,searchByBookName,searchInputChange} from '../../Redux/Actions/search.action';
import Search from '../../Component/Search/Search.component';

const mapDispatchToProps = (dispatch) => ({
  handleSearchByAuthor: () => dispatch(searchByAuthor()),
  handleSearchByBookName: () => dispatch(searchByBookName()),
  handleSearchInputChange: (searchInput) => dispatch(searchInputChange(searchInput))
})

const mapStateToProps = (state) => ({
  activeFilter : state.searchFilter,
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;