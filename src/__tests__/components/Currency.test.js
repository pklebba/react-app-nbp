import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import Currency from "../../components/Currency";

const fakeData = {
        currency: 'Euro',
        mid: '3.850',
        code: 'EUR'
    };

const wrapper = mount(
    <Currency data={fakeData} index="0" />
);

test('Currency component has valid data', () => {
    expect(wrapper.props().data).toBe(fakeData);
});

test('Currency component renders valid row', () => {
    let name = wrapper.find('td.currency');

    expect(name.text()).toBe(fakeData.currency);
});