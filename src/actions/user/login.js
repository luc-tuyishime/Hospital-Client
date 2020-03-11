import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/login',
    data: { ...payload },
    onStart: userActionsTypes.LOGIN_USER_START,
    onEnd: userActionsTypes.LOGIN_USER_END,
    onSuccess: userActionsTypes.LOGIN_USER_SUCCESS,
    onFailure: userActionsTypes.LOGIN_USER_FAILURE
}));
