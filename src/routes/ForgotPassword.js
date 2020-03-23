import ForgotPassword from '../pages/create/ForgotPassword';

export default {
    exact: true,
    name: 'Create User',
    protected: false,
    role: 'admin',
    path: '/forgot-password',
    component: ForgotPassword
}