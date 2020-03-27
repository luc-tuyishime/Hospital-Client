import { resetPassword } from '../../../actions/user';
import { matchedResetPassword } from '../../../__mocks__/user';

const dispatch = jest.fn(action => action);

describe('Reset password action', () => {
    test('returns user information', async () => {
        const result = resetPassword(matchedResetPassword)(dispatch);
        expect(result).toHaveProperty('type');
        expect(result).toHaveProperty('payload');
    });
});
