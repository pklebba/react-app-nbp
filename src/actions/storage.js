import { request } from './fetch';

export const RECEIVE_STORAGE = 'RECEIVE_STORAGE';

function receiveStorage(json) {
    return {
        type: RECEIVE_STORAGE,
        currencies: json,
    }
}

export function getItems() {
    if (localStorage.getItem('storage')) {
        try {
            return JSON.parse(localStorage.getItem('storage'));
        } catch(e) {
            localStorage.removeItem('storage');
        }
    }

    return [];
}

export default function fetchStorage() {
    return (dispatch) => {

        let items = getItems();
        request().then(function(data) {
            let currencies = data[0].rates;
            console.log(items);
            items.forEach(function (x, y) {
                items[y] = currencies[x];
            });

            dispatch(receiveStorage(items))
        });
    }
}

export function addItem(key) {
    let data = getItems();
    data.push(key);

    return localStorage.setItem('storage', JSON.stringify(data));
}

export function removeItem(key) {
    let data = getItems();
    delete data.splice(key, 1);

    return localStorage.setItem('storage', JSON.stringify(data));
}

export function hasItem(key) {
    let data = getItems();

    return data.includes(key);
}