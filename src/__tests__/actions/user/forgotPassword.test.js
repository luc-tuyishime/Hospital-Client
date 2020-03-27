import { forgotPassword } from '../../../actions/user';
import { sendEmail } from '../../../__mocks__/user';

const dispatch = jest.fn(action => action);

describe('Forgot password action', () => {
    test('returns user information', async () => {
        const result = forgotPassword(sendEmail)(dispatch);
        expect(result).toHaveProperty('type');
        expect(result).toHaveProperty('payload');
    });
});
