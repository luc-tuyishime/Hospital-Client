import { childActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case childActionsTypes.CLEAR_CHILD_STORE:
            return {
                ...state,
                createChild: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
