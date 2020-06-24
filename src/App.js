import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './containers/Scroll-to-top';
import Home from './pages/Home';
import Contact from './components/Contact';
import RouteDispatcher from './containers/RouteDispatcher';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contacto' component={Contact} />
            <Route exact path='/:route' component={RouteDispatcher} />
          </Switch>
        </ScrollToTop>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
