import React, { Component } from 'react';
import {removeItem} from '../../actions/storage';
import fetchStorage from '../../actions/storage';

class RemoveCurrencyOptions extends Component {
    removeFromFavourites(index, dispatch) {
        return function() {
            removeItem(index);
            dispatch(fetchStorage())
        }
    }
    render() {
        const { index, dispatch } = this.props;

        return (
            <div>
                <button onClick={this.removeFromFavourites(index, dispatch)} className="btn btn-outline-danger">Delete</button>
            </div>
        );
    }
}

export default RemoveCurrencyOptions;
