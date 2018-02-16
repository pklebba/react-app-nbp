import React, {Component} from 'react';

import CurrencyList from '../../components/CurrencyList/index';
import fetchCurrencies from "../../actions/fetch";

import { connect } from 'react-redux'


class App extends Component {
    constructor(props) {
        super(props)

        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchCurrencies())
    }

    handleRefreshClick() {
        const {dispatch} = this.props;

        dispatch(fetchCurrencies())
    }

    render() {
        const { isFetching, currencies, lastUpdate } = this.props

        return (
            <div className="container my-5">
                <div className="d-flex align-content-center mb-5">
                    <h1 className="mr-2">NBP Api currencies</h1>
                    <span className="mr-auto text-muted py-0">Last update: { "Unknown" && lastUpdate }</span>
                    <button className="btn btn-primary btn-sm" onClick={this.handleRefreshClick}>Refresh</button>
                </div>

                {isFetching && <h2>Loading data...</h2>}
                {!isFetching && currencies.length === 0 && <h2>Currencies not found</h2>}
                {currencies.length > 0 &&
                    <div>
                        <CurrencyList currencies={currencies}/>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state[1] || {
        isFetching: true,
        lastUpdate: "Unknown",
        currencies: []
    }
}

export default connect(mapStateToProps)(App);
