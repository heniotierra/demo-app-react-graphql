import React, { useState } from 'react';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { createBrowserHistory } from 'history';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cities from '../pages/Cities';
import CustomersByCity from '../pages/CustomersByCity';
import Customer from '../pages/Customer';
import { NavigationStyle } from './style';
import menuIcon from '../assets/imgs/menu.svg';

export const history = createBrowserHistory();

/**
 * Component responsible for routes, 
 * also aggregaring navigation bar and left-side menu
 */
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { logout, isAuthenticated } = useAuth0();

  return <Router history={history} forceRefresh>
    <NavigationStyle>
      <nav className="nav-bar">
        <div className="menu-btn">
          {
            isAuthenticated && (
              <img
                src={menuIcon}
                alt="menu button"
                onClick={() => setShowMenu(!showMenu)}/>           
            )
          }
        </div>
        <div className="app-name">
          <span>Oowlish Challenge</span>
        </div>
        <div className="logout-btn" >
        {
          isAuthenticated && (
            <div onClick={() => logout()}>Logout</div>
          )
        }
        </div>
      </nav>
      {
        isAuthenticated && (
          <div className="left-side-menu-wrapper">
            <div
              className={`
                left-side-menu ${showMenu? 'animation-show':'animation-hide'}
              `}
              >
              <div>
                <Link to="/" onClick={() => setShowMenu(true)}>Home</Link>
              </div>
              <div>
                <Link to="/cities" onClick={() => setShowMenu(false)}>Cities</Link>
              </div>
            </div>
          </div>
        )
      }
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/cities">
          <Cities />
        </PrivateRoute>
        <PrivateRoute path="/city-customers/:city">
          <CustomersByCity />
        </PrivateRoute>
        <PrivateRoute path="/customer/:id">
          <Customer />
        </PrivateRoute>
      </Switch>
    </NavigationStyle>
  </Router>
};

// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default Navigation;