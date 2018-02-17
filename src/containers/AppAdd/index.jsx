import React, {Component} from 'react';

import CurrencyList from '../../components/CurrencyList';
import AddCurrencyOptions from '../../components/AddCurrencyOptions';

import fetchCurrencies from "../../actions/fetch";

import { connect } from 'react-redux'


class AppAdd extends Component {
    constructor(props) {
        super(props);

        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCurrencies())
    }

    handleRefreshClick() {
        const {dispatch} = this.props;

        dispatch(fetchCurrencies())
    }

    render() {
        const { isFetching, currencies } = this.props;

        return (
            <div className="container my-5">
                <div className="d-flex align-content-center mb-5">
                    <h1 className="mr-2">Add new currency</h1>
                </div>

                {isFetching && <h2>Loading data...</h2>}
                {!isFetching && currencies.length === 0 && <h2>Currencies not found</h2>}
                {currencies.length > 0 &&
                    <div>
                        <CurrencyList options={AddCurrencyOptions} currencies={currencies}/>
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

export default connect(mapStateToProps)(AppAdd);
