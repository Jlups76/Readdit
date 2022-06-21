import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import {Link} from 'react-router-dom'
import {getAllBooks} from '../store/book'

const books = () => {
  const dispatch = useDispatch()
  const Books = useSelector(state => state.books)
  useEffect(() => {
    dispatch(getAllBooks())
  }, [])
  return (
    <div>
      <h2>All Books</h2>
      {Books.length ? (
        <div>
          {Books.map(book => {
            return (
              <div key={book.bookId} id="singleBook">
                <h3>Title:{book.bookName}</h3>
                <h4>Author:{book.authorName}</h4>
                <h4>Price:{book.price / 100}</h4>
                <h4>
                  Current Inventory:{book.quantity
                    ? book.quantity
                    : 'Out of stock'}
                </h4>
              </div>
            )
          })}
        </div>
      ) : (
        <h2>No Books</h2>
      )}
    </div>
  )
}

export default books
