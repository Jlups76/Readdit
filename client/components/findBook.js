/* eslint-disable react/button-has-type */
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {Link} from 'react-router-dom'
import {getAllBooks} from '../store/book'
const bookcovers = require('bookcovers')

const findBook = () => {
  const dispatch = useDispatch()

  const Books = useSelector(state => state.books)

  const [singleBook, setSingleBook] = useState(
    Books[Math.floor(Math.random() * Books.length)]
  )
  const [bookcover, setBookCover] = useState()

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  useEffect(() => {})

  const findSingleBook = () => {
    setSingleBook(Books[Math.floor(Math.random() * Books.length)])
    bookcovers.withIsbn(singleBook.isbn).then(results => console.log(results))
  }

  console.log(singleBook)
  return (
    <div>
      <h2>Press the Button to Find a Book!!</h2>
      <button onClick={findSingleBook}>Click here!</button>
      {singleBook ? (
        <div key={singleBook.bookId} id="singleBook">
          {console.log(singleBook)}
          <a />
          <h3>Title:{singleBook.title}</h3>
          <h4>Author:{singleBook.authors}</h4>
          <h4>Page Count:{singleBook.numPages}</h4>
          {/* <h4>Price:{singleBook.price / 100}</h4>  */}
          {/* find price through API */}
          {/* <h4>
                  Current Inventory:{singleBook.quantity
                    ? singleBook.quantity
                    : 'Out of stock'}
                </h4> */}
        </div>
      ) : (
        <h2>No Books</h2>
      )}
    </div>
  )
}

export default findBook
