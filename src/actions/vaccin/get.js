import { vaccinActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/vaccins',
    httpOptions: { token: localStorage.tokenUser },
    onStart: vaccinActionsTypes.GET_VACCINES_START,
    onEnd: vaccinActionsTypes.GET_VACCINES_END,
    onSuccess: vaccinActionsTypes.GET_VACCINES_SUCCESS,
    onFailure: vaccinActionsTypes.GET_VACCINES_FAILURE
}));
