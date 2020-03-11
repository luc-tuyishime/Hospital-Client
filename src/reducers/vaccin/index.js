import { vaccin as initialState } from '../../store/initialState';

import clearVaccinStoreReducer from './clearVaccinStoreReducer';
import createVaccinReducer from './createVaccinReducer';


export default (state = initialState, action) => {
    const clearVaccinStore = clearVaccinStoreReducer(state, action);
    const create = createVaccinReducer(state, action);

    return (
        clearVaccinStore
        || create
        || state
    );
};