import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => <Route
            key={route.name}
            exact
            path={route.path}
            render={
              props => {
                document.title = route.name
                return (
                  <route.component
                    location={props.location}
                    history={props.history}
                    match={props.match}
                  />
                )
              }
            }
          />)
        }
      </Switch>
    </Router>
  );
}

export default App;
