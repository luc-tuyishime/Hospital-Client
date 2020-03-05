import { user as initialState } from '../../store/initialState';

import clearUserStoreReducer from './clearUserStoreReducer';
import createUser from './createUser';


export default (state = initialState, action) => {
    const clearUserStore = clearUserStoreReducer(state, action);
    const create = createUser(state, action);

    return (
        clearUserStore
        || create
        || state
    );
};