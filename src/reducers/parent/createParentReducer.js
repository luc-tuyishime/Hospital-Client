import { parentActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case parentActionsTypes.CREATE_PARENT_START:
            return {
                ...state,
                createParent: { ...state.createParent, message: '', loading: true, errors: {} }
            };
        case parentActionsTypes.CREATE_PARENT_END:
            return {
                ...state,
                createParent: { ...state.createParent, loading: false }
            };
        case parentActionsTypes.CREATE_PARENT_SUCCESS:
            return {
                ...state,
                createParent: { loading: false, message: payload.message, errors: {} }
            };
        case parentActionsTypes.CREATE_PARENT_FAILURE:
            return {
                ...state,
                createParent: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
