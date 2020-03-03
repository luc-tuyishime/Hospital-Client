import { hospital as initialState } from '../../store/initialState';

import clearHospitalStoreReducer from './clearHospitalStoreReducer';
import createHospitalReducer from './createHospitalReducer';


export default (state = initialState, action) => {
    const clearHospitalStore = clearHospitalStoreReducer(state, action);
    const signup = createHospitalReducer(state, action);

    return (
        clearHospitalStore
        || signup
        || state
    );
};