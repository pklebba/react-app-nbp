import React, { Component } from 'react';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: null
        };
    }
    render() {
        const { data, Options, index, dispatch } = this.props;
        return (
            <tr style={{"display": this.state.disabled}}>
                <td>{ data.currency }</td>
                <td>{ data.mid } { data.code }</td>
                <td>
                    <Options dispatch={dispatch} index={index} />
                </td>
            </tr>
        );
    }
}

export default Currency;
