import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// Implement fake localstorage
global.localStorage = {
    params: {},

    setItem: function(key, val) {
        this.params[key] = val;
    },
    getItem: function(key) {
        return this.params[key]
    }
}