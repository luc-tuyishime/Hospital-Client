import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import App from '../../App';

let component = '';

describe('<App />', () => {
    test('renders without crashing', () => {
        component = mount(<Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>);

        expect(component).toHaveLength(1);
    });
});
