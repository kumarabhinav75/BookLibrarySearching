//action types
export const SEARCH_BY_AUTHOR = 'SEARCH_BY_AUTHOR';
export const SEARCH_BY_BOOKNAME = 'SEARCH_BY_BOOKNAME';
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';


//action creators
export const searchByAuthor = () => ({
  type: SEARCH_BY_AUTHOR,
})

export const searchByBookName = () => ({
  type: SEARCH_BY_BOOKNAME,
})

export const searchInputChange = (searchInput) => ({
  type: SEARCH_INPUT_CHANGE,
  payload: searchInput,
})