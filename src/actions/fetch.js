import fetch from 'cross-fetch'

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

function requestCurrencies() {
    return {
        type: REQUEST_CURRENCIES
    }
}

function receiveCurrencies(json) {
    return {
        type: RECEIVE_CURRENCIES,
        currencies: json,
    }
}

export function request() {
    return fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
        .then(response => response.json());
}

export default function fetchCurrencies() {
    return (dispatch) => {
        dispatch( requestCurrencies() );

        return request().then(currencies => dispatch(receiveCurrencies(currencies[0].rates)));
    }
}