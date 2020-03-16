import { hospital as initialState } from '../../store/initialState';

import clearHospitalStoreReducer from './clearHospitalStoreReducer';
import createHospitalReducer from './createHospitalReducer';
import loginHospitalReducer from './loginHospitalReducer';

export default (state = initialState, action) => {
    const clearHospitalStore = clearHospitalStoreReducer(state, action);
    const signup = createHospitalReducer(state, action);
    const login = loginHospitalReducer(state, action);

    return (
        clearHospitalStore
        || signup
        || login
        || state
    );
};