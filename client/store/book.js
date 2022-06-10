import axios from 'axios'

const FETCH_BOOKS = 'FETCH_BOOKS'
const DELETE_BOOK = 'DELETE_BOOK'
const UPDATE_BOOK = 'UPDATE BOOK'
const CREATE_BOOK = 'CREATE_BOOK'

function getBooks(books) {
  return {
    type: FETCH_BOOKS,
    books
  }
}

function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    book
  }
}

function updateBook(book) {
  return {
    type: UPDATE_BOOK,
    book
  }
}

function createBook(book) {
  return {
    type: CREATE_BOOK,
    book
  }
}

export function getAllBooks() {
  return async dispatch => {
    try {
      const {data: books} = await axios.get(`/api/books`)
      dispatch(getBooks(books))
    } catch (err) {
      console.log(err)
    }
  }
}

export function deleteSingleBook(bookId) {
  return async dispatch => {
    try {
      const {date: book} = await axios.delete(`/api/books/${bookId}`)
      dispatch(deleteBook(book))
    } catch (err) {
      console.log(err)
    }
  }
}

export function updateSingleBook(bookId, payload) {
  return async dispatch => {
    try {
      const {data: book} = await axios.put(`/api/books/${bookId}`, payload)
      dispatch(updateBook(book))
    } catch (err) {
      console.log(err)
    }
  }
}

export function createSingleBook(payload) {
  return async dispatch => {
    try {
      const {date: book} = await axios.post(`/api/books`, payload)
      dispatch(createBook(book))
    } catch (err) {
      console.log(err)
    }
  }
}

const defaultState = []

export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...state, ...action.books]
    default:
      return state
  }
}
