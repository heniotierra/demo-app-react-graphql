import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import Navigation from './navigation';
import { Auth0ClientID, Auth0ClientDomain } from './constants';

import './App.css';

function App() {
  return (
    <Auth0Provider
      domain={Auth0ClientDomain}
      clientId={Auth0ClientID}
      redirectUri={window.location.origin}
    >
      <Navigation />
    </Auth0Provider>
  );
}

export default App;
