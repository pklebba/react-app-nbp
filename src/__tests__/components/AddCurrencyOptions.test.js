import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import AddCurrencyOptions from '../../components/AddCurrencyOptions'

test('Add Currency Options button toggles propertly', () => {
    const wrapper = mount(
        <AddCurrencyOptions index="0" />
    );

    expect(wrapper.state().isDisabled).toBe(false);

    const btn = wrapper.find('.btn');
    btn.simulate('click');
    expect(wrapper.state().isDisabled).toBe(true);
});