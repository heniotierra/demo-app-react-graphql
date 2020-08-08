import React, { useLayoutEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { history } from '../../navigation';
import { PageWrapper } from '../../components/wrappers';
const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  
  useLayoutEffect(() => {
    setTimeout(() => {
      if (!isAuthenticated) {
        history.push('/login');
      }
    }, 1500);
  }, [isAuthenticated]);

  return <PageWrapper>
    {
      isAuthenticated && <h1>Welcome, {user.given_name}!</h1>
    }
  </PageWrapper>
};

export default Home;