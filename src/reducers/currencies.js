import {
    RECEIVE_CURRENCIES,
    REQUEST_CURRENCIES
} from "../actions/fetch";
import {RECEIVE_STORAGE} from "../actions/storage";

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
            });
        case RECEIVE_CURRENCIES:
        case RECEIVE_STORAGE:
            return Object.assign({}, state, {
                isFetching: false,
                currencies: action.currencies
            });
        default:
            return state;
    }
}


export default currencies