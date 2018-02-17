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
                <td className="currency">{ data.currency }</td>
                <td className="mid">{ data.mid } { data.code }</td>
                <td className="options">
                    {Options &&
                        <Options dispatch={dispatch} index={index}/>
                    }
                </td>
            </tr>
        );
    }
}

export default Currency;
