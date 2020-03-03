import { hospitalActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/auth/signup',
    data: { ...formData },
    onStart: hospitalActionsTypes.SIGNUP_HOSPITAL_START,
    onEnd: hospitalActionsTypes.SIGNUP_HOSPITAL_END,
    onSuccess: hospitalActionsTypes.SIGNUP_HOSPITAL_SUCCESS,
    onFailure: hospitalActionsTypes.SIGNUP_HOSPITAL_FAILURE
}));
