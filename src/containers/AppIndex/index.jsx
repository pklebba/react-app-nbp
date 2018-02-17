import React, {Component} from 'react';

import CurrencyList from '../../components/CurrencyList/index';

import { connect } from 'react-redux'
import RemoveCurrencyOptions from "../../components/RemoveCurrencyOptions";
import fetchStorage from "../../actions/storage";


class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;

        dispatch(fetchStorage())
    }

    render() {
        const { isFetching, currencies } = this.props;

        return (
            <div className="container my-5">
                <div className="d-flex align-content-center mb-5">
                    <h1 className="mr-2">Followed currencies</h1>
                </div>

                {isFetching && <h2>Loading data...</h2>}
                {!isFetching && currencies.length === 0 && <h2>Currencies not found</h2>}
                {currencies.length > 0 &&
                    <div>
                        <CurrencyList dispatch={this.props.dispatch} currencies={currencies} options={RemoveCurrencyOptions}/>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state || {
        isFetching: true,
        lastUpdate: "Unknown",
        currencies: []
    }
}

export default connect(mapStateToProps)(App);
