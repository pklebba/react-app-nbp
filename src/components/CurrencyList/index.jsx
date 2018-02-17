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
                    {currencies.map((data, index) =>
                        <Currency dispatch={dispatch} data={data} index={index} key={index} Options={options}/>
                    )}
                </tbody>
            </table>
        );
    }
}

export default CurrencyList;
