export const INITIALIZE_STORE_BOOKS = 'INITIALIZE_STORE_BOOKS';

//action creator
export const initializeStoreWithBooks = (initialBooksData) => ({
  type: INITIALIZE_STORE_BOOKS,
  payload: initialBooksData,
});

