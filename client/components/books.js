import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllBooks} from '../store/book'

const books = props => {
  console.log(props, 'book props')
  const dispatch = useDispatch()
  // const Books = useSelector(state => state.books)
  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  return (
    <div>
      <h2>All Books</h2>
      {props.books.length ? (
        <div>
          {props.books.map(book => {
            console.log(book, 'single Book')
            return (
              <div key={book.bookID} id="singleBook">
                <h3>Title:{book.title}</h3>
                <h4>Author:{book.authors}</h4>
                {/* <h4>Price:{book.price / 100}</h4> */}
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
