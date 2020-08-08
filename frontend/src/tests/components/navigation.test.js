import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';

import Navigation from '../../navigation';

jest.mock('@auth0/auth0-react');

afterEach(cleanup);

test('Only one element should be visible when user is unauthenticated',
async () => {
  useAuth0.mockReturnValue({
    isAuthenticated: false,
  });
  
  render(<Navigation/>)

  const oowlishChallengeText = 'Oowlish Challenge';
  
  expect(screen.queryByText(oowlishChallengeText)).not.toBeNull();

  const logoutText = 'Logout';
  expect(screen.queryByText(logoutText)).toBeNull();

  const homeText = 'Home';
  expect(screen.queryByText(homeText)).toBeNull();

  const citiesText = 'Cities';
  expect(screen.queryByText(citiesText)).toBeNull();
});


test('All elements should be visible when user is authenticated',
async () => {
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user: {
      given_name: "Testing Tester"
    }
  });
  
  render(<Navigation/>)

  const oowlishChallengeText = 'Oowlish Challenge';
  
  expect(screen.queryByText(oowlishChallengeText)).not.toBeNull();

  const logoutText = 'Logout';
  expect(screen.queryByText(logoutText)).not.toBeNull();

  const homeText = 'Home';
  expect(screen.queryByText(homeText)).not.toBeNull();

  const citiesText = 'Cities';
  expect(screen.queryByText(citiesText)).not.toBeNull();
});

