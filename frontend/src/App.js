import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import CategoryLanding from './pages/CategoryLanding';
import Home from './pages/home';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/categories" exact>
            <CategoryLanding />
          </Route>
          <Route path="/books/:category/:name" exact>
            <ProductDetail/>
          </Route>
          <Route path="/books/:category" exact>
            <ProductListing />
          </Route>
          <Redirect to='/home' />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
