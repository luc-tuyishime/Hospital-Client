import { childActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/children',
    httpOptions: { token: localStorage.tokenUser },
    onStart: childActionsTypes.GET_CHILDREN_START,
    onEnd: childActionsTypes.GET_CHILDREN_END,
    onSuccess: childActionsTypes.GET_CHILDREN_SUCCESS,
    onFailure: childActionsTypes.GET_CHILDREN_FAILURE
}));
