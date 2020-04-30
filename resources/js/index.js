import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AppRoot from './components/AppRoot.jsx';
import Topics from './components/Topics.jsx';
import About from './components/About.jsx';
import TaskEdit from './components/TaskEdit.jsx';

if (document.getElementById('root')) {
    ReactDOM.render(
    <Router>
        <div>
            <nav className="navbar navbar-dark bg-secondary p-0">
                <div className="container">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item mr-3">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/topics" className="nav-link">Topics</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" component={AppRoot} />
                <Route exact path="/about" component={About} />
                <Route exact path="/topics" component={Topics} />
                <Route exact path="/:id/edit" component={TaskEdit} />
                <AppRoot />
            </Switch>
        </div>
    </Router>

    , document.getElementById('root'));
}
