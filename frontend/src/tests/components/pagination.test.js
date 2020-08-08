import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Pagination from '../../components/pagination';

afterEach(cleanup);

test('Pagination Previous button is disabled when user enter the page', () => {
  const { getByText } = render(
    <Pagination
      offset={0}
      prevPage={() => { }}
      nextPage={() => { }}
      totalCount={20}
      paginationLimit={12}
    />
  );

  expect(getByText(/Next/i).closest('button')).not.toHaveAttribute('disabled');
  expect(getByText(/Previous/i).closest('button')).toHaveAttribute('disabled');
});

test(
  ('Pagination Next button should be disabled when user ' +
    'views the last page, and Previous button shouldn\'t be disabled'),
  () => {
    const { getByText } = render(
      <Pagination
        offset={20}
        prevPage={() => { }}
        nextPage={() => { }}
        totalCount={20}
        paginationLimit={12}
      />
    );

    expect(getByText(/Next/i).closest('button')).toHaveAttribute('disabled');
    expect(getByText(/Previous/i)
      .closest('button'))
      .not
      .toHaveAttribute('disabled');
  });
  