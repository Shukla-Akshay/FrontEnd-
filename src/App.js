import React from 'react';
import SpaceX from './SpaceX';
import Info from './Info';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <SpaceX {...props} />} />
      <Route exact path='/:InfoId' render={(props) => <Info {...props} />} />
    </Switch>
  );
}

export default App;
