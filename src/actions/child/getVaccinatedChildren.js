import { childActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/vaccinated/children',
    httpOptions: { token: localStorage.tokenUser },
    onStart: childActionsTypes.GET_VACCINATED_CHILDREN_START,
    onEnd: childActionsTypes.GET_VACCINATED_CHILDREN_END,
    onSuccess: childActionsTypes.GET_VACCINATED_CHILDREN_SUCCESS,
    onFailure: childActionsTypes.GET_VACCINATED_CHILDREN_FAILURE
}));
