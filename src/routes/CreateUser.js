import CreateUser from '../pages/create/CreateUser';

export default {
    exact: true,
    name: 'Create User',
    protected: false,
    role: 'admin',
    path: '/create-user',
    component: CreateUser
}