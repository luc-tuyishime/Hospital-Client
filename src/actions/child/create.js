import { childActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/children',
    data: { ...formData },
    httpOptions: { token: localStorage.tokenUser },
    onStart: childActionsTypes.CREATE_CHILD_START,
    onEnd: childActionsTypes.CREATE_CHILD_END,
    onSuccess: childActionsTypes.CREATE_CHILD_SUCCESS,
    onFailure: childActionsTypes.CREATE_CHILD_FAILURE
}));
