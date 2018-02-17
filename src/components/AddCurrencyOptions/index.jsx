import React, { Component } from 'react';
import {addItem, hasItem} from '../../actions/storage';

class AddCurrencyOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: hasItem(props.index),
            disabledStyle: hasItem(props.index) ? "btn-disabled" : ""
        }
    }
    addToFavourites(index) {
        let self = this;
        return function() {
            addItem(index);

            self.setState({
                isDisabled: hasItem(self.props.index),
                disabledStyle: hasItem(self.props.index) ? "btn-disabled" : ""
            });
        }
    }
    render() {
        const { index } = this.props;

        return (
            <div>
                <button disabled={this.state.isDisabled} onClick={this.addToFavourites(index)} className={`${this.state.disabledStyle} btn btn-outline-warning`}>Favourite</button>
            </div>
        );
    }
}

export default AddCurrencyOptions;
