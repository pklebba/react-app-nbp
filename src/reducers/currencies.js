import {
    RECEIVE_CURRENCIES,
    REQUEST_CURRENCIES
} from "../actions/fetch";

function currencies(
    state = {
        isFetching: false,
        currencies: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_CURRENCIES:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_CURRENCIES:
            return Object.assign({}, state, {
                isFetching: false,
                currencies: action.currencies,
                lastUpdate: new Date().toLocaleTimeString()
            })
    }

    return state;
}


export default currencies