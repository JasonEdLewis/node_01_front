import React, { Component } from 'react';
import './App.css';
import SignIn from './signIn';
import Home from "./Home";
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  state = {
    user: {
      id: "",
      name: "",
      email: "",
      entries: 0,


    }
  }

  updateUser = (user) => {
    this.setState({ user })
  }
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">

            <Route exact path="/"
              render={routerProps => <SignIn {...routerProps} />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register"
              render={routerProps => <Register {...routerProps} updateUser={this.updateUser} />} />

          </div>
        </Switch>
      </Router>
    );

  }

}

export default App;
