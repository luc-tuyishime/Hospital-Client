import { childActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case childActionsTypes.GET_CHILDREN_START:
            return {
                ...state,
                fetchChildren: { ...state.fetchChildren, message: '', loading: true, errors: {} }
            };
        case childActionsTypes.GET_CHILDREN_END:
            return {
                ...state,
                fetchParents: { ...state.fetchChildren, loading: false }
            };
        case childActionsTypes.GET_CHILDREN_SUCCESS:
            return {
                ...state,
                listOfChildren: payload.children,
                fetchChildren: { loading: false, message: payload.message, errors: {} }
            };
        case childActionsTypes.GET_CHILDREN_FAILURE:
            return {
                ...state,
                fetchChildren: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
