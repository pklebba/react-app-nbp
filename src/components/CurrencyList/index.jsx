import React, { Component } from 'react';

import Currency from '../Currency';

class CurrencyList extends Component {
    render() {
        const { currencies } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Mid</td>
                        <td>Options</td>
                    </tr>
                </thead>
                <tbody>
                    {currencies.map((x, y) =>
                        <Currency data={x} index={y}/>
                    )}
                </tbody>
            </table>
        );
    }
}

export default CurrencyList;
