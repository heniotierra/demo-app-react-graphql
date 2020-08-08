import React from "react";
import { cleanup, render, screen, act, fireEvent } from '@testing-library/react';
import api from '../../services/api';
import CustomersByCity from '../../pages/CustomersByCity';

jest.mock('../../services/api');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    city: 'East Natchitoches, PA',
  }),
}));

const customersByCityInitial = {
  "data": {
    "data": {
      "getCustomersByCity": {
        "items": [
          {
            "id": "102",
            "first_name": "Larry",
            "last_name": "Duncan",
            "email": "lduncan2t@ustream.tv",
            "company": "Flashpoint"
          },
          {
            "id": "252",
            "first_name": "Alan",
            "last_name": "Diaz",
            "email": "adiaz6z@adobe.com",
            "company": "Wikizz"
          },
          {
            "id": "502",
            "first_name": "Helen",
            "last_name": "Kennedy",
            "email": "hkennedydx@parallels.com",
            "company": "Photobug"
          },
        ],
        "total_count": 20
      }
    }
  }
};

const customersByCityNext = {
  "data": {
    "data": {
      "getCustomersByCity": {
        "items": [
          {
            "id": "103",
            "first_name": "Luna",
            "last_name": "Duncan",
            "email": "lduncan2t@usream.bv",
            "company": "Flashpond"
          },
          {
            "id": "253",
            "first_name": "Margaret",
            "last_name": "Diaz",
            "email": "mdiaz6z@above.com",
            "company": "Wibizz"
          },
          {
            "id": "503",
            "first_name": "Paul",
            "last_name": "Kennedy",
            "email": "pkennedydx@barallels.com",
            "company": "Photobus"
          },
        ],
        "total_count": 20
      }
    }
  }
};

afterEach(cleanup);

it("Renders 3 initial customers cards in city, then hit Next, then Previous",
async () => {
  api.post.mockResolvedValueOnce(customersByCityInitial);

  await act(async () => {
    render(<CustomersByCity />);
  });

  const larryText = 'Larry Duncan';
  expect(screen.queryByText(larryText)).not.toBeNull();

  const helenText = 'Helen Kennedy';
  expect(screen.queryByText(helenText)).not.toBeNull();

  const alanText = 'Alan Diaz';
  expect(screen.queryByText(alanText)).not.toBeNull();

  api.post.mockResolvedValueOnce(customersByCityNext);

  await act(async () => {
    fireEvent.click(screen.getByText(/next/i));
  });

  const lunaText = 'Luna Duncan';
  expect(screen.queryByText(lunaText)).not.toBeNull();

  const paulText = 'Paul Kennedy';
  expect(screen.queryByText(paulText)).not.toBeNull();

  const margaretText = 'Margaret Diaz';
  expect(screen.queryByText(margaretText)).not.toBeNull();


  api.post.mockResolvedValueOnce(customersByCityInitial);

  await act(async () => {
    fireEvent.click(screen.getByText(/previous/i));
  });

  expect(screen.queryByText(larryText)).not.toBeNull();

  expect(screen.queryByText(helenText)).not.toBeNull();

  expect(screen.queryByText(alanText)).not.toBeNull();
});
