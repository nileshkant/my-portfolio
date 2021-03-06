import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Homepage from './components/Homepage';

export default (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={Homepage}
      />
      {/* <Route path="*" component={notFound} /> */}
    </Switch>
  </Router>
);
