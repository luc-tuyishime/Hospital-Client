import { parentActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case parentActionsTypes.GET_PARENTS_START:
            return {
                ...state,
                fetchParents: { ...state.fetchParents, message: '', loading: true, errors: {} }
            };
        case parentActionsTypes.GET_PARENTS_END:
            return {
                ...state,
                fetchParents: { ...state.fetchParents, loading: false }
            };
        case parentActionsTypes.GET_PARENTS_SUCCESS:
            return {
                ...state,
                listOfParents: payload.Parents,
                fetchParents: { loading: false, message: payload.message, errors: {} }
            };
        case parentActionsTypes.GET_PARENTS_FAILURE:
            return {
                ...state,
                fetchParents: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
