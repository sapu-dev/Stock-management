import React, {Component} from "react";
import "../sass/main.scss";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Oders from "./Oders";
import Statisticals from "./Statistics";
class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <ul class="navbar-nav navigate-container">
                <li class="nav-item active ">
                  <Link class="nav-link" to="/">
                    <h4 class="nav-list">Home</h4>
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/oders">
                    <h4> Oders </h4>
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/stats">
                    <h4> Invoice </h4>
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    <h4> Categories </h4>
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/oders">
                    <h4> Statisticals </h4>
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/stats">
                    <h4> Templates </h4>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/stats">
                <Statisticals />
              </Route>
              <Route path="/oders">
                <Oders />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Layout;
