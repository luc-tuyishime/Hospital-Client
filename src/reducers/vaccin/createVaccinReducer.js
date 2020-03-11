import { vaccinActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case vaccinActionsTypes.CREATE_VACCIN_START:
            return {
                ...state,
                createVaccin: { ...state.createVaccin, message: '', loading: true, errors: {} }
            };
        case vaccinActionsTypes.CREATE_VACCIN_END:
            return {
                ...state,
                createVaccin: { ...state.createVaccin, loading: false }
            };
        case vaccinActionsTypes.CREATE_VACCIN_SUCCESS:
            return {
                ...state,
                createVaccin: { loading: false, message: payload.message, errors: {} }
            };
        case vaccinActionsTypes.CREATE_VACCIN_FAILURE:
            return {
                ...state,
                createVaccin: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};


