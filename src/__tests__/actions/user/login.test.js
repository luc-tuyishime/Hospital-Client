import { login } from '../../../actions/user';
import user from '../../../__mocks__/user';

const dispatch = jest.fn(action => action);

describe('Create user', () => {
    test('returns user information', async () => {
        const result = login(user)(dispatch);
        expect(result).toHaveProperty('type');
        expect(result).toHaveProperty('payload');
        expect(result.payload.data).toEqual(user);
    });
});
