import React, { Component } from 'react';
import {addItem, hasItem} from '../../actions/storage';

class AddCurrencyOptions extends Component {
    addToFavourites(index) {
        let self = this;
        return function() {
            addItem(index);
            self.forceUpdate();
        }
    }
    render() {
        const { index } = this.props;

        const isDisabled = hasItem(index);
        const disabledStyle = (isDisabled) ? "btn-disabled" : "";

        return (
            <div>
                <button disabled={isDisabled} onClick={this.addToFavourites(index)} className={`${disabledStyle} btn btn-outline-warning`}>Favourite</button>
            </div>
        );
    }
}

export default AddCurrencyOptions;
