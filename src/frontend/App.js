import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './containers/Scroll-to-top';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./components/SobreMi'));
const Contact = React.lazy(() => import('./components/Contact'));
const DetPodcast = React.lazy(() => import('./components/DetPodcast'));
const RouteDispatcher = React.lazy(() => import('./containers/RouteDispatcher'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/sobre-mi' component={About} />
              <Route exact path='/contacto' component={Contact} />
              <Route exact path='/:route' component={RouteDispatcher} />
              <Route exact path='/podcast/:route' component={DetPodcast} />
            </Switch>
          </ScrollToTop>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
