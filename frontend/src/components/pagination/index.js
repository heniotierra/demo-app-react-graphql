import React from 'react';
import styled from 'styled-components';

/**
 * Componenet for simple pagination 
 */
const Pagination = ({
  offset,
  prevPage,
  nextPage,
  totalCount,
  paginationLimit,
}) => <PaginationStyle>
  <button
    className="prev-btn"
    onClick={() => prevPage()}
    disabled={offset < paginationLimit}>
    Previous
  </button>
  <button
    className="next-btn"
    onClick={() => nextPage()}
    disabled={offset + paginationLimit >= totalCount}>
    Next
  </button>
</PaginationStyle>;

export default Pagination;

const PaginationStyle = styled.div`
  margin-top: 10px;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  button {
    font-size: 16px;
    width: 100px;
    height: 36px;
  }
  .prev-btn {
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
  }
  .next-btn {
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  }
`;