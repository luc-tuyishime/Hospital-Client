import { childActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case childActionsTypes.CREATE_CHILD_START:
            console.log('1', payload);
            return {
                ...state,
                createChild: { ...state.createChild, message: '', loading: true, errors: {} }
            };
        case childActionsTypes.CREATE_CHILD_END:
            return {
                ...state,
                createChild: { ...state.createChild, loading: false }
            };
        case childActionsTypes.CREATE_CHILD_SUCCESS:
            console.log('2ii', payload);
            return {
                ...state,
                createChild: { loading: false, message: payload.message, errors: {} }
            };
        case childActionsTypes.CREATE_CHILD_FAILURE:
            console.log('2', payload);
            return {
                ...state,
                createChild: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};


