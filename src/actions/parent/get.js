import { parentActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/parents',
    httpOptions: { token: localStorage.tokenUser },
    onStart: parentActionsTypes.GET_PARENTS_START,
    onEnd: parentActionsTypes.GET_PARENTS_END,
    onSuccess: parentActionsTypes.GET_PARENTS_SUCCESS,
    onFailure: parentActionsTypes.GET_PARENTS_FAILURE
}));
