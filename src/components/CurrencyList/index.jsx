import React, { Component } from 'react';

import Currency from '../Currency';

class CurrencyList extends Component {
    render() {
        const { currencies, options, dispatch } = this.props;
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
                        <Currency dispatch={dispatch} data={x} index={y} key={y} Options={options}/>
                    )}
                </tbody>
            </table>
        );
    }
}

export default CurrencyList;
