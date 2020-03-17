import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './App.css';
import routes from './routes';

function App({ isAuth }) {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => <Route
            key={route.name}
            exact
            path={route.path}
            protected={route.protected}
            role={route.role}
            render={
              props => {
                if (route.protected && !isAuth) {
                  return <Redirect to="/login-hospital" />;
                }
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
          />
          )
        }
      </Switch>
    </Router>
  );
}

App.propTypes = { isAuth: PropTypes.bool, role: PropTypes.string };

export const mapStateToProps = ({
  user: { profile: { role } },
  hospital: {
    isAuth
  }
}) => ({ isAuth, role });

export default connect(mapStateToProps)(App);
