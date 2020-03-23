import ResetPassword from '../pages/create/ResetPassword';

export default {
    exact: true,
    name: 'Update Password',
    protected: false,
    role: 'admin',
    path: '/reset-password/:token',
    component: ResetPassword
}




