export default (Object.user = {
    firstName: 'John',
    lastName: 'Smith',
    username: 'josmi',
    email: 'josmi@email.com',
    role: 'admin',
    phone: '+250784421255'
});

export const userToRegister = {
    ...Object.user,
    password: 'Test123!'
};


export const wrongUserPassword = {
    ...Object.user,
    password: 'Abcd1234'
};

export const resetPassword = {
    newPassword: '12345678',
    confirmNewPassword: '12345678'
};

export const mismatchedResetPassword = {
    newPassword: '12345678',
    confirmNewPassword: '1234abcd'
};

export const matchedResetPassword = {
    newPassword: 'Brazzaville10!',
    confirmNewPassword: 'Brazzaville10!'
};

export const sendEmail = { email: 'noreplay@gmail.com' };
export const fakeEmail = { email: 'fsdfsdfsdfdsf--gmail.com' };
