import { parent as initialState } from '../../store/initialState';

import clearParentStoreReducer from './clearParentStoreReducer';
import createParent from './createParentReducer';


export default (state = initialState, action) => {
    const clearUserStore = clearParentStoreReducer(state, action);
    const create = createParent(state, action);

    return (
        clearUserStore
        || create
        || state
    );
};