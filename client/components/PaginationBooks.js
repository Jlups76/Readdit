import React, {useEffect, useState, useRef} from 'react'
import {useSelector} from 'react-redux'
import {Books} from './index'
import ReactPaginate from 'react-paginate'

const Pagination = props => {
  const books = useSelector(state => state.books)
  const [pageCount, setPageCount] = useState(1)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const prevProps = useRef()

  useEffect(
    () => {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(books.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(books.length / itemsPerPage))
    },
    [books]
  )

  function handlePageClick(event) {
    const newOffset = event.selected * itemsPerPage
    setCurrentItems(books.slice(newOffset, newOffset + itemsPerPage))
    setItemOffset(newOffset)
  }

  return (
    <div>
      <Books books={currentItems} />
      <div id="react-paginate">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default Pagination
