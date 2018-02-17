import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import configureStore from '../../configureStore';
import AppIndex from '../AppIndex';
import AppAdd from '../AppAdd';

let store = configureStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <a className="navbar-brand">NBP API</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/add">Add</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <Route exact path="/" component={AppIndex} />
                        <Route path="/add" component={AppAdd} />
                    </div>
                </Router>
            </Provider>
        )
    };
}


