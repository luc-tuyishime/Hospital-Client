import { childActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case childActionsTypes.GET_VACCINATED_CHILDREN_START:
            return {
                ...state,
                getVaccinatedChildren: { ...state.getVaccinatedChildren, message: '', loading: true, errors: {} }
            };
        case childActionsTypes.GET_VACCINATED_CHILDREN_END:
            return {
                ...state,
                getVaccinatedChildren: { ...state.getVaccinatedChildren, loading: false }
            };
        case childActionsTypes.GET_VACCINATED_CHILDREN_SUCCESS:
            return {
                ...state,
                vaccinatedChildren: payload.children,
                getVaccinatedChildren: { loading: false, message: payload.message, errors: {} }
            };
        case childActionsTypes.GET_VACCINATED_CHILDREN_FAILURE:
            return {
                ...state,
                getVaccinatedChildren: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
