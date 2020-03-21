import { child as initialState } from '../../store/initialState';

import clearChildStoreReducer from './clearChildStoreReducer';
import createChildReducer from './createChildReducer';
import getChildrenReducer from './getChildrenReducer';
import getVaccinatedChildrenReducer from './getVaccinatedChildrenReducer';

export default (state = initialState, action) => {
    const clearChildStore = clearChildStoreReducer(state, action);
    const create = createChildReducer(state, action);
    const get = getChildrenReducer(state, action);
    const getVaccinatedChildren = getVaccinatedChildrenReducer(state, action);

    return (
        clearChildStore
        || create
        || get
        || getVaccinatedChildren
        || state
    );
};