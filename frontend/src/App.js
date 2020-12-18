import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/home';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import NavLinks from './shared/components/Navigation/NavLinks';
import SideDrawer from './shared/components/Navigation/SideDrawer';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainNavigation/>
        <SideDrawer>
          <NavLinks/>
        </SideDrawer>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
        <Redirect to="/home" />
      </Router>
    </React.Fragment>
  );
}

export default App;
