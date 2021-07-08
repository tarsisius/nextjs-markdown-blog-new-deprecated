import Link from 'next/link'

export default function Pagination({ currentPage, numPages, categoryName }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = categoryName ? `/category/${categoryName}/page/${currentPage - 1}` : `/page/${currentPage - 1}`
  const nextPage = categoryName ? `/category/${categoryName}/page/${currentPage + 1}` : `/page/${currentPage + 1}`
  if (numPages === 1) return null

  return (
    <ul className="pagination">
      {!isFirst && (
        <Link href={prevPage} passHref>
          <li className="pagination-button">
            Previous
          </li>
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link href={`/page/${i + 1}`} key={i} passHref>
          <li className={'pagination-button' + ((i + 1) === currentPage ? '_active' : '') + ' number'} >
            {i + 1}
          </li>
        </Link>
      ))}
      {!isLast && (
        <Link href={nextPage} passHref>
          <li className="pagination-button">
            Next
          </li>
        </Link>
      )}
    </ul>
  )
}