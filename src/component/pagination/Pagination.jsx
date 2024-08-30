import React from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.css'
export default function Pagination({handlePageChange,pageCount}) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      activeClassName='active'
      containerClassName='paginatoin'
    />
  )
}
