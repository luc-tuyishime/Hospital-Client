import { hospitalActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case hospitalActionsTypes.SIGNUP_HOSPITAL_START:
            return {
                ...state,
                signup: { ...state.signup, message: '', loading: true, errors: {} }
            };
        case hospitalActionsTypes.SIGNUP_HOSPITAL_END:
            return {
                ...state,
                signup: { ...state.signup, loading: false }
            };
        case hospitalActionsTypes.SIGNUP_HOSPITAL_SUCCESS:
            localStorage.hospital = JSON.stringify(payload.hospital);
            return {
                ...state,
                signup: { loading: false, message: payload.message, errors: {} }
            };
        case hospitalActionsTypes.SIGNUP_HOSPITAL_FAILURE:
            return {
                ...state,
                signup: { loading: false, message: '', errors: { ...payload.errors } }
            };
        default:
            return null;
    }
};
