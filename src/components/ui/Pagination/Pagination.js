import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPage } from 'store/slices/filtersSlice';
import styles from './Pagination.module.css';

export function PaginatedItems({ pageCount }) {
  const dispatch = useDispatch();
  const handlePageClick = (event) => {
    dispatch(setPage(event.selected));
  };

  return (
    <ReactPaginate
      className={styles.paginate}
      activeClassName={styles.active_Page}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      previousLabel="<"
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
  );
}
