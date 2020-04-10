import { hospitalActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case hospitalActionsTypes.LOGIN_HOSPITAL_START:
            return {
                ...state,
                login: { ...state.login, message: '', loading: true, errors: {} }
            };
        case hospitalActionsTypes.LOGIN_HOSPITAL_END:
            return {
                ...state,
                login: { ...state.login, loading: false }
            };
        case hospitalActionsTypes.LOGIN_HOSPITAL_SUCCESS:
            console.log(payload);
            delete payload.hospital.password;
            localStorage.hospital = JSON.stringify(payload.hospital);
            localStorage.token = payload.token;
            return {
                ...state,
                isAuth: true,
                token: payload.token,
                profile: payload.hospital,
                login: { loading: false, message: payload.message, errors: {} }
            };
        case hospitalActionsTypes.LOGIN_HOSPITAL_FAILURE:
            return {
                ...state,
                login: { loading: false, message: '', errors: { ...payload.errors } }
            };
        default:
            return null;
    }
};
