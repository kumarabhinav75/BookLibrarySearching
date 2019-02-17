import {connect} from 'react-redux';
import CardGrid from '../../Component/CardGrid/CardGrid.component';
import {initializeStoreWithBooks} from '../../Redux/Actions/bookdata.action';

const getFilteredBooks = (booksData, searchFilter, searchInput) => {
  console.log('BOOKSDATA', booksData);
  // console.log('SEARCHINPUT1', searchInput, booksData.length);

  if(booksData.length > 0 && searchInput !== ''){
    console.log('CARDGRID1',booksData);
    const filteredBooks = booksData.filter((book) => {
      console.log('INSIDE 111', book['Name']); 
      const bookName = book[searchFilter];
      if(bookName.indexOf(searchInput) === -1){
        return false;
      }
      else return true;
    });
    return filteredBooks;
    }
    console.log('CARDGRID2',booksData);
}

const mapStateToProps = (state) => ({
  booksData: getFilteredBooks(state.booksData, state.searchFilter, state.searchInput),
});

const mapDispatchToProps = (dispatch) => ({
  initializeStoreWithBooks: (initialBooksData) => dispatch(initializeStoreWithBooks(initialBooksData))
})

const CardGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardGrid);

export default CardGridContainer;
