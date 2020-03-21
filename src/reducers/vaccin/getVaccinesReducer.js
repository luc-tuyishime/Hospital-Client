import { vaccinActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case vaccinActionsTypes.GET_VACCINES_START:
            return {
                ...state,
                getVaccins: { ...state.getVaccins, message: '', loading: true, errors: {} }
            };
        case vaccinActionsTypes.GET_VACCINES_END:
            return {
                ...state,
                getVaccins: { ...state.getVaccins, loading: false }
            };
        case vaccinActionsTypes.GET_VACCINES_SUCCESS:
            return {
                ...state,
                vaccines: payload.vaccines,
                getVaccins: { loading: false, message: payload.message, errors: {} }
            };
        case vaccinActionsTypes.GET_VACCINES_FAILURE:
            return {
                ...state,
                getVaccins: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
