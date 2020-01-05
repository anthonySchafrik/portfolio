import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import WorkPage from './Components/WorkPage';
import ResumePage from './Components/ResumePage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/resume" component={ResumePage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
