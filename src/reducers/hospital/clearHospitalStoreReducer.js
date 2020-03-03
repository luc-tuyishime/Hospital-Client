import { hospitalActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case hospitalActionsTypes.CLEAR_HOSPITAL_STORE:
            return {
                ...state,
                signup: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
