import { parent as initialState } from '../../store/initialState';

import clearParentStoreReducer from './clearParentStoreReducer';
import createParent from './createParentReducer';
import getParent from './getParentReducer';


export default (state = initialState, action) => {
    const clearUserStore = clearParentStoreReducer(state, action);
    const create = createParent(state, action);
    const get = getParent(state, action);

    return (
        clearUserStore
        || create
        || get
        || state
    );
};