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
    onClick={() => prevPage()}
    disabled={offset < paginationLimit}>
    Previous
  </button>
  <button
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
    width: 100px;
  }
`;