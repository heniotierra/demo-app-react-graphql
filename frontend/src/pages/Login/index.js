import React, { useLayoutEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { history } from '../../navigation';
import { LoginWrapper, LoginButton, Auth0Img } from './style';
import auth0 from '../../assets/imgs/auth0.png';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  useLayoutEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return <LoginWrapper>
    <h3>To continue,</h3>
    <LoginButton onClick={() => loginWithRedirect()}>Log in with Auth0</LoginButton>
    <Auth0Img src={auth0} alt="auth0 login" />
  </LoginWrapper>
};

export default Login;