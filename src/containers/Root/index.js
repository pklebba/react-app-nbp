import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../configureStore';
import App from '../App/index';

let store = configureStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    };
}


