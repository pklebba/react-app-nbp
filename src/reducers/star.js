import {
    STAR_CURRENCY
} from "../actions/star";

const initialState = {
    currencies: []
}

export default function currenciesReducer(state = initialState, action) {
    switch (action.type) {
        case STAR_CURRENCY:
            return Object.assign({}, state, {
                currencies: state.map((currencies, index) => {
                    if (index === action.index) {
                        return Object.assign({}, currencies, {
                            starred: !currencies.starred
                        })
                    }
                    return currencies
                })
            })
    }

    return state;
}