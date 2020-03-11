import { parentActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case parentActionsTypes.CLEAR_PARENT_STORE:
            return {
                ...state,
                createParent: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
