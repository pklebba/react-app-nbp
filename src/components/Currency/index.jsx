import React, { Component } from 'react';

class Currency extends Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{ data.currency }</td>
                <td>{ data.mid } { data.code }</td>
                <td>todo</td>
            </tr>
        );
    }
}

export default Currency;
