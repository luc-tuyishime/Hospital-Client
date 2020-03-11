import { parentActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/parents',
    data: { ...formData },
    httpOptions: { token: localStorage.tokenUser },
    onStart: parentActionsTypes.CREATE_PARENT_START,
    onEnd: parentActionsTypes.CREATE_PARENT_END,
    onSuccess: parentActionsTypes.CREATE_PARENT_SUCCESS,
    onFailure: parentActionsTypes.CREATE_PARENT_FAILURE
}));
