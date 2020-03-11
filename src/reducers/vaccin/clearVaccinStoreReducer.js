import { vaccinActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case vaccinActionsTypes.CLEAR_VACCIN_STORE:
            return {
                ...state,
                createVaccin: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
