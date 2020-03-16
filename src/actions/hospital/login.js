import { hospitalActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/auth/login',
    data: { ...formData },
    onStart: hospitalActionsTypes.LOGIN_HOSPITAL_START,
    onEnd: hospitalActionsTypes.LOGIN_HOSPITAL_END,
    onSuccess: hospitalActionsTypes.LOGIN_HOSPITAL_SUCCESS,
    onFailure: hospitalActionsTypes.LOGIN_HOSPITAL_FAILURE
}));
