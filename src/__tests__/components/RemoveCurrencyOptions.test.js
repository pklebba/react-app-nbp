import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import RemoveCurrencyOptions from '../../components/RemoveCurrencyOptions'

test('Remove Currency Options button toggles propertly', () => {
    const fakeDispatcher = jest.fn();

    const wrapper = mount(
        <RemoveCurrencyOptions dispatch={fakeDispatcher} index="0" />
    );

    const btn = wrapper.find('.btn');
    btn.simulate('click');

    expect(fakeDispatcher.mock.calls.length).toBe(1);
});