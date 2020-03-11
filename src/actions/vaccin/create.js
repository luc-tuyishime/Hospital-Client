import { vaccinActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/vaccins',
    data: { ...formData },
    httpOptions: { token: localStorage.tokenUser },
    onStart: vaccinActionsTypes.CREATE_VACCIN_START,
    onEnd: vaccinActionsTypes.CREATE_VACCIN_END,
    onSuccess: vaccinActionsTypes.CREATE_VACCIN_SUCCESS,
    onFailure: vaccinActionsTypes.CREATE_VACCIN_FAILURE
}));
