import { vaccin as initialState } from '../../store/initialState';

import clearVaccinStoreReducer from './clearVaccinStoreReducer';
import createVaccinReducer from './createVaccinReducer';
import getVaccinesReducer from './getVaccinesReducer';


export default (state = initialState, action) => {
    const clearVaccinStore = clearVaccinStoreReducer(state, action);
    const create = createVaccinReducer(state, action);
    const getAllVaccines = getVaccinesReducer(state, action);

    return (
        clearVaccinStore
        || create
        || getAllVaccines
        || state
    );
};