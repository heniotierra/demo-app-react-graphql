import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, render, screen, act } from '@testing-library/react';
import Customer from '../../pages/Customer';
import api from '../../services/api';

jest.mock('../../services/api');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

const customer = {
  data: {
    data: {
      getCustomerByID: {
        "id": "1",
        "first_name": "Laura",
        "last_name": "Richards",
        "email": "lrichards0@reverbnation.com",
        "gender": "Female",
        "company": "Meezzy",
        "city": "Warner, NH",
        "title": "Biostatistician III",
        "lat": "43.2798",
        "long": "-71.81422"
      }
    }
  }
};

afterEach(cleanup);

test('Renders customer', async () => {
  api.post.mockResolvedValueOnce(customer);

  await act(async () => {
    render(<Customer />);
  });

  const lauraText = 'Laura Richards';
  expect(screen.queryByText(lauraText)).not.toBeNull();
});
