import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, render, screen, act } from '@testing-library/react';
import Cities from '../../pages/Cities';
import api from '../../services/api';

jest.mock('../../services/api');

const citiesCustomersCounts = {
  "data": {
    "data": {
      "getCustomersCountsByCity": [{
        "city": "Warner, NH",
        "customers_total": 20
      },
      {
        "city": "East Natchitoches, PA",
        "customers_total": 20
      },
      {
        "city": "Lyon, WV",
        "customers_total": 20
      }]
    }
  }
};

afterEach(cleanup);

test('Renders 3 cities cards with customers counts', async () => {
  api.post.mockResolvedValueOnce(citiesCustomersCounts);

  await act(async () => {
    render(<Cities />);
  });

  const warnerText = 'Warner, NH';
  expect(screen.queryByText(warnerText)).not.toBeNull();

  const natchitochesText = 'East Natchitoches, PA';
  expect(screen.queryByText(natchitochesText)).not.toBeNull();

  const lyonText = 'Lyon, WV';
  expect(screen.queryByText(lyonText)).not.toBeNull();
});
