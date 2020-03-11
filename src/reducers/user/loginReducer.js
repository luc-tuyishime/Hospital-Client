import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {

    switch (type) {
        case userActionsTypes.LOGIN_USER_START:
            return {
                ...state,
                loginUser: { ...state.login, message: '', loading: true, errors: {} }
            };
        case userActionsTypes.LOGIN_USER_END:
            return {
                ...state,
                loginUser: { ...state.login, loading: false }
            };
        case userActionsTypes.LOGIN_USER_SUCCESS:
            localStorage.user = JSON.stringify(payload.user);
            localStorage.tokenUser = payload.token;
            return {
                ...state,
                isAuth: true,
                profile: payload.user,
                tokenUser: payload.token,
                loginUser: { loading: false, message: payload.message, errors: {} }
            };
        case userActionsTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loginUser: { loading: false, message: '', errors: { ...payload.errors } }
            };
        default:
            return null;
    }
};
