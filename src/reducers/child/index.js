import { child as initialState } from '../../store/initialState';

import clearChildStoreReducer from './clearChildStoreReducer';
import createChildReducer from './createChildReducer';


export default (state = initialState, action) => {
    const clearChildStore = clearChildStoreReducer(state, action);
    const create = createChildReducer(state, action);

    return (
        clearChildStore
        || create
        || state
    );
};